import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-serene-50 font-body">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-serene-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-healing-500 to-healing-600 rounded-2xl flex items-center justify-center text-white font-heading text-2xl">
                H
              </div>
              <div>
                <span className="font-heading text-2xl tracking-tight text-serene-900">Harmony</span>
                <span className="text-sm text-serene-500 block -mt-1">Therapy</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-serene-700 font-medium">
              <button onClick={() => scrollToSection('services')} className="hover:text-healing-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-healing-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-healing-600 transition-colors">Testimonials</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-healing-500 hover:bg-healing-600 text-white px-8 py-3 rounded-full transition-all font-semibold"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-serene-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-serene-100 py-6">
            <div className="flex flex-col gap-6 px-6 text-center text-lg">
              <button onClick={() => scrollToSection('services')} className="py-2 hover:text-healing-600">Services</button>
              <button onClick={() => scrollToSection('about')} className="py-2 hover:text-healing-600">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="py-2 hover:text-healing-600">Testimonials</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-healing-500 hover:bg-healing-600 text-white py-4 rounded-2xl font-semibold"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-serene-900 to-serene-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-heading tracking-tight mb-6">
            Healing Begins Here
          </h1>
          <p className="text-xl text-serene-200 max-w-2xl mx-auto">
            Compassionate therapy in a safe, nurturing space. Your journey toward wellbeing starts with one mindful step.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="mt-10 bg-healing-500 hover:bg-healing-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all"
          >
            Book a Session
          </button>
        </div>
      </header>

      <main>
        {/* Services */}
        <section id="services" className="py-20 bg-white">
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

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-serene-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-heading mb-6">Let's Connect</h2>
            <p className="text-xl text-serene-300 mb-12 max-w-md mx-auto">
              I'm here to listen. Reach out to begin your healing journey.
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12">
              <form className="space-y-8 max-w-md mx-auto">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-serene-400 focus:outline-none focus:border-healing-400"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-serene-400 focus:outline-none focus:border-healing-400"
                />
                <textarea 
                  placeholder="How can I help you?" 
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-3xl px-6 py-4 text-white placeholder:text-serene-400 focus:outline-none focus:border-healing-400 resize-y"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-healing-500 hover:bg-healing-600 py-5 rounded-2xl font-semibold text-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;