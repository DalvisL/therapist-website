import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-serene-50 font-body">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-serene-900 to-serene-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-heading tracking-tight mb-6">
            Healing Begins Here
          </h1>
          <p className="text-xl text-serene-200 max-w-2xl mx-auto">
            Compassionate therapy in a safe, nurturing space. Your journey toward wellbeing starts with one mindful step.
          </p>
          <button className="mt-10 bg-healing-500 hover:bg-healing-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all">
            Book a Session
          </button>
        </div>
      </header>

      <main>
        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-heading text-center mb-12 text-serene-900">Therapeutic Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-serene-100 rounded-3xl hover:shadow-xl transition-all">
                <h3 className="text-2xl font-semibold mb-3">Individual Therapy</h3>
                <p className="text-serene-600">Personalized sessions to support your mental and emotional growth.</p>
              </div>
              <div className="p-8 border border-serene-100 rounded-3xl hover:shadow-xl transition-all">
                <h3 className="text-2xl font-semibold mb-3">Couples Counseling</h3>
                <p className="text-serene-600">Strengthen your relationship with guided communication and healing.</p>
              </div>
              <div className="p-8 border border-serene-100 rounded-3xl hover:shadow-xl transition-all">
                <h3 className="text-2xl font-semibold mb-3">Mindfulness Coaching</h3>
                <p className="text-serene-600">Develop presence and resilience through mindful practices.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;