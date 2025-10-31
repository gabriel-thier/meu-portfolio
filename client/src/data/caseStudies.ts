export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  description: string;
  content: ContentBlock[];
}

export interface ContentBlock {
  type: 'text' | 'image' | 'video';
  content: string;
  caption?: string;
}

// Placeholder data - user can easily edit this file to add their own content
export const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Case Study 1',
    subtitle: 'Digital Product Design',
    coverImage: '/placeholder-case-1.jpg',
    description: 'A brief description of the first case study showcasing the problem, solution, and impact.',
    content: [
      {
        type: 'text',
        content: '## The Challenge\n\nDescribe the problem you were solving and the context of the project. What were the main pain points?'
      },
      {
        type: 'image',
        content: '/placeholder-process-1.jpg',
        caption: 'Research and discovery phase'
      },
      {
        type: 'text',
        content: '## The Solution\n\nExplain your design approach and the key decisions you made throughout the process.'
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        caption: 'Product demonstration'
      },
      {
        type: 'text',
        content: '## The Impact\n\nShare the results and metrics that demonstrate the success of your work.'
      },
      {
        type: 'image',
        content: '/placeholder-final-1.jpg',
        caption: 'Final design implementation'
      }
    ]
  },
  {
    id: 'case-2',
    title: 'Case Study 2',
    subtitle: 'User Experience Design',
    coverImage: '/placeholder-case-2.jpg',
    description: 'A brief description of the second case study highlighting the design process and outcomes.',
    content: [
      {
        type: 'text',
        content: '## Background\n\nProvide context about the project, the client, and the goals you set out to achieve.'
      },
      {
        type: 'image',
        content: '/placeholder-wireframe-2.jpg',
        caption: 'Initial wireframes and user flows'
      },
      {
        type: 'text',
        content: '## Design Process\n\nWalk through your methodology, from research to final implementation.'
      },
      {
        type: 'image',
        content: '/placeholder-mockup-2.jpg',
        caption: 'High-fidelity mockups'
      },
      {
        type: 'text',
        content: '## Results\n\nQuantify the impact of your design work with metrics and user feedback.'
      }
    ]
  },
  {
    id: 'case-3',
    title: 'Case Study 3',
    subtitle: 'Interface Design',
    coverImage: '/placeholder-case-3.jpg',
    description: 'A brief description of the third case study demonstrating design thinking and execution.',
    content: [
      {
        type: 'text',
        content: '## Project Overview\n\nIntroduce the project scope, stakeholders, and your role in the team.'
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        caption: 'User research insights'
      },
      {
        type: 'text',
        content: '## Design Exploration\n\nShowcase the different concepts and iterations you explored.'
      },
      {
        type: 'image',
        content: '/placeholder-iterations-3.jpg',
        caption: 'Design iterations and refinements'
      },
      {
        type: 'text',
        content: '## Conclusion\n\nSummarize the key learnings and the value delivered to users and the business.'
      }
    ]
  }
];
