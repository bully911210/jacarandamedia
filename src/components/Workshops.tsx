
import React from 'react';
import { Calendar, Users, Clock, MapPin } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import CTAButton from './CTAButton';

const Workshops: React.FC = () => {
  const upcomingWorkshops = [
    {
      id: 1,
      title: "Social Media Mastery Workshop",
      description: "Learn how to create engaging content and build a strong social media presence for your business.",
      date: "June 15, 2023",
      time: "9:00 AM - 2:00 PM",
      location: "Online (Zoom)",
      capacity: 25,
      price: "$299",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Paid Advertising Strategy Session",
      description: "Master the art of creating high-converting ad campaigns across multiple platforms.",
      date: "July 10, 2023",
      time: "10:00 AM - 3:30 PM",
      location: "Jacaranda Media Offices, Cape Town",
      capacity: 15,
      price: "$399",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="workshops" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Workshops & <span className="text-jacarandaPurple">Training</span></h2>
            <div className="w-24 h-1 bg-jacarandaGold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hands-on learning experiences designed to empower your team with the skills and knowledge to excel in digital marketing.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {upcomingWorkshops.map((workshop, index) => (
            <AnimateOnScroll key={workshop.id} delay={index === 0 ? "delay-100" : "delay-200"}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={workshop.image} 
                      alt={workshop.title} 
                      className="h-60 md:h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                    <p className="text-gray-600 mb-4">{workshop.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar size={16} className="text-jacarandaPurple mr-2" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock size={16} className="text-jacarandaPurple mr-2" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin size={16} className="text-jacarandaPurple mr-2" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users size={16} className="text-jacarandaPurple mr-2" />
                        <span>Limited to {workshop.capacity} participants</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-jacarandaPurple">{workshop.price}</span>
                      <CTAButton variant="primary" size="sm" href="#contact">
                        Book Now
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay="delay-300">
          <div className="bg-jacarandaPurple rounded-2xl p-8 md:p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Custom Workshop Solutions</h3>
            <p className="mb-6 max-w-3xl mx-auto">
              Need a specialized training session for your team? We offer custom workshops tailored to your specific industry, challenges, and goals. From one-on-one consulting to team training days, we've got you covered.
            </p>
            <CTAButton variant="secondary" href="#contact">
              Request Custom Training
            </CTAButton>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Workshops;
