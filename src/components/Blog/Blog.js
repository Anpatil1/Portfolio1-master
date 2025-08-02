import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  TrendingUp,
  Zap,
  Code,
  Cpu
} from "lucide-react";

// Blog data - Latest technology topics
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI: How Machine Learning is Revolutionizing Web Development",
    excerpt: "Explore how artificial intelligence and machine learning are transforming the way we build, optimize, and maintain web applications in 2025.",
    content: `
      Artificial Intelligence has evolved from a futuristic concept to an integral part of modern web development. In 2025, we're witnessing unprecedented integration of AI technologies that are reshaping how developers create, optimize, and maintain web applications.

      ## AI-Powered Development Tools

      Modern IDEs now incorporate AI assistants that can write entire functions, suggest optimizations, and even predict bugs before they occur. Tools like GitHub Copilot and ChatGPT have become essential companions for developers, increasing productivity by up to 40%.

      ## Automated Code Review and Testing

      AI systems can now perform comprehensive code reviews, identifying potential security vulnerabilities, performance bottlenecks, and maintainability issues. Automated testing frameworks powered by machine learning can generate test cases and identify edge cases that human testers might miss.

      ## Personalized User Experiences

      Machine learning algorithms enable websites to deliver hyper-personalized experiences by analyzing user behavior patterns, preferences, and interactions in real-time. This includes dynamic content generation, personalized recommendations, and adaptive user interfaces.

      ## Performance Optimization

      AI-driven performance optimization tools can automatically adjust resource allocation, optimize database queries, and predict traffic patterns to ensure optimal website performance under varying load conditions.

      ## The Road Ahead

      As we move forward, we can expect even deeper integration of AI in web development, including automated debugging, intelligent code refactoring, and AI-generated user interfaces that adapt to individual user needs.
    `,
    author: "Avadhut Nangare Patil",
    date: "2025-08-01",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Web Development", "Future Tech"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 2,
    title: "React 19 and Beyond: Revolutionary Features Changing Frontend Development",
    excerpt: "Discover the groundbreaking features in React 19 including Server Components, concurrent rendering improvements, and the new React Compiler.",
    content: `
      React 19 has arrived with game-changing features that are revolutionizing how we approach frontend development. These updates focus on performance, developer experience, and modern web standards.

      ## Server Components Revolution

      React Server Components allow developers to render components on the server, reducing bundle sizes and improving initial page loads. This hybrid approach combines the benefits of server-side rendering with the interactivity of client-side React.

      ## Automatic Batching and Concurrent Features

      The new automatic batching system groups multiple state updates into a single re-render, significantly improving performance. Concurrent rendering allows React to pause, resume, and prioritize work based on user interactions.

      ## React Compiler: Zero-Runtime Optimizations

      The experimental React Compiler automatically optimizes your React code at build time, eliminating the need for manual memoization in many cases. This results in better performance without sacrificing code readability.

      ## Enhanced Developer Experience

      React 19 introduces improved error boundaries, better TypeScript support, and enhanced debugging tools. The new React DevTools provide deeper insights into component performance and re-render patterns.

      ## Suspense for Data Fetching

      Enhanced Suspense capabilities now provide seamless loading states for data fetching, making it easier to create smooth user experiences while managing asynchronous operations.

      ## Migration Strategy

      For existing applications, React 19 provides a gradual migration path with backward compatibility features and comprehensive migration guides to help teams upgrade smoothly.
    `,
    author: "Avadhut Nangare Patil",
    date: "2025-07-28",
    readTime: "6 min read",
    category: "Frontend Development",
    tags: ["React", "Frontend", "JavaScript", "Performance"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Edge Computing & WebAssembly: The Next Frontier of Web Performance",
    excerpt: "Learn how edge computing combined with WebAssembly is creating ultra-fast, globally distributed web applications with near-native performance.",
    content: `
      The convergence of edge computing and WebAssembly (WASM) is creating a new paradigm for web application performance and distribution. This powerful combination is enabling developers to build applications that run with near-native speed across global edge networks.

      ## Understanding Edge Computing

      Edge computing brings computation and data storage closer to users by utilizing distributed networks of servers. This reduces latency, improves performance, and enables real-time applications that were previously impossible with traditional cloud architectures.

      ## WebAssembly: Beyond JavaScript

      WebAssembly allows developers to run high-performance code written in languages like Rust, C++, and Go directly in web browsers. This opens up new possibilities for computationally intensive applications, including image processing, scientific computing, and real-time graphics.

      ## The Perfect Marriage

      When combined, edge computing and WebAssembly create applications that can:
      - Process data locally at edge nodes for minimal latency
      - Execute computationally intensive tasks at native speeds
      - Provide consistent performance regardless of geographic location
      - Enable offline-first applications with intelligent synchronization

      ## Real-World Applications

      Industries are already leveraging this technology stack for:
      - Real-time image and video processing
      - IoT device management and analytics
      - Gaming and interactive media
      - Financial trading platforms
      - Scientific computing applications

      ## Implementation Strategies

      Successful edge-WASM applications require careful consideration of:
      - Code splitting and lazy loading strategies
      - Data synchronization between edge nodes
      - Fallback mechanisms for unsupported environments
      - Security implications of distributed computing

      ## Future Implications

      As 5G networks expand and edge infrastructure matures, we can expect this technology stack to become mainstream, enabling new categories of web applications that blur the line between web and native performance.
    `,
    author: "Avadhut Nangare Patil",
    date: "2025-07-25",
    readTime: "10 min read",
    category: "Performance & Architecture",
    tags: ["Edge Computing", "WebAssembly", "Performance", "Modern Web"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false
  }
];

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Artificial Intelligence", "Frontend Development", "Performance & Architecture"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Artificial Intelligence":
        return <Cpu size={16} />;
      case "Frontend Development":
        return <Code size={16} />;
      case "Performance & Architecture":
        return <Zap size={16} />;
      default:
        return <Tag size={16} />;
    }
  };

  return (
    <Container fluid className="blog-section">
      <Particle />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          <Row>
            <Col md={12}>
              <motion.h1
                variants={itemVariants}
                className="project-heading text-center"
                style={{ marginBottom: "3rem" }}
              >
                Tech <strong className="purple">Blog</strong>
                <p style={{ fontSize: "1.2rem", marginTop: "1rem", opacity: 0.8 }}>
                  Insights on Latest Technologies & Development Trends
                </p>
              </motion.h1>
            </Col>
          </Row>

          {/* Search and Filter Section */}
          <Row className="mb-5">
            <Col md={8} className="mx-auto">
              <motion.div variants={itemVariants} className="blog-search-container">
                <div className="search-wrapper">
                  <Search className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="blog-search-input"
                  />
                </div>
                <div className="category-filters">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "primary" : "outline-primary"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="category-btn"
                    >
                      {getCategoryIcon(category)}
                      <span className="ms-2">{category}</span>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Featured Posts */}
          <Row>
            <Col md={12}>
              <motion.h2 variants={itemVariants} className="section-heading mb-4">
                <TrendingUp size={24} className="me-2" />
                Featured Articles
              </motion.h2>
            </Col>
          </Row>

          <Row className="mb-5">
            {filteredPosts.filter(post => post.featured).map((post) => (
              <Col md={6} key={post.id} className="mb-4">
                <motion.div variants={itemVariants}>
                  <Card className="blog-card featured-card h-100">
                    <div className="blog-image-container">
                      <Card.Img 
                        variant="top" 
                        src={post.image} 
                        className="blog-image"
                        alt={post.title}
                      />
                      <div className="featured-badge">
                        <TrendingUp size={16} />
                        Featured
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div className="blog-meta mb-2">
                        <Badge bg="primary" className="category-badge">
                          {getCategoryIcon(post.category)}
                          <span className="ms-1">{post.category}</span>
                        </Badge>
                      </div>
                      <Card.Title className="blog-title">{post.title}</Card.Title>
                      <Card.Text className="blog-excerpt">{post.excerpt}</Card.Text>
                      <div className="blog-footer mt-auto">
                        <div className="blog-info">
                          <div className="author-info">
                            <User size={16} />
                            <span>{post.author}</span>
                          </div>
                          <div className="post-meta">
                            <Calendar size={16} />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <Clock size={16} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link to={`/blog/${post.id}`} className="read-more-btn">
                          Read More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* All Posts */}
          <Row>
            <Col md={12}>
              <motion.h2 variants={itemVariants} className="section-heading mb-4">
                All Articles
              </motion.h2>
            </Col>
          </Row>

          <Row>
            {filteredPosts.map((post) => (
              <Col lg={4} md={6} key={post.id} className="mb-4">
                <motion.div variants={itemVariants}>
                  <Card className="blog-card h-100">
                    <div className="blog-image-container">
                      <Card.Img 
                        variant="top" 
                        src={post.image} 
                        className="blog-image"
                        alt={post.title}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div className="blog-meta mb-2">
                        <Badge bg="secondary" className="category-badge">
                          {getCategoryIcon(post.category)}
                          <span className="ms-1">{post.category}</span>
                        </Badge>
                      </div>
                      <Card.Title className="blog-title-small">{post.title}</Card.Title>
                      <Card.Text className="blog-excerpt-small">{post.excerpt.substring(0, 120)}...</Card.Text>
                      <div className="blog-footer mt-auto">
                        <div className="blog-info-compact">
                          <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                          <span className="read-time">{post.readTime}</span>
                        </div>
                        <Link to={`/blog/${post.id}`} className="read-more-btn-small">
                          Read More <ArrowRight size={14} />
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {filteredPosts.length === 0 && (
            <Row>
              <Col md={12}>
                <motion.div variants={itemVariants} className="no-results">
                  <h3>No articles found</h3>
                  <p>Try adjusting your search terms or browse different categories.</p>
                </motion.div>
              </Col>
            </Row>
          )}
        </Container>
      </motion.div>
    </Container>
  );
}

export default Blog;
export { blogPosts };
