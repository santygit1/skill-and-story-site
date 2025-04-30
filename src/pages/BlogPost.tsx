
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  imageUrl?: string;
}

// Sample blog posts - would come from an API in a real application
const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your functional components.",
    content: "React Hooks are a revolutionary feature introduced in React 16.8. They allow you to use state and other React features without writing a class. This means that you can reuse stateful logic between components without changing your component hierarchy.\n\nIn this article, we'll explore the most commonly used hooks: useState, useEffect, useContext, and useReducer. We'll also look at how to create your own custom hooks to extract and reuse logic across your application.\n\n## useState Hook\n\nThe useState hook lets you add React state to functional components. Here's a simple counter example:\n\n```jsx\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\n## useEffect Hook\n\nThe useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.\n\n```jsx\nimport React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  // Similar to componentDidMount and componentDidUpdate\n  useEffect(() => {\n    // Update the document title using the browser API\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\nHooks are a game-changer for React development, making your code more readable and maintainable. As you practice using them, you'll discover more efficient patterns for managing state and side effects in your applications.",
    category: "React",
    tags: ["React", "Hooks", "Frontend"],
    date: "2023-05-15",
    author: "Jane Doe",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "A complete guide to creating responsive user interfaces with Tailwind CSS.",
    content: "Tailwind CSS has gained immense popularity for its utility-first approach to CSS. Instead of writing custom CSS, you apply pre-defined classes directly in your HTML. This approach speeds up development and helps maintain consistency across your project.\n\nIn this comprehensive guide, we'll cover Tailwind's responsive design system, customization options, and best practices for building modern, responsive interfaces. By the end of this tutorial, you'll be able to create complex layouts that look great on any device.\n\n## Getting Started with Tailwind\n\nFirst, you need to install Tailwind CSS in your project:\n\n```bash\nnpm install tailwindcss\n```\n\nThen create a configuration file:\n\n```bash\nnpx tailwindcss init\n```\n\n## Responsive Design with Tailwind\n\nTailwind makes responsive design incredibly straightforward with its mobile-first approach. You start by defining how elements should look on small screens, then add responsive modifiers to adjust the design for larger screens:\n\n```html\n<div class=\"text-sm md:text-base lg:text-lg\">\n  This text changes size at different breakpoints!\n</div>\n```\n\n## Customizing Tailwind\n\nOne of Tailwind's strengths is its customizability. In the tailwind.config.js file, you can define your brand colors, spacing, breakpoints, and more:\n\n```js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: '#3498db',\n        secondary: '#2ecc71',\n      },\n      spacing: {\n        '72': '18rem',\n        '84': '21rem',\n        '96': '24rem',\n      }\n    }\n  },\n  variants: {},\n  plugins: [],\n}\n```\n\nBy embracing Tailwind's utility-first philosophy, you'll find yourself building interfaces faster and more consistently than ever before. The learning curve may seem steep at first, but the productivity gains are absolutely worth it.",
    category: "CSS",
    tags: ["Tailwind CSS", "Responsive Design", "Frontend"],
    date: "2023-06-22",
    author: "John Smith",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    title: "State Management in React: Context API vs Redux",
    excerpt: "Comparing different approaches to manage state in React applications.",
    content: "Managing state in large React applications can be challenging. Two popular solutions are Redux and React's built-in Context API. In this article, we'll compare these approaches, discussing their strengths, weaknesses, and use cases.\n\nWe'll explore when to use Context API for simpler state management needs and when Redux's more structured approach becomes beneficial. Through practical examples, you'll learn how to implement both solutions and make informed decisions about state management in your React projects.\n\n## React Context API\n\nThe Context API is built into React and provides a way to pass data through the component tree without having to pass props down manually at every level.\n\nHere's a basic example:\n\n```jsx\n// Create a context\nconst ThemeContext = React.createContext('light');\n\n// Provider in parent component\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <ThemedButton />\n    </ThemeContext.Provider>\n  );\n}\n\n// Consumer in a deeply nested component\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  return <Button theme={theme} />;\n}\n```\n\n## Redux\n\nRedux provides a central store that holds all state, with actions and reducers to manage state changes in a predictable way.\n\n```jsx\n// Action\nconst increment = () => {\n  return {\n    type: 'INCREMENT'\n  };\n};\n\n// Reducer\nconst counterReducer = (state = 0, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n    default:\n      return state;\n  }\n};\n\n// Store\nconst store = createStore(counterReducer);\n\n// Component\nfunction Counter() {\n  const count = useSelector(state => state);\n  const dispatch = useDispatch();\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => dispatch(increment())}>Increment</button>\n    </div>\n  );\n}\n```\n\n## Choosing Between Context and Redux\n\nContext API is often sufficient for:\n- Small to medium applications\n- Low-frequency updates\n- Simple state sharing across components\n\nRedux shines in:\n- Large applications with complex state logic\n- Applications with frequent state updates\n- When you need powerful debugging capabilities\n- When middleware (like handling async operations) is important\n\nBoth approaches have their place in modern React development. Understanding the tradeoffs will help you make the right choice for your specific project needs.",
    category: "React",
    tags: ["React", "Redux", "State Management"],
    date: "2023-07-10",
    author: "Alex Johnson",
    imageUrl: "/placeholder.svg",
  },
  // Additional blog posts will appear here
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would be an API call to fetch the specific post
    const fetchPost = async () => {
      setLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundPost = sampleBlogPosts.find(post => post.id === id);
        setPost(foundPost || null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [id]);

  // Function to convert markdown-like content with code blocks to HTML
  const formatContent = (content: string) => {
    if (!content) return '';
    
    // Split content by code blocks
    const parts = content.split('```');
    
    return parts.map((part, i) => {
      // If this is a code block (odd indexes after the split)
      if (i % 2 === 1) {
        const [language, ...codeLines] = part.split('\n');
        return (
          <pre key={i} className="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto">
            <code>{codeLines.join('\n')}</code>
          </pre>
        );
      } 
      // Regular text
      else {
        // Process paragraphs and headers
        return (
          <div key={i}>
            {part.split('\n\n').map((paragraph, j) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={j} className="text-2xl font-bold my-6 border-b pb-2">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return paragraph ? (
                <p key={j} className="my-4">
                  {paragraph}
                </p>
              ) : null;
            })}
          </div>
        );
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20">
        {loading ? (
          <div className="container mx-auto px-4 flex justify-center items-center h-64">
            <p className="text-xl text-gray-500">Loading post...</p>
          </div>
        ) : post ? (
          <article className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="mb-6 text-portfolio-accent hover:text-portfolio-blue"
              >
                ← Back to all posts
              </Button>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 mb-8 text-gray-600">
                <span>{post.date}</span>
                <span>•</span>
                <span>By {post.author}</span>
                <span>•</span>
                <Badge variant="outline">{post.category}</Badge>
              </div>
              
              <div className="h-64 md:h-96 bg-gray-200 rounded-lg mb-8 relative">
                {/* Post image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover rounded-lg" 
                    />
                  ) : (
                    "Featured Image"
                  )}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {formatContent(post.content)}
              </div>
              
              <div className="mt-10 pt-6 border-t">
                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  onClick={() => navigate('/blog')}
                  className="bg-portfolio-accent hover:bg-portfolio-blue"
                >
                  Read More Articles
                </Button>
              </div>
            </div>
          </article>
        ) : (
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button 
              onClick={() => navigate('/blog')}
              className="bg-portfolio-accent hover:bg-portfolio-blue"
            >
              Back to Blog
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
