import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const isProduction = import.meta.env.PROD;
  const basePath = isProduction ? '/Synplia' : '';
  
  const path = isProduction 
    ? context.url.pathname.replace(basePath, '') 
    : context.url.pathname;

  if (path === '/') {
    return next();
  }
  
  const validLanguages = ['es', 'en'];
  const urlLanguage = path.split('/')[1];

  if (!validLanguages.includes(urlLanguage)) {
    const preferredLanguage = context.request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'es';
    const targetLanguage = validLanguages.includes(preferredLanguage) ? preferredLanguage : 'es';
    return context.redirect(`${basePath}/${targetLanguage}${path}`);
  }

  return next();
});