# Content Management Guide

This portfolio is designed to be easy to edit and manage. All content is stored in simple TypeScript files that you can edit directly.

## Editing Case Studies

All case study content is located in: `client/src/data/caseStudies.ts`

### Case Study Structure

Each case study has the following properties:

```typescript
{
  id: 'unique-case-id',           // Unique identifier (used in URL)
  title: 'Case Study Title',      // Main title
  subtitle: 'Project Category',   // Category or type
  coverImage: '/image.jpg',       // Cover image path
  description: 'Brief summary',   // Short description
  content: [...]                  // Array of content blocks
}
```

### Content Blocks

Content blocks can be of three types:

#### 1. Text Block
```typescript
{
  type: 'text',
  content: '## Heading\n\nYour markdown content here...'
}
```
Supports full Markdown syntax including:
- Headings (##, ###)
- **Bold** and *italic* text
- Lists
- Links

#### 2. Image Block
```typescript
{
  type: 'image',
  content: '/path/to/image.jpg',
  caption: 'Optional image caption'
}
```

#### 3. Video Block
```typescript
{
  type: 'video',
  content: 'https://www.youtube.com/embed/VIDEO_ID',
  caption: 'Optional video caption'
}
```

### Adding Your Own Case Studies

1. Open `client/src/data/caseStudies.ts`
2. Replace the placeholder content with your own
3. Add your images to the `client/public` folder
4. Reference images using `/filename.jpg` (they'll be served from the public folder)

Example:
```typescript
export const caseStudies: CaseStudy[] = [
  {
    id: 'my-first-project',
    title: 'My Amazing Project',
    subtitle: 'Mobile App Design',
    coverImage: '/projects/project1-cover.jpg',
    description: 'A mobile app that helps users track their fitness goals.',
    content: [
      {
        type: 'text',
        content: '## The Challenge\n\nUsers needed a simple way to track workouts...'
      },
      {
        type: 'image',
        content: '/projects/project1-research.jpg',
        caption: 'User research findings'
      },
      // ... more content blocks
    ]
  },
  // ... more case studies
];
```

## Editing About Section

The about section is in `client/src/pages/Home.tsx` around line 90.

To edit:
1. Open `client/src/pages/Home.tsx`
2. Find the `{/* About Section */}` comment
3. Update the paragraph text with your own bio
4. Replace "Your photo here" placeholder with your actual photo

## Adding Your Resume

1. Add your resume PDF to `client/public/resume.pdf`
2. Open `client/src/pages/Home.tsx`
3. Find the `handleDownloadResume` function
4. Replace it with:
```typescript
const handleDownloadResume = () => {
  window.open('/resume.pdf', '_blank');
};
```

## Updating Contact Email

1. Open `client/src/pages/Home.tsx`
2. Find the `handleSubmit` function
3. Replace `your-email@example.com` with your actual email address

## Adding Images

All images should be placed in the `client/public` folder:

```
client/public/
  ├── resume.pdf
  ├── photo.jpg
  └── projects/
      ├── project1-cover.jpg
      ├── project1-detail1.jpg
      └── project2-cover.jpg
```

Reference them in your code using `/filename.jpg` or `/folder/filename.jpg`

## Customizing Colors

While the portfolio uses a minimalist black and white theme, you can adjust colors in `client/src/index.css`:

- Look for the `:root` section (around line 45)
- Modify the color values using the `oklch()` format
- The first number controls lightness (0 = black, 1 = white)

## Social Links

Update social media links in `client/src/components/Footer.tsx`:

```typescript
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="https://behance.net/yourprofile" ...>
<a href="https://dribbble.com/yourprofile" ...>
```

## Running Locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Tips

- Keep case study titles concise (2-4 words)
- Use high-quality images (at least 1200px wide)
- Write descriptions that are 1-2 sentences
- Use Markdown headings (##) to structure your case study content
- Test on mobile after making changes
