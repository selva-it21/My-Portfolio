type TSocialLink = {
  platform: 'leetcode' | 'github' | 'linkedin';
  url: string;
};

type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
    links: TSocialLink[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Selva's Portfolio",
    fullName: "Selva S",
    email: "selva.it21@gmail.com",
  },
  hero: {
    name: "Selva S",
    p: ["BIT'25 - Aspiring Software Engineer"],
    links: [
      {
        platform: 'leetcode',
        url: 'https://leetcode.com/selva-it21',
      },
      {
        platform: 'github',
        url: 'https://github.com/selva-it21', // Remove duplicate slash
      },
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/selva-it21', // Add www
      },
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a highly organized and dedicated Information Technology
 Engineering student with a strong background in web
 development, data structures, and database management.
 Proven leadership and project management skills through
 successful team projects and hackathon achievements.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Project Duration.",
    },
    feedbacks: {
      p: "My Learnings",
      h2: "Other profiles.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};