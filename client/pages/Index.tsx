import InfiniteScroll from '../components/InfiniteScroll';
import FadeKenBurnsCarousel from '../components/FadeKenBurnsCarousel';

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="w-full border-b border-gray-800 fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-2">
          <div className="flex items-center justify-between py-2">
            <div className="text-white font-bold text-lg tracking-wider">
              BRAGG
            </div>
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors">
              Book a call
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[60px] sm:h-[56px] lg:h-[56px]" />
      {/* Hero Section */}
      <section className="w-full border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-[28px] sm:text-4xl lg:text-6xl font-medium leading-[36px] sm:leading-tight mb-4">
            <div className="mb-1">Designing timeless</div>
            <div className="mb-1">brands and seamless</div>
            <div>web experiences</div>
          </h1>
          <p className="text-gray-400 text-[15px] sm:text-lg mb-12 mt-4 max-w-2xl mx-auto">
            Your brand has a story. We help you<br className="sm:hidden" />
            share it with design and digital<br className="sm:hidden" />
            experiences that last.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href="#pricing" className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors min-w-[125px] text-center">
              Let's work
            </a>
            <button className="bg-zinc-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2 min-w-[146px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/d681b811c29974439e2061dbd027c6e266631e7a?placeholderIfAbsent=true"
                alt="Chat icon"
                className="w-5 h-5"
              />
              Chat now
            </button>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="w-full border-b border-gray-800 overflow-hidden">
        <InfiniteScroll />
      </section>




      {/* Main Image Section */}
      <section className="w-full pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <FadeKenBurnsCarousel />
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="w-full pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-medium text-center mb-16">
            Why work with us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative overflow-hidden group sm:rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/c3c778a6c7077099d8ba11ef1edd58380c95edc9?placeholderIfAbsent=true"
                alt="Pixel-perfect designs"
                className="w-full h-[234px] sm:h-80 object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg font-medium mb-2">Pixel-perfect designs</h3>
                <p className="text-sm sm:text-sm text-gray-300 leading-relaxed">
                  We make sure every part of the<br />
                  design looks clean and sharp.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group sm:rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/12b146ab8fe2a8eb3c86b1248e8370283b451ccf?placeholderIfAbsent=true"
                alt="Timeless, strategic designs"
                className="w-full h-[234px] sm:h-80 object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg font-medium mb-2">Timeless, strategic designs</h3>
                <p className="text-sm sm:text-sm text-gray-300 leading-relaxed">
                  Designs that look good today<br />
                  and stay great for years.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group sm:rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/92f088317065f11381e6db6fa85bbcdddfbac1d1?placeholderIfAbsent=true"
                alt="Made for strong results"
                className="w-full h-[234px] sm:h-80 object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg font-medium mb-2">Made for strong results</h3>
                <p className="text-sm sm:text-sm text-gray-300 leading-relaxed">
                  Design that communicates clearly and<br />
                  helps you reach your goals.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group sm:rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/1bcf897eef99e4b30d924e8111c8399a8f8c137b?placeholderIfAbsent=true"
                alt="User-friendly experiences"
                className="w-full h-[234px] sm:h-80 object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg font-medium mb-2">User-friendly experiences</h3>
                <p className="text-sm sm:text-sm text-gray-300 leading-relaxed">
                  Intuitive interfaces that feel natural<br />
                  from the very first click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full border-b border-gray-800">
        <div className="max-w-sm sm:max-w-4xl mx-auto px-5 sm:px-4 lg:px-20 py-8 sm:py-16">
          <div className="mx-[-20px] sm:mx-0 px-6 sm:px-0 py-8 sm:py-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/864a998b9814cd38ccc2bca5e66a5879990ba8c2?placeholderIfAbsent=true"
              alt="Testimonial avatar"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full mx-auto mb-8 sm:mb-10"
            />
            <blockquote className="text-[17px] sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 sm:mb-10 text-center">
              "It was an amazing experience<br className="sm:hidden" />
              working with Zedsy, very<br className="sm:hidden" />
              creative, helped us to design the<br className="sm:hidden" />
              combo page as we imagined, &<br className="sm:hidden" />
              delivered the quality work. Highly<br className="sm:hidden" />
              recommended for design work!"
            </blockquote>
            <div className="text-center">
              <div className="text-[15px] sm:text-lg font-medium mb-1">Darshil Parmar</div>
              <div className="text-gray-400 text-[15px] sm:text-base">Founder, DataVidhya</div>
            </div>
          </div>
          {/* Navigation arrows for mobile */}
          <div className="flex border-t border-gray-800 h-10 sm:hidden mx-[-20px]">
            <button className="flex-1 border-r border-gray-800 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 7.89437L14 6.48438L8 12.4844L14 18.4844L15.41 17.0744L10.83 12.4844L15.41 7.89437Z" fill="#757575" />
              </svg>
            </button>
            <button className="flex-1 border-l border-gray-800 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 7.89437L10 6.48438L16 12.4844L10 18.4844L8.59 17.0744L13.17 12.4844L8.59 7.89437Z" fill="#757575" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-medium text-center mb-16">Our services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-[17px] sm:text-lg font-medium">
            <div className="py-6">Brand Design</div>
            <div className="py-6">Pitch Deck</div>
            <div className="py-6">Brand Guidelines</div>
            <div className="py-6">Web/App Design</div>
            <div className="py-6">Mobile Apps</div>
            <div className="py-6">Landing Page</div>
            <div className="py-6">Motion Design</div>
            <div className="py-6">Framer Development</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full border-b border-gray-800">
        <div className="max-w-sm sm:max-w-6xl mx-auto px-5 sm:px-4 lg:px-20 py-8 sm:py-16">
          <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-medium text-center mb-8 sm:mb-16">Pricing</h2>
          <div className="space-y-0 sm:grid sm:grid-cols-3 sm:gap-8 sm:space-y-0">
            {/* Website Design */}
            <div className="bg-black border-b border-gray-800 sm:border sm:rounded-lg p-8 mx-[-20px] sm:mx-0">
              <h3 className="text-[17px] sm:text-xl font-medium mb-8">Website Design</h3>
              <div className="mb-8">
                <div className="text-sm text-gray-400 mb-1">Starting at</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[29px] sm:text-3xl font-medium">$1,599</span>
                  <span className="text-gray-400 text-sm line-through">$1,999</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Perfect for growing brands<br />
                  that need a strong online<br />
                  presence.
                </p>
              </div>
              <button className="w-full bg-zinc-800 text-white py-3 rounded-full font-medium hover:bg-zinc-700 transition-colors mb-8 text-[15px]">
                Book a call
              </button>
              <div className="space-y-4 text-[16px] sm:text-sm">
                <div className="text-gray-400 mb-4 text-sm">What's included :</div>
                <div>Free Basic Brand Design</div>
                <div>Custom-designed landing page</div>
                <div>No-code development ($899+)</div>
                <div>Delivery within 10-15 days</div>
                <div>High quality interactions</div>
                <div>Regular Updates via Slack</div>
              </div>
            </div>

            {/* Unlimited Design - Featured */}
            <div className="bg-zinc-900 border-b border-gray-700 sm:border sm:rounded-lg p-8 mx-[-20px] sm:mx-0">
              <h3 className="text-[17px] sm:text-xl font-medium mb-8">Unlimited Design</h3>
              <div className="mb-8">
                <div className="text-sm text-gray-400 mb-1">Per month</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[29px] sm:text-3xl font-medium">$2,999</span>
                  <span className="text-gray-400 text-sm line-through">$3,999</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Ideal for startups, SaaS, and<br />
                  apps getting ready to go live.
                </p>
              </div>
              <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-100 transition-colors mb-8 text-[15px]">
                Book a call
              </button>
              <div className="space-y-4 text-[16px] sm:text-sm">
                <div className="text-gray-400 mb-4 text-sm">What's included :</div>
                <div>Product Design</div>
                <div>Unlimited Brand Design</div>
                <div>No-Code Development</div>
                <div>Updates every 48 hours</div>
                <div>No contracts, no meetings</div>
                <div>Unlimited requests & revisions</div>
                <div>Pause & Cancel anytime</div>
              </div>
            </div>

            {/* Custom Design */}
            <div className="bg-black border-b border-gray-800 sm:border sm:rounded-lg p-8 mx-[-20px] sm:mx-0">
              <h3 className="text-[17px] sm:text-xl font-medium mb-8">Custom Design</h3>
              <div className="mb-8">
                <div className="text-sm text-gray-400 mb-1">Flexible scope</div>
                <div className="mb-4">
                  <span className="text-[28px] sm:text-3xl font-medium">Custom Quote</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Specialized design services<br />
                  built around your unique<br />
                  needs.
                </p>
              </div>
              <button className="w-full bg-zinc-800 text-white py-3 rounded-full font-medium hover:bg-zinc-700 transition-colors mb-8 text-[15px]">
                Book a call
              </button>
              <div className="space-y-4 text-[16px] sm:text-sm">
                <div className="text-gray-400 mb-4 text-sm">What's included :</div>
                <div>Brand Design</div>
                <div>Framer Development</div>
                <div>Web/Mobile apps</div>
                <div>Social media design</div>
                <div>Motion Design</div>
                <div>Regular Updates</div>
                <div>Unlimited revisions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="w-full border-b border-gray-800">
        <div className="max-w-sm sm:max-w-6xl mx-auto px-5 sm:px-4 lg:px-20 py-8 sm:py-16">
          <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-medium text-center mb-8 sm:mb-16">How it works?</h2>
          <div className="space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12 sm:space-y-0">
            <div className="border-b border-gray-800 sm:border-0 p-6 sm:p-0 mx-[-20px] sm:mx-0 space-y-5 sm:space-y-6">
              <div className="text-lg font-medium opacity-50">(1)</div>
              <div>
                <h3 className="text-lg font-medium mb-3">Book a call</h3>
                <p className="text-sm text-gray-400">
                  Schedule a quick call to meet us<br />
                  and tell us what you need.
                </p>
              </div>
            </div>

            <div className="border-b border-gray-800 sm:border-0 p-6 sm:p-0 mx-[-20px] sm:mx-0 space-y-5 sm:space-y-6">
              <div className="text-lg font-medium opacity-50">(2)</div>
              <div>
                <h3 className="text-lg font-medium mb-3">Share your vision</h3>
                <p className="text-sm text-gray-400">
                  Walk us through your ideas,<br />
                  goals and imagination
                </p>
              </div>
            </div>

            <div className="border-b border-gray-800 sm:border-0 p-6 sm:p-0 mx-[-20px] sm:mx-0 space-y-5 sm:space-y-6">
              <div className="text-lg font-medium opacity-50">(3)</div>
              <div>
                <h3 className="text-lg font-medium mb-3">We build your vision</h3>
                <p className="text-sm text-gray-400">
                  Our team brings your<br />
                  product to life with care and<br />
                  creativity.
                </p>
              </div>
            </div>

            <div className="border-b border-gray-800 sm:border-0 p-6 sm:p-0 mx-[-20px] sm:mx-0 space-y-5 sm:space-y-6">
              <div className="text-lg font-medium opacity-50">(4)</div>
              <div>
                <h3 className="text-lg font-medium mb-3">You go live</h3>
                <p className="text-sm text-gray-400">
                  Launch your new brand or<br />
                  site and start making an<br />
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full border-b border-gray-800">
        <div className="max-w-sm sm:max-w-6xl mx-auto px-5 sm:px-4 lg:px-20 py-8 sm:py-16">
          <div className="space-y-8 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0">
            <div className="sm:col-span-1 border-b border-gray-800 sm:border-0 p-6 sm:p-0 mx-[-20px] sm:mx-0">
              <h2 className="text-[29px] sm:text-3xl lg:text-4xl font-medium leading-tight">
                Frequently<br />
                Asked<br />
                Questions
              </h2>
            </div>
            <div className="sm:col-span-2 space-y-0">
              {[
                {
                  question: "How long does a typical\nproject take?",
                  lines: 2
                },
                {
                  question: "What is your design\nprocess like?",
                  lines: 2
                },
                {
                  question: "Do you offer revisions?",
                  lines: 1
                },
                {
                  question: "What if I need support\nafter the project is\ncomplete?",
                  lines: 3
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center justify-between p-6 sm:py-4 sm:px-0 border-b border-gray-800 sm:border-0 sm:border-b sm:border-gray-800 mx-[-20px] sm:mx-0 ${item.lines > 1 ? 'h-28 sm:h-auto' : 'h-20 sm:h-auto'}`}>
                  <div className={`text-lg font-medium ${item.lines > 1 ? 'self-start pt-4 sm:pt-0' : ''}`}>
                    {item.question.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform rotate-90 flex-shrink-0"
                  >
                    <path d="M16.59 9.57438L18 10.9844L12 16.9844L6 10.9844L7.41 9.57438L12 14.1544L16.59 9.57438Z" fill="white" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-medium mb-3">
              Want to work<br />with us?
            </h2>
            <p className="text-gray-400 text-[15px] sm:text-lg mb-6">We'd love to hear from you !</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors min-w-[121px]">
                Let's work
              </button>
              <button className="bg-zinc-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2 min-w-[146px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/796d530e4140408a954df29b08aa12f4/b83d3124981457428dc0b13dffa418f846c1fbc6?placeholderIfAbsent=true"
                  alt="Chat icon"
                  className="w-5 h-5"
                />
                Chat now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="space-y-6">
            <img
              src="client/public/BRAGG.png"
              alt="BRAGG Logo"
              className="h-12 sm:h-16 lg:h-20 object-contain"
            />
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 text-sm text-gray-400 text-center sm:text-left">
              <a href="#top" className="hover:text-white transition-colors">Back to Top</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How it works?</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              <a href="#why-us" className="hover:text-white transition-colors">Why work with us?</a>
              <a href="#twitter" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
