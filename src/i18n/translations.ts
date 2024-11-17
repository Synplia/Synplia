export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    cta: {
      projects: string;
      contact: string;
    };
  };
  about: {
    title: string;
    description: string;
    philosophy: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
      features: {
        name: string;
        desc: string;
      }[];
    }[];
  };
  projects: {
    title: string;
    lastUpdate: string;
    noProjects: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
      sending: string;
      placeholder: {
        name: string;
        email: string;
        message: string;
      };
    };
  };
  footer: {
    slogan: string;
    rights: string;
  };
}

export const es: Translation = {
  nav: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    projects: "Proyectos",
    contact: "Contacto"
  },
  hero: {
    title: "Synplia Studio",
    subtitle: "Transformamos la complejidad en simplicidad elegante",
    tagline: "Soluciones que se adaptan a ti",
    cta: {
      projects: "Ver Proyectos",
      contact: "Iniciar Transformación"
    }
  },
  about: {
    title: "Nosotros",
    description: "En Synplia Studio, nos especializamos en convertir desafíos tecnológicos complejos en soluciones elegantes y accesibles. Nuestro equipo combina experiencia técnica con un profundo entendimiento de las necesidades de cada cliente, asegurando que cada solución sea tan única como tu negocio.",
    philosophy: {
      title: "Nuestros Principios",
      items: [
        {
          title: "Simplicidad Elegante",
          description: "Convertimos procesos complejos en experiencias fluidas y accesibles, sin comprometer la funcionalidad"
        },
        {
          title: "Personalización Total",
          description: "Cada solución se diseña específicamente para adaptarse a tus necesidades y objetivos únicos"
        },
        {
          title: "Innovación Práctica",
          description: "Implementamos tecnologías modernas de forma inteligente, priorizando la usabilidad y el valor real"
        }
      ]
    }
  },
  services: {
    title: "Servicios",
    items: [
      {
        title: "Desarrollo Web Personalizado",
        description: "Creamos experiencias web intuitivas que conectan con tus usuarios.",
        features: [
          { name: "Diseño Intuitivo", desc: "Interfaces claras y accesibles" },
          { name: "Rendimiento", desc: "Optimización y velocidad" },
          { name: "Responsive", desc: "Adaptación perfecta" },
          { name: "SEO", desc: "Visibilidad garantizada" }
        ]
      },
      {
        title: "Transformación Digital",
        description: "Modernizamos tu negocio con soluciones tecnológicas efectivas.",
        features: [
          { name: "Automatización", desc: "Procesos optimizados" },
          { name: "Integración", desc: "Sistemas conectados" },
          { name: "Análisis", desc: "Datos accionables" },
          { name: "Escalabilidad", desc: "Crecimiento sostenible" }
        ]
      },
      {
        title: "Aplicaciones a Medida",
        description: "Desarrollamos software que se adapta perfectamente a tu flujo de trabajo.",
        features: [
          { name: "Personalización", desc: "Adaptación total" },
          { name: "Multiplataforma", desc: "Acceso universal" },
          { name: "Seguridad", desc: "Protección robusta" },
          { name: "Soporte", desc: "Acompañamiento continuo" }
        ]
      },
      {
        title: "Consultoría Tecnológica",
        description: "Te guiamos en la toma de decisiones tecnológicas estratégicas.",
        features: [
          { name: "Estrategia", desc: "Planificación efectiva" },
          { name: "Optimización", desc: "Mejora continua" },
          { name: "Formación", desc: "Capacitación práctica" },
          { name: "Seguimiento", desc: "Evaluación constante" }
        ]
      }
    ]
  },
  projects: {
    title: "Proyectos",
    noProjects: "No hay proyectos disponibles",
    lastUpdate: "Última actualización:"
  },
  contact: {
    title: "Contacto",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Iniciar Conversación",
      success: "¡Mensaje enviado con éxito!",
      error: "Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.",
      sending: "Enviando...",
      placeholder: {
        name: "Tu nombre",
        email: "tu@email.com",
        message: "Cuéntanos sobre tu proyecto"
      }
    }
  },
  footer: {
    slogan: "Simplificando la tecnología, potenciando tu negocio",
    rights: "Todos los derechos reservados."
  }
};

export const en: Translation = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact"
  },
  hero: {
    title: "Synplia Studio",
    subtitle: "Transforming complexity into elegant simplicity",
    tagline: "Solutions that adapt to you",
    cta: {
      projects: "View Projects",
      contact: "Start Transformation"
    }
  },
  about: {
    title: "About Us",
    description: "At Synplia Studio, we specialize in turning complex technological challenges into elegant and accessible solutions. Our team combines technical expertise with a deep understanding of each client's needs, ensuring that every solution is as unique as your business.",
    philosophy: {
      title: "Our Principles",
      items: [
        {
          title: "Elegant Simplicity",
          description: "We transform complex processes into fluid and accessible experiences, without compromising functionality"
        },
        {
          title: "Total Customization",
          description: "Each solution is specifically designed to adapt to your unique needs and objectives"
        },
        {
          title: "Practical Innovation",
          description: "We implement modern technologies intelligently, prioritizing usability and real value"
        }
      ]
    }
  },
  services: {
    title: "Services",
    items: [
      {
        title: "Custom Web Development",
        description: "We create intuitive web experiences that connect with your users.",
        features: [
          { name: "Intuitive Design", desc: "Clear and accessible interfaces" },
          { name: "Performance", desc: "Optimization and speed" },
          { name: "Responsive", desc: "Perfect adaptation" },
          { name: "SEO", desc: "Guaranteed visibility" }
        ]
      },
      {
        title: "Digital Transformation",
        description: "We modernize your business with effective technological solutions.",
        features: [
          { name: "Automation", desc: "Optimized processes" },
          { name: "Integration", desc: "Connected systems" },
          { name: "Analytics", desc: "Actionable data" },
          { name: "Scalability", desc: "Sustainable growth" }
        ]
      },
      {
        title: "Custom Applications",
        description: "We develop software that perfectly adapts to your workflow.",
        features: [
          { name: "Customization", desc: "Total adaptation" },
          { name: "Cross-platform", desc: "Universal access" },
          { name: "Security", desc: "Robust protection" },
          { name: "Support", desc: "Continuous accompaniment" }
        ]
      },
      {
        title: "Technology Consulting",
        description: "We guide you in making strategic technology decisions.",
        features: [
          { name: "Strategy", desc: "Effective planning" },
          { name: "Optimization", desc: "Continuous improvement" },
          { name: "Training", desc: "Practical training" },
          { name: "Monitoring", desc: "Constant evaluation" }
        ]
      }
    ]
  },
  projects: {
    title: "Projects",
    noProjects: "No projects available",
    lastUpdate: "Last update:"
  },
  contact: {
    title: "Contact",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Start Conversation",
      success: "Message sent successfully!",
      error: "An error has occurred. Please try again later.",
      sending: "Sending...",
      placeholder: {
        name: "Your name",
        email: "your@email.com",
        message: "Tell us about your project"
      }
    }
  },
  footer: {
    slogan: "Simplifying technology, empowering your business",
    rights: "All rights reserved."
  }
};