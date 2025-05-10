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
    content: (
  <>
    <section className="mb-8">
      <h1 className="text-4xl font-bold mb-4">How AI is Transforming Research in 2025</h1>
      <p className="text-lg mb-6">Artificial Intelligence is no longer just a tool — it’s becoming a research partner. In 2025, AI has deeply integrated into the workflows of academic institutions, independent researchers, and industry labs. This post explores how AI is redefining research from discovery to documentation.</p>
      <ol className="list-decimal ml-6 space-y-4">
        <li>
          <span className="font-semibold">🔍 1. Accelerating Literature Reviews</span>
          <p>Tools like <strong>Resego AI</strong> summarize dozens of papers in minutes, extract key arguments, and highlight gaps. Researchers now spend less time reading and more time analyzing.</p>
        </li>
        <li>
          <span className="font-semibold">🧠 2. Smarter Discovery Engines</span>
          <p>AI-powered engines understand natural language queries, recommend relevant work, and identify unseen connections between concepts across disciplines.</p>
        </li>
        <li>
          <span className="font-semibold">🛠️ 3. Personalized Research Assistants</span>
          <p>With user-specific models, AI now understands a researcher’s area of interest, filters noise, and suggests only the most relevant papers or studies.</p>
        </li>
        <li>
          <span className="font-semibold">📊 4. Automated Report Generation</span>
          <p>From summaries to formatted citations and collaborative editing, AI reduces repetitive tasks and increases writing quality and consistency.</p>
        </li>
        <li>
          <span className="font-semibold">🤝 5. Enhanced Collaboration</span>
          <p>AI-powered tools allow shared annotations, idea clustering, and cross-institution brainstorming in real-time, removing silos from collaborative research.</p>
        </li>
      </ol>
      <div className="mt-8">
        <p className="mb-2">Want to learn more about how AI can help your research? Check our <Link to="/features" className="text-[#8B5CF6] underline">Features</Link> or visit our <Link to="/faq" className="text-[#8B5CF6] underline">FAQ</Link> page.</p>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">How does Resego AI help with literature reviews?</h3>
          <p>Resego AI automatically summarizes papers, extracts key points, and highlights research gaps, saving researchers hours of manual reading.</p>
        </div>
        <div>
          <h3 className="font-semibold">Is AI reliable for generating research reports?</h3>
          <p>Yes, modern AI tools generate accurate, well-formatted reports with citations, and support collaborative editing to ensure quality and consistency.</p>
        </div>
        <div>
          <h3 className="font-semibold">Can AI personalize recommendations for my field?</h3>
          <p>Absolutely! AI models can be tailored to your interests, filtering out noise and surfacing the most relevant studies and papers for you.</p>
        </div>
      </div>
    </section>
  </>
),
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
    slug: "WhyStudentNeedsAIResearchAssistant",
    date: "2025-05-10",
    author: {
      name: "Resego AI Team",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Team"
    },
    tags: ["Students", "AI"],
    excerpt: "Discover how Resego AI empowers students to master literature reviews, extract insights, organize research, and generate reports with ease.",
    content: <p>Discover how Resego AI empowers students to master literature reviews, extract insights, organize research, and generate reports with ease.</p>,
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
  {/* BlogPosting JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'How AI is Transforming Research in 2025',
      image: 'https://resegohq.com/cover-ai-research-2025.png',
      author: {
        '@type': 'Person',
        name: 'Alex T.'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Resego AI',
        logo: {
          '@type': 'ImageObject',
          url: 'https://resegohq.com/logo.png'
        }
      },
      datePublished: '2025-05-01',
      dateModified: '2025-05-01',
      url: 'https://resegohq.com/blog/ai-transforming-research-2025',
      description: 'Artificial Intelligence is no longer just a tool — it’s becoming a research partner. In 2025, AI has deeply integrated into research workflows. This post explores how AI is redefining research from discovery to documentation.'
    })}
  </script>
  {/* FAQPage JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does Resego AI help with literature reviews?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Resego AI automatically summarizes papers, extracts key points, and highlights research gaps, saving researchers hours of manual reading.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is AI reliable for generating research reports?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, modern AI tools generate accurate, well-formatted reports with citations, and support collaborative editing to ensure quality and consistency.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can AI personalize recommendations for my field?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely! AI models can be tailored to your interests, filtering out noise and surfacing the most relevant studies and papers for you.'
          }
        }
      ]
    })}
  </script>
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

        
        {/* Categories/Tags */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, idx) => (
              <span key={idx} className="bg-gray-200 rounded-full px-4 py-2 text-gray-700">{category}</span>
            ))}
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <div key={post.slug} className="bg-white rounded-lg shadow p-6 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                  <div className="flex items-center mb-2">
                    <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-gray-700 font-medium">{post.author.name}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags && post.tags.map(tag => (
                      <span key={tag} className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <Link to={`/blog/${post.slug}`} className="inline-block mt-2 px-6 py-2 rounded bg-[#8B5CF6] text-white font-bold hover:bg-[#7c3aed] transition-all">Read more</Link>
                </div>
              </div>
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
