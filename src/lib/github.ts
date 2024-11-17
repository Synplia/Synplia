import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: import.meta.env.REPO_TOKEN
});

const ORG_NAME = import.meta.env.ORG_NAME;

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
  stars: number;
  language: string;
  updatedAt: string;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const { data: repos } = await octokit.repos.listForOrg({
      org: ORG_NAME,
      sort: 'updated',
      per_page: 100,
      type: 'public'
    });

    const featuredProjects = await Promise.all(
      repos
        .filter(repo => repo.topics?.includes('portfolio-featured'))
        .slice(0, 4)
        .map(async (repo) => {
          let readmeImage = '/projects/default-project.jpg';
          
          try {
            const { data: readme } = await octokit.repos.getReadme({
              owner: ORG_NAME,
              repo: repo.name,
            });
            
            const content = atob(readme.content);
            const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
            
            if (imageMatch && imageMatch[1]) {
              const imagePath = imageMatch[1];
              if (imagePath.startsWith('http')) {
                readmeImage = imagePath;
              } else {
                readmeImage = `https://raw.githubusercontent.com/${ORG_NAME}/${repo.name}/main/${imagePath.replace(/^\.\//, '')}`;
              }
            }
          } catch (error) {
            console.warn(`No se pudo obtener el README para ${repo.name}:`, error);
          }

          let languages: string[] = [];
          try {
            const { data: languagesData } = await octokit.repos.listLanguages({
              owner: ORG_NAME,
              repo: repo.name,
            });
            languages = Object.keys(languagesData);
          } catch (error) {
            console.warn(`No se pudieron obtener los lenguajes para ${repo.name}`);
          }

          return {
            title: repo.name,
            description: repo.description || '',
            tech: [
              ...(repo.topics?.filter(topic => topic !== 'portfolio-featured') || []),
              ...languages
            ],
            image: readmeImage,
            url: repo.homepage || repo.html_url, 
            stars: repo.stargazers_count,
            language: repo.language || 'N/A',
            updatedAt: repo.updated_at
          };
        })
    );

    return featuredProjects;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}

export async function getCachedFeaturedProjects(): Promise<Project[]> {
  const CACHE_KEY = 'featured-projects';
  const CACHE_DURATION = 1000 * 60 * 60; 

  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
  }

  const projects = await getFeaturedProjects();

  if (typeof window !== 'undefined') {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data: projects,
        timestamp: Date.now()
      })
    );
  }

  return projects;
}