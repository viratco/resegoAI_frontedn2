import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Top 5 AI Tools for Academic Research in 2025",
    date: "2025-05-01",
    content: (
      <>
        <p>The world of academic research is evolving rapidly with AI-powered tools. Here are the top 5 tools to watch in 2025:</p>
        <ol className="list-decimal ml-6">
          <li><strong>Resego AI</strong> – Summarizes, extracts, and organizes research materials.</li>
          <li>ScholarBot – Advanced literature search and citation management.</li>
          <li>InsightMiner – Data-driven hypothesis generation.</li>
          <li>PaperPal – AI-powered peer review assistant.</li>
          <li>TrendLens – Real-time trend analysis for researchers.</li>
        </ol>
      </>
    )
  },
  {
    title: "How Resego AI Enhances Research Efficiency",
    date: "2025-04-20",
    content: (
      <>
        <p>Resego AI empowers users to:</p>
        <ul className="list-disc ml-6">
          <li>Simplify literature reviews with smart summarization.</li>
          <li>Extract key insights and data points from lengthy articles.</li>
          <li>Organize research materials for quick retrieval and collaboration.</li>
        </ul>
      </>
    ),
    categories: ["Productivity", "Organization"],
    author: "Jane Doe",
  },
];

const posts = [
  {
    title: "How AI is Transforming Research in 2025",
    slug: "ai-transforming-research-2025",
    date: "2025-05-01",
    author: {
      name: "Alex T.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Co-Founder"
    },
    tags: ["AI", "Research", "Trends"],
    excerpt: "Explore the latest ways AI is revolutionizing academic and professional research workflows.",
    content: <p>Explore the latest ways AI is revolutionizing academic and professional research workflows in 2025.</p>,
    featured: true
  },
  {
    title: "The Ultimate Guide to Organizing Research Papers",
    slug: "guide-organizing-papers",
    date: "2025-04-18",
    author: {
      name: "Priya S.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "Co-Founder"
    },
    tags: ["Productivity", "Organization"],
    excerpt: "Learn best practices and tools for keeping your research organized and accessible.",
    content: <p>Learn best practices and tools for keeping your research organized and accessible.</p>,
    featured: false
  },
  {
    title: "Why Every Student Needs an AI Research Assistant",
    slug: "student-ai-research-assistant",
    date: "2025-03-30",
    author: {
      name: "Alex T.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Co-Founder"
    },
    tags: ["Students", "AI"],
    excerpt: "Discover how AI tools can help students save time and improve research outcomes.",
    content: <p>Discover how AI tools can help students save time and improve research outcomes.</p>,
    featured: false
  },
  {
    title: "Case Study: Resego AI at Stanford Lab",
    slug: "case-study-stanford-lab",
    date: "2025-03-15",
    author: {
      name: "Elena R.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      role: "Product Designer"
    },
    tags: ["Case Study", "AI", "Research"],
    excerpt: "How a leading Stanford lab used Resego AI to accelerate literature reviews by 50%.",
    content: <p>Discover how a leading Stanford lab used Resego AI to accelerate literature reviews by 50% and improve collaboration across teams.</p>,
    featured: false
  },
  {
    title: "Product Update: New Report Generation Feature",
    slug: "product-update-report-generation",
    date: "2025-02-28",
    author: {
      name: "Samir K.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      role: "Lead Research Scientist"
    },
    tags: ["Product Update", "Reports"],
    excerpt: "Announcing automated report generation—create research summaries in seconds!",
    content: <p>We’re excited to launch automated report generation. Create research summaries in seconds and share them with your team.</p>,
    featured: false
  }
];

const categories = ["AI", "Research", "Productivity", "Organization", "Students", "Trends"];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Resego AI</title>
        <meta name="description" content="Read articles and insights on AI-powered research and productivity from the Resego AI team." />
      </Helmet>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-white mb-12 rounded-b-3xl">
          <div className="max-w-2xl mx-auto text-center p-12">
            <h1 className="text-4xl font-bold text-[#7c3aed] mb-2">Blog</h1>
            <p className="text-lg text-gray-700 mb-6">Insights, tips, and news from the Resego AI team and research community.</p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Post</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold mb-2">{posts[0].title}</h3>
            <p className="text-sm text-gray-500 mb-4">{posts[0].date}</p>
            <div className="prose">{posts[0].content}</div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <div className="prose">{post.content}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Subscribe */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg text-gray-700 mb-4">Subscribe to our newsletter for the latest updates, AI research trends, and productivity tips.</p>
            <form>
              <input type="email" placeholder="Enter your email address" className="w-full p-4 mb-4 border border-gray-300 rounded-lg" />
              <button type="submit" className="inline-block px-8 py-3 rounded-full bg-[#8B5CF6] text-white font-bold shadow-lg hover:bg-[#7c3aed] transition-all">Subscribe</button>
            </form>
          </div>
        </section>

        {/* Categories/Tags */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, idx) => (
              <span key={idx} className="bg-gray-200 rounded-full px-4 py-2 text-gray-700">{category}</span>
            ))}
          </div>
        </section>

        {/* Author Info */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About the Author</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
            <p className="text-lg text-gray-700 mb-4">John Doe is a researcher and writer at Resego AI. He has a passion for AI-powered research and productivity.</p>
          </div>
        </section>

        {/* Popular Posts Sidebar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Posts</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <ul>
              {posts.slice(0, 3).map((post, idx) => (
                <li key={idx} className="mb-4">
                  <a href="#" className="text-lg text-gray-700 hover:text-[#8B5CF6]">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recent Posts Sidebar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Recent Posts</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <ul>
              {posts.map((post, idx) => (
                <li key={idx} className="mb-4">
                  <a href="#" className="text-lg text-gray-700 hover:text-[#8B5CF6]">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Testimonial Block */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What Users Say</h2>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">⭐⭐⭐⭐⭐</span>
            <p className="italic text-gray-700 mb-2">“Resego AI has transformed the way I do research. The automated summaries and report generation save me hours every week!”</p>
            <span className="font-semibold text-[#7c3aed]">— Dr. Maya Patel, Researcher</span>
          </div>
        </section>

        {/* Write for Us CTA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Write for Us</h2>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <p className="text-gray-700 mb-4">Have insights on AI, research, or productivity? We welcome guest posts from the community!</p>
            <a href="mailto:hello@resegohq.com" className="inline-block px-8 py-3 rounded-full bg-[#8B5CF6] text-white font-bold shadow-lg hover:bg-[#7c3aed] transition-all">Become a Contributor</a>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Started with Resego AI</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg text-gray-700 mb-4">Sign up for a free trial and experience the power of AI-powered research and productivity.</p>
            <Link to="/signup" className="inline-block px-8 py-3 rounded-full bg-[#8B5CF6] text-white font-bold shadow-lg hover:bg-[#7c3aed] transition-all">Get Started with Resego AI</Link>
          </div>
        </section>

        {/* Social Share */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Share This Post</h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.instagram.com/resegoai_/" className="bg-gray-200 rounded-full px-4 py-2 text-gray-700">Instagram</a>
            <a href="https://www.linkedin.com/in/resego-ai-046154354/" className="bg-gray-200 rounded-full px-4 py-2 text-gray-700">LinkedIn</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
