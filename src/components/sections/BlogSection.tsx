
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

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

// Sample blog posts
const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your functional components.",
    content: "React Hooks are a revolutionary feature introduced in React 16.8. They allow you to use state and other React features without writing a class. This means that you can reuse stateful logic between components without changing your component hierarchy.\n\nIn this article, we'll explore the most commonly used hooks: useState, useEffect, useContext, and useReducer. We'll also look at how to create your own custom hooks to extract and reuse logic across your application.",
    category: "React",
    tags: ["React", "Hooks", "Frontend"],
    date: "2023-05-15",
    author: "Jane Doe",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: "2",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "A complete guide to creating responsive user interfaces with Tailwind CSS.",
    content: "Tailwind CSS has gained immense popularity for its utility-first approach to CSS. Instead of writing custom CSS, you apply pre-defined classes directly in your HTML. This approach speeds up development and helps maintain consistency across your project.\n\nIn this comprehensive guide, we'll cover Tailwind's responsive design system, customization options, and best practices for building modern, responsive interfaces. By the end of this tutorial, you'll be able to create complex layouts that look great on any device.",
    category: "CSS",
    tags: ["Tailwind CSS", "Responsive Design", "Frontend"],
    date: "2023-06-22",
    author: "John Smith",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: "3",
    title: "State Management in React: Context API vs Redux",
    excerpt: "Comparing different approaches to manage state in React applications.",
    content: "Managing state in large React applications can be challenging. Two popular solutions are Redux and React's built-in Context API. In this article, we'll compare these approaches, discussing their strengths, weaknesses, and use cases.\n\nWe'll explore when to use Context API for simpler state management needs and when Redux's more structured approach becomes beneficial. Through practical examples, you'll learn how to implement both solutions and make informed decisions about state management in your React projects.",
    category: "React",
    tags: ["React", "Redux", "State Management"],
    date: "2023-07-10",
    author: "Alex Johnson",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: "4",
    title: "Introduction to TypeScript for React Developers",
    excerpt: "Learn how TypeScript can improve your React development experience.",
    content: "TypeScript adds static typing to JavaScript, providing better tooling, error catching, and documentation. For React developers, TypeScript offers significant advantages in building robust, maintainable applications.\n\nIn this introduction, we'll cover TypeScript basics, how to set up a React project with TypeScript, and practical examples of typing components, props, state, and hooks. You'll see how TypeScript can catch errors during development and improve code quality through better tooling and documentation.",
    category: "TypeScript",
    tags: ["TypeScript", "React", "JavaScript"],
    date: "2023-08-05",
    author: "Maya Patel",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

const BlogPreviewSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would fetch from an API
    setPosts(sampleBlogPosts.slice(0, 3)); // Show only 3 posts in the preview
  }, []);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights and tutorials on web development and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
              <div className="h-48 bg-gray-200 relative">
                {/* Post image */}
                <div className="absolute inset-0">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">Blog Image</div>
                  )}
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  By {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild 
                  variant="ghost" 
                  className="w-full text-portfolio-accent hover:text-portfolio-blue hover:bg-gray-50"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <a>Read More →</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            className="bg-portfolio-accent hover:bg-portfolio-blue"
            onClick={() => navigate('/blog')}
          >
            <a>View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
