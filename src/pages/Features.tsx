import React from "react";
import { Helmet } from "react-helmet";
import { Brain, Sparkles, Database } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-violet-600" />,
    title: "Smart Summarization",
    description: "Quickly distill lengthy articles into concise, actionable summaries."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-violet-600" />,
    title: "Insight Extraction",
    description: "Identify and highlight critical points, data, and trends."
  },
  {
    icon: <Database className="w-8 h-8 text-violet-600" />,
    title: "Organized Storage",
    description: "Save and categorize research materials for easy access and retrieval."
  }
];

const Features = () => (
  <div>
    <Helmet>
      <title>Features | Resego AI</title>
      <meta name="description" content="Explore the powerful features of Resego AI: smart summarization, insight extraction, and organized research storage." />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Features',
        'description': 'Explore the powerful features of Resego AI: smart summarization, insight extraction, and organized research storage.'
      })}</script>
    </Helmet>
    <div className="relative w-full min-h-[350px] flex flex-col items-center justify-center py-20 bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-white mb-8 rounded-b-3xl">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#8B5CF6]/10">
            <svg className="h-8 w-8 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M4 12h.01M20 12h.01M12 4h.01M4.93 19.07h.01M19.07 4.93h.01"/></svg>
          </span>
        </div>
        <h1 className="text-4xl font-bold text-[#7c3aed] mb-2">Features</h1>
        <p className="text-lg text-gray-700 mb-6">Discover the powerful tools Resego AI offers for smarter research and productivity.</p>
      </div>
    </div>
    <div className="container mx-auto px-4 max-w-4xl mb-10 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature cards */}
        <div className="rounded-2xl bg-white/90 shadow-xl p-8 border-t-4 border-[#8B5CF6] flex flex-col items-center">
          <span className="mb-4 text-[#8B5CF6]">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
          </span>
          <h3 className="font-semibold text-xl mb-2">Smart Summarization</h3>
          <p className="text-gray-600 text-center">AI-powered summaries that give you the essence of any research paper in seconds.</p>
        </div>
        <div className="rounded-2xl bg-white/90 shadow-xl p-8 border-t-4 border-[#8B5CF6] flex flex-col items-center">
          <span className="mb-4 text-[#8B5CF6]">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"/></svg>
          </span>
          <h3 className="font-semibold text-xl mb-2">Insight Extraction</h3>
          <p className="text-gray-600 text-center">Quickly extract key findings, methods, and citations from complex documents.</p>
        </div>
        <div className="rounded-2xl bg-white/90 shadow-xl p-8 border-t-4 border-[#8B5CF6] flex flex-col items-center">
          <span className="mb-4 text-[#8B5CF6]">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
          </span>
          <h3 className="font-semibold text-xl mb-2">Organized Storage</h3>
          <p className="text-gray-600 text-center">Save, tag, and categorize papers in your personal research inventory.</p>
        </div>
        <div className="rounded-2xl bg-white/90 shadow-xl p-8 border-t-4 border-[#8B5CF6] flex flex-col items-center">
          <span className="mb-4 text-[#8B5CF6]">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2m-6 4h6" /></svg>
          </span>
          <h3 className="font-semibold text-xl mb-2">Automated Report Generation</h3>
          <p className="text-gray-600 text-center">Generate comprehensive, well-formatted research reports instantly from your organized data and insights.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
