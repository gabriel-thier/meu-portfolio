# Portfolio Website User Guide

## Website Overview

**Purpose**: Showcase your digital product design work through case studies, share your professional background, and enable potential clients to contact you.

**Access**: Public website, no login required.

## Powered by Manus

This portfolio is built with cutting-edge web technologies for optimal performance and user experience. The tech stack includes React 19 with TypeScript for type-safe component development, Tailwind CSS 4 for modern utility-first styling, and shadcn/ui for accessible component primitives. The frontend leverages Vite as the build tool for lightning-fast hot module replacement during development. Deployment runs on auto-scaling infrastructure with global CDN for instant page loads worldwide.

## Using Your Website

The portfolio presents your work through three main sections accessible from the top navigation.

In the "Work" section, visitors see cards for each case study. Click any card to view the full case study with detailed storytelling that includes text sections, images with captions, and embedded videos. Use the "Back to Work" button to return to the homepage, or explore other projects through the "More Work" section at the bottom of each case study page.

The "About" section introduces you with three paragraphs describing your expertise and approach. Visitors can click "Download Resume" to get your CV file, which opens in a new tab for easy saving.

The "Contact" section provides a form where visitors fill in "Your Name", "Your Email", and "Your Message" fields, then click "Send Message". This opens their default email client with the message pre-filled, ready to send to your email address.

## Managing Your Website

To update case studies, navigate to the Code panel in the Management UI. Open "client/src/data/caseStudies.ts" and edit the case study objects directly. Each case has properties for title, subtitle, cover image path, description, and an array of content blocks. Content blocks can be text (using Markdown), images, or YouTube video embeds. Save your changes and the site updates automatically.

To add images, upload files to the "client/public" folder via the Code panel. Reference them in your case studies using "/filename.jpg" or "/folder/filename.jpg" paths.

To change your bio text, open "client/src/pages/Home.tsx" in the Code panel and find the "About Me" section around line 90. Replace the paragraph text with your own story.

To update your email address, edit "client/src/pages/Home.tsx" and find the "handleSubmit" function. Replace "your-email@example.com" with your actual email.

To customize social links, open "client/src/components/Footer.tsx" and update the LinkedIn, Behance, and Dribbble URLs with your profile links.

View your live site anytime through the Preview panel. Check visitor analytics in the Dashboard panel after publishing.

## Next Steps

Talk to Manus AI anytime to request changes or add features. You can ask to adjust colors, add new sections, integrate analytics, or modify any aspect of the design. The portfolio is fully customizable to match your personal brand and evolving needs.

## Detailed Documentation

For comprehensive step-by-step instructions on managing content, running the project locally, and deploying independently with your own domain, see **MANUAL_COMPLETO.md** in the project root directory. This detailed guide is designed for beginners and covers everything from editing case studies to publishing on platforms like Vercel or Netlify.
