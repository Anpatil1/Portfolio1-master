import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import Particle from "../Particle";
import { blogPosts } from "./Blog";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Tag,
  Eye,
  ThumbsUp
} from "lucide-react";

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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

  // Function to render markdown-like content
  const renderContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;
      
      if (paragraph.startsWith('## ')) {
        return (
          <h3 key={index} className="blog-subtitle">
            {paragraph.replace('## ', '')}
          </h3>
        );
      }
      
      return (
        <p key={index} className="blog-paragraph">
          {paragraph.trim()}
        </p>
      );
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <Container fluid className="blog-post-section">
      <Particle />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          {/* Back Button */}
          <Row>
            <Col md={12}>
              <motion.div variants={itemVariants} className="back-button-container">
                <Link to="/blog" className="back-button">
                  <ArrowLeft size={20} />
                  <span>Back to Blog</span>
                </Link>
              </motion.div>
            </Col>
          </Row>

          {/* Hero Section */}
          <Row>
            <Col lg={8} className="mx-auto">
              <motion.div variants={itemVariants} className="blog-post-hero">
                <div className="blog-post-meta">
                  <Badge bg="primary" className="category-badge-large">
                    {post.category}
                  </Badge>
                  <div className="post-stats">
                    <span className="stat-item">
                      <Eye size={16} />
                      1.2k views
                    </span>
                    <span className="stat-item">
                      <ThumbsUp size={16} />
                      45 likes
                    </span>
                  </div>
                </div>
                
                <h1 className="blog-post-title">{post.title}</h1>
                
                <div className="blog-post-author-section">
                  <div className="author-details">
                    <div className="author-avatar">
                      <User size={24} />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{post.author}</h4>
                      <div className="post-meta-info">
                        <span className="meta-item">
                          <Calendar size={16} />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="meta-item">
                          <Clock size={16} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="action-buttons">
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={handleShare}
                      className="action-btn"
                    >
                      <Share2 size={16} />
                      Share
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      className="action-btn"
                    >
                      <Bookmark size={16} />
                      Save
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Featured Image */}
          <Row>
            <Col lg={10} className="mx-auto">
              <motion.div variants={itemVariants} className="blog-post-image-container">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="blog-post-featured-image"
                />
              </motion.div>
            </Col>
          </Row>

          {/* Content */}
          <Row>
            <Col lg={8} className="mx-auto">
              <motion.div variants={itemVariants} className="blog-post-content">
                <div className="blog-excerpt-large">
                  {post.excerpt}
                </div>
                
                <div className="blog-content">
                  {renderContent(post.content)}
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Tags Section */}
          <Row>
            <Col lg={8} className="mx-auto">
              <motion.div variants={itemVariants} className="blog-tags-section">
                <h4 className="tags-title">
                  <Tag size={20} />
                  Tags
                </h4>
                <div className="tags-container">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} bg="secondary" className="tag-badge">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Related Posts */}
          <Row>
            <Col lg={10} className="mx-auto">
              <motion.div variants={itemVariants} className="related-posts-section">
                <h3 className="related-title">Related Articles</h3>
                <Row>
                  {blogPosts
                    .filter(p => p.id !== post.id)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <Col md={6} key={relatedPost.id}>
                        <Link to={`/blog/${relatedPost.id}`} className="related-post-card">
                          <div className="related-post-image">
                            <img src={relatedPost.image} alt={relatedPost.title} />
                          </div>
                          <div className="related-post-content">
                            <Badge bg="primary" className="related-category">
                              {relatedPost.category}
                            </Badge>
                            <h4 className="related-title">{relatedPost.title}</h4>
                            <p className="related-excerpt">
                              {relatedPost.excerpt.substring(0, 100)}...
                            </p>
                            <div className="related-meta">
                              {new Date(relatedPost.date).toLocaleDateString()} • {relatedPost.readTime}
                            </div>
                          </div>
                        </Link>
                      </Col>
                    ))}
                </Row>
              </motion.div>
            </Col>
          </Row>

          {/* Call to Action */}
          <Row>
            <Col lg={8} className="mx-auto">
              <motion.div variants={itemVariants} className="blog-cta-section">
                <div className="cta-card">
                  <h3>Enjoyed this article?</h3>
                  <p>Check out more of my latest insights on web development and technology trends.</p>
                  <div className="cta-buttons">
                    <Link to="/blog" className="cta-btn primary">
                      Read More Articles
                    </Link>
                    <Link to="/contact" className="cta-btn secondary">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </Container>
  );
}

export default BlogPost;
