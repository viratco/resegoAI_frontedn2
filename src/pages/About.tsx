import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => (
  <div>
    <Helmet>
      <title>About | Resego AI</title>
      <meta name="description" content="Learn about the mission, vision, and story behind Resego AI, your intelligent research assistant." />
      <meta name="google-site-verification" content="wC1CD66tpBTIXJ5t5IjIXycNO9xcopzmkklRePgQq4k" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'About Resego AI',
        'description': 'Learn about the mission, vision, and story behind Resego AI, your intelligent research assistant.'
      })}</script>
    </Helmet>
    {/* Hero Section */}
    <section className="w-full py-20 bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-white rounded-b-3xl mb-12 flex flex-col items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#7c3aed] mb-4">Empowering Research with AI</h1>
        <p className="text-lg text-gray-700 mb-8">Resego AI helps you discover, summarize, and organize academic knowledge faster than ever before.</p>
        <a href="/signup" className="inline-block px-8 py-3 rounded-full bg-[#8B5CF6] text-white font-bold shadow-lg hover:bg-[#7c3aed] transition-all">Join the Community</a>
      </div>
    </section>
    {/* Mission Section */}
    <section className="w-full bg-white py-12 mb-8">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="flex-shrink-0">
          <span className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#ede9fe]">
            <svg className="h-10 w-10 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M4 12h.01M20 12h.01M12 4h.01M4.93 19.07h.01M19.07 4.93h.01"/></svg>
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#7c3aed]">Our Mission</h2>
          <p className="text-gray-700">To empower researchers, students, and professionals to access, organize, and understand information faster and more effectively using advanced AI technologies.</p>
        </div>
      </div>
    </section>
    {/* Vision Section */}
    <section className="w-full bg-[#f3e8ff] py-12 mb-8">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 px-4">
        <div className="flex-shrink-0">
          <span className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#ede9fe]">
            <svg className="h-10 w-10 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#7c3aed]">Our Vision</h2>
          <p className="text-gray-700">To be the leading AI-powered research platform, making knowledge accessible and actionable for everyone.</p>
        </div>
      </div>
    </section>
    {/* Values Section */}
    <section className="w-full bg-white py-12 mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-[#7c3aed]">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-3xl">💡</span>
            <h3 className="font-semibold text-lg mb-1">Innovation</h3>
            <p className="text-gray-600 text-center">We continuously push the boundaries of AI to empower our users.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-3xl">🤝</span>
            <h3 className="font-semibold text-lg mb-1">Collaboration</h3>
            <p className="text-gray-600 text-center">We believe great research happens when people and technology work together.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-3xl">🔒</span>
            <h3 className="font-semibold text-lg mb-1">Integrity</h3>
            <p className="text-gray-600 text-center">User privacy and data security are at the heart of everything we do.</p>
          </div>
        </div>
      </div>
    </section>
    {/* How It Works Section */}
    <section className="w-full bg-[#ede9fe] py-12 mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-[#7c3aed]">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-3xl">🔍</span>
            <h3 className="font-semibold text-lg mb-1">1. Discover</h3>
            <p className="text-gray-600 text-center">Search and find relevant academic papers and resources.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-3xl">📝</span>
            <h3 className="font-semibold text-lg mb-1">2. Summarize & Organize</h3>
            <p className="text-gray-600 text-center">Let Resego AI summarize, extract insights, and organize your research.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-3xl">📊</span>
            <h3 className="font-semibold text-lg mb-1">3. Generate Reports</h3>
            <p className="text-gray-600 text-center">Export or share automated, well-formatted research reports.</p>
          </div>
        </div>
      </div>
    </section>
    {/* Trusted By Section */}
    <section className="w-full bg-white py-12 mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-[#7c3aed]">Trusted By</h2>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Googleplex-Patio-Aug-2014.JPG" alt="University" className="h-12 grayscale opacity-70" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/MIT_logo.svg" alt="MIT" className="h-12 grayscale opacity-70" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Stanford_University_seal_2003.svg" alt="Stanford" className="h-12 grayscale opacity-70" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_TU_Muenchen.svg" alt="TUM" className="h-12 grayscale opacity-70" />
          <span className="text-gray-400 text-lg">and more...</span>
        </div>
      </div>
    </section>
    {/* Team/Story Section */}
    <section className="w-full bg-white py-12 mb-8">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-[#7c3aed]">Our Story</h2>
        <p className="text-gray-700 mb-6">Founded by passionate technologists and researchers, Resego AI was born out of a need to simplify the overwhelming process of research. Our team is committed to continuous innovation to help users stay ahead in their fields.</p>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex flex-col items-center">
           
            <span className="font-semibold text-[#7c3aed]">Virat V.</span>
            <span className="text-xs text-gray-500">Founder, CEO</span>
            <span className="text-xs italic text-gray-400 mt-1">"AI should empower, not overwhelm."</span>
          </div>
          
        </div>
      </div>
    </section>
    {/* Contact/Connect Section */}
    <section className="w-full bg-[#f3e8ff]/60 py-12 mb-8">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#7c3aed]">Connect With Us</h2>
        <p className="text-gray-700 mb-4">We love to hear from researchers, students, and the curious! Reach out or follow us:</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:hello@resegohq.com" className="text-[#8B5CF6] hover:underline font-semibold">Email</a>
          <a href="https://www.instagram.com/resegoai_/" className="text-[#8B5CF6] hover:underline font-semibold">Instagram</a>
          <a href="https://www.linkedin.com/in/resego-ai-046154354/" className="text-[#8B5CF6] hover:underline font-semibold">LinkedIn</a>
        </div>
        <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Resego AI. All rights reserved.</span>
      </div>
    </section>
    {/* CTA Section */}
    <section className="w-full py-12 bg-gradient-to-r from-[#a78bfa]/70 via-[#ede9fe]/80 to-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#7c3aed] mb-4">Ready to Revolutionize Your Research?</h2>
      <Link to="/signup" className="inline-block px-8 py-3 rounded-full bg-[#8B5CF6] text-white font-bold shadow-lg hover:bg-[#7c3aed] transition-all">Get Started with Resego AI</Link>
    </section>
  </div>
);

export default About;
