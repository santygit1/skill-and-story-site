
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
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

// Sample blog posts - in a real app, these would come from an API
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
    imageUrl: "/placeholder.svg",
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
    imageUrl: "/placeholder.svg",
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
    imageUrl: "/placeholder.svg",
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
    imageUrl: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Advanced CSS Animations and Transitions",
    excerpt: "Create stunning web animations using modern CSS techniques.",
    content: "Modern CSS provides powerful capabilities for creating animations and transitions that enhance user experience. In this in-depth tutorial, we'll explore advanced CSS animation techniques using keyframes, transforms, and the Web Animation API.\n\nWe'll cover performance optimization, accessibility considerations, and when to use CSS animations versus JavaScript-based solutions. By the end of this article, you'll have the knowledge to create smooth, engaging animations that delight users without sacrificing performance.",
    category: "CSS",
    tags: ["CSS", "Animations", "UX Design"],
    date: "2023-09-18",
    author: "Sophia Lee",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Testing React Applications with Jest and React Testing Library",
    excerpt: "Learn how to implement a robust testing strategy for your React apps.",
    content: "Effective testing is crucial for maintaining reliable React applications. Jest and React Testing Library provide a powerful combination for testing React components with a focus on user behavior rather than implementation details.\n\nIn this comprehensive guide, we'll cover unit tests, integration tests, and end-to-end tests for React applications. You'll learn how to write tests that provide confidence in your code without becoming brittle when refactoring. We'll also explore test-driven development approaches and continuous integration strategies.",
    category: "Testing",
    tags: ["React", "Jest", "Testing"],
    date: "2023-10-07",
    author: "Marcus Wilson",
    imageUrl: "/placeholder.svg",
  },
];

const categories = ["All", "React", "CSS", "TypeScript", "Testing"];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would be an API call
    setPosts(sampleBlogPosts);
    setFilteredPosts(sampleBlogPosts);
  }, []);

  useEffect(() => {
    let filtered = posts;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm, posts]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-portfolio-accent/10 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Blog</h1>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Insights and tutorials on web development, design, and technology
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  🔍
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-portfolio-accent hover:bg-portfolio-blue" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gray-200 relative">
                      {/* Post image */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        {post.imageUrl ? (
                          <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover" 
                          />
                        ) : (
                          "Blog Image"
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
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-2xl font-semibold mb-4">No posts found</h3>
                  <p className="text-gray-600">
                    No blog posts match your current filters. Try adjusting your search or category selection.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
