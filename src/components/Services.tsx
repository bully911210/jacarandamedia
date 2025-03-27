
import React from 'react';
import { LayoutGrid, Hash, Pencil, Target, Users, Presentation, Palette } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-jacarandaPurple">Services</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to your unique business needs and goals.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimateOnScroll delay="delay-100">
            <ServiceCard
              title="Digital Marketing Strategy"
              description="Integrated approaches to social media, Google Ads, SEO, and content planning to maximize your online presence."
              icon={<LayoutGrid size={28} />}
              features={[
                "Comprehensive market analysis",
                "Competitor benchmarking",
                "Custom strategy development",
                "Performance tracking",
                "ROI optimization"
              ]}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-200">
            <ServiceCard
              title="Social Media Content"
              description="Creation, scheduling, monitoring, and optimization of engaging content that builds your brand and connects with your audience."
              icon={<Hash size={28} />}
              features={[
                "Platform-specific content creation",
                "Engagement strategy",
                "Community management",
                "Content calendar planning",
                "Performance analytics"
              ]}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-300">
            <ServiceCard
              title="Copywriting"
              description="Persuasive, creative content that tells your story, engages your audience, and drives conversions across all channels."
              icon={<Pencil size={28} />}
              features={[
                "Website copy optimization",
                "Email marketing content",
                "Blog and article writing",
                "Ad copy creation",
                "Brand voice development"
              ]}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-100">
            <ServiceCard
              title="Paid Advertising"
              description="Strategic campaign management across Meta, LinkedIn, Google, and other platforms to drive traffic, leads, and sales."
              icon={<Target size={28} />}
              features={[
                "Platform selection strategy",
                "Audience targeting",
                "Ad creative development",
                "Budget optimization",
                "Conversion tracking"
              ]}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-200">
            <ServiceCard
              title="Lead Generation"
              description="Targeted strategies to attract and convert qualified leads that translate into measurable business growth."
              icon={<Users size={28} />}
              features={[
                "Lead magnet creation",
                "Landing page optimization",
                "Funnel development",
                "Qualification processes",
                "Lead nurturing systems"
              ]}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-300">
            <ServiceCard
              title="Workshops & Training"
              description="Hands-on sessions, personalized group training, and one-on-one consulting to empower your team."
              icon={<Presentation size={28} />}
              features={[
                "Social media masterclasses",
                "Digital marketing fundamentals",
                "Content creation workshops",
                "Advertising platform training",
                "Strategy development sessions"
              ]}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-400">
            <ServiceCard
              title="Branding"
              description="Complete branding solutions including logo design, rebrands, creative photoshoots, and graphic design."
              icon={<Palette size={28} />}
              features={[
                "Brand identity development",
                "Visual asset creation",
                "Brand guideline documentation",
                "Brand voice definition",
                "Brand consistency planning"
              ]}
              className="md:col-span-2 lg:col-span-3"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Services;
