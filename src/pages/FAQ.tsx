import React from "react";
import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "What is Resego AI?",
    answer: "Resego AI is an intelligent research assistant that summarizes articles, extracts key insights, and organizes research materials."
  },
  {
    question: "Who can use Resego AI?",
    answer: "Students, researchers, and professionals who want to streamline their research workflow."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we prioritize user privacy and data security using best-in-class practices."
  }
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQs | Resego AI</title>
        <meta name="description" content="Frequently asked questions about Resego AI, the intelligent research assistant." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        })}</script>
      </Helmet>
      <div>
        <div className="relative w-full min-h-[350px] flex flex-col items-center justify-center py-20 bg-gradient-to-br from-[#ede9fe] via-[#f3e8ff] to-white mb-8 rounded-b-3xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#8B5CF6]/10">
                <svg className="h-8 w-8 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"/></svg>
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[#7c3aed] mb-2">FAQs</h1>
            <p className="text-lg text-gray-700 mb-6">Frequently asked questions about Resego AI and how to get help.</p>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-3xl mb-10 mb-12">
          <div className="space-y-6">
            {/* FAQ cards */}
            <div className="rounded-2xl bg-white/90 shadow-xl p-6 border-t-4 border-[#8B5CF6]">
              <h3 className="font-semibold text-lg mb-2 text-[#7c3aed]">What is Resego AI?</h3>
              <p className="text-gray-700">Resego AI is an intelligent research assistant that helps you discover, summarize, and organize academic papers with AI-driven tools.</p>
            </div>
            <div className="rounded-2xl bg-white/90 shadow-xl p-6 border-t-4 border-[#8B5CF6]">
              <h3 className="font-semibold text-lg mb-2 text-[#7c3aed]">How do I get started?</h3>
              <p className="text-gray-700">Simply sign up for a free account, explore research, and add papers to your inventory. Our features are designed to be intuitive and easy to use.</p>
            </div>
            <div className="rounded-2xl bg-white/90 shadow-xl p-6 border-t-4 border-[#8B5CF6]">
              <h3 className="font-semibold text-lg mb-2 text-[#7c3aed]">Can I save and organize papers?</h3>
              <p className="text-gray-700">Yes! You can save papers, tag them, and organize your research in collections for quick access.</p>
            </div>
            <div className="rounded-2xl bg-white/90 shadow-xl p-6 border-t-4 border-[#8B5CF6]">
              <h3 className="font-semibold text-lg mb-2 text-[#7c3aed]">Can Resego AI generate research reports?</h3>
              <p className="text-gray-700">Yes, our automated report generation feature allows you to instantly create well-structured research reports from your organized data and insights.</p>
            </div>
            <div className="rounded-2xl bg-white/90 shadow-xl p-6 border-t-4 border-[#8B5CF6]">
              <h3 className="font-semibold text-lg mb-2 text-[#7c3aed]">Does Resego AI integrate with other tools?</h3>
              <p className="text-gray-700">Resego AI is designed to integrate with popular reference managers and research platforms. More integrations are coming soon!</p>
            </div>
            <div className="rounded-2xl bg-white/90 shadow-xl p-6 border-t-4 border-[#8B5CF6]">
              <h3 className="font-semibold text-lg mb-2 text-[#7c3aed]">Is there a free plan?</h3>
              <p className="text-gray-700">Yes, we offer a free plan with core features. You can upgrade to access premium tools and unlimited usage.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
