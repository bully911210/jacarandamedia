
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Contact: React.FC = () => {
  React.useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    head?.appendChild(script);

    return () => {
      head?.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's better than <span className="text-jacarandaPurple">FREE?</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book a free 30-minute call to discuss how our ads and automations can drive faster results for you.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-100">
          <div className="max-w-4xl mx-auto">
            <div 
              className="calendly-inline-widget text-center" 
              data-url="https://calendly.com/franz-sigsolutions/jm-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=f895f5&text_color=20202a&background_color=ffffff"
              style={{
                minWidth: '320px', 
                height: '700px',
              }}
            ></div>
          </div>
        </AnimateOnScroll>
      </div>

      <style jsx>{`
        :global(.calendly-inline-widget) {
          text-align: center !important;
        }
        :global(.calendly-inline-widget iframe) {
          margin: 0 auto !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
