
# Modern Portfolio Website

A responsive personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring a blog section, contact form, and user authentication.

## Features

- 📱 Fully responsive design across all devices
- 🎨 Modern UI with elegant animations
- 👤 About section with bio, skills and experience
- 🖼️ Dynamic projects section to showcase your work
- 📝 Blog section with authentication (login/register)
- 📩 Contact form with EmailJS integration
- 📄 Downloadable resume that can be updated for specific job descriptions
- 🔄 Dynamic content that can be easily updated

## Technologies Used

- **React.js**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **ShadCN UI**: Component library for elegant UI elements
- **EmailJS**: For handling contact form submissions without a backend
- **React Router**: For handling navigation and routing
- **Framer Motion**: For smooth animations
- **React Query**: For state management

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser and navigate to `http://localhost:8080`

## Customizing Content

The portfolio is designed to be easily customizable. Here's how to update different sections:

### Personal Information
Edit the content in the components to update your name, bio, and contact information.

### Skills
Update the `skillsData` array in `src/components/sections/SkillsSection.tsx` to reflect your own skills and proficiency levels.

### Projects
Modify the `projectsData` array in `src/components/sections/ProjectsSection.tsx` to showcase your own projects, technologies, and links.

### Blog
Edit the blog posts in the `sampleBlogPosts` array in the blog-related components to add your own articles.

### Resume
Replace the `public/resume.pdf` file with your own resume document for download functionality.

## Contact Form Setup

To make the contact form fully functional:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create a new service and template
3. Update the `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_USER_ID` constants in the `EmailContact.tsx` component

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- ShadCN UI for the beautiful UI components
- Lucide Icons for the icon set
