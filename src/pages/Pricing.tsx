
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const PricingFeature = ({ title, description, isFree, price }: { 
  title: string; 
  description: string; 
  isFree?: boolean;
  price?: string;
}) => (
  <div className="border border-gray-200 p-6 rounded-lg">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      {isFree ? (
        <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-md text-sm">Free!</span>
      ) : price ? (
        <span className="text-gray-800 font-semibold">{price}</span>
      ) : null}
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
  </div>
);

const Pricing = () => {
  // Pricing features data
  const includedFeatures = [
    {
      title: "CRM integrations",
      description: "Call details are sent automatically to your CRM or Zapier.",
      isFree: true,
      note: "We support HubSpot, Salesforce, Clio, and many more ($0.50/call per additional CRM)."
    },
    {
      title: "Lead qualification",
      description: "We'll capture and qualify your leads based on your custom criteria.",
      isFree: true,
      note: "We'll make sure a potential lead is a good fit for your services, location, and prices."
    },
    {
      title: "New client intake",
      description: "We'll ask business-specific intake questions to your qualified leads.",
      isFree: true,
      note: "2-3 short-answer questions (e.g., case number, traffic ticket number, address for real estate.)"
    },
    {
      title: "Dedicated phone number",
      description: "A dedicated local or toll-free number is given to you, and only you.",
      isFree: true,
      note: "You'll have a dedicated number to use for calls. Or port your business number at no charge."
    },
    {
      title: "Live-staffed 24/7",
      description: "Never miss an opportunity with around-the-clock live call answering.",
      isFree: true,
      note: "Calls at 2 pm and 2 am cost the same. Don't pay extra for 24/7 service."
    }
  ];

  const callAddOns = [
    {
      title: "Book appointments",
      description: "We'll schedule meetings directly on your calendar.",
      price: "$1.50",
      note: "We support Calendly, Acuity, Appointy."
    },
    {
      title: "SMS/Slack notifications",
      description: "Receive a SMS/Slack message when a caller qualifies for a transfer.",
      price: "$0.50",
      note: "Accept or reject call transfers. +$0.25 for each."
    },
    {
      title: "Microsoft Teams notifications",
      description: "Get a message in Teams when a caller qualifies for a transfer.",
      price: "$0.50",
      note: "Accept or reject call transfers. +$0.25 for each."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f5f0ea]">
      {/* Promotional banner */}
      <div className="bg-[#FFF6E5] py-2 text-center">
        <p className="text-sm font-medium text-sigsOrange">
          🟠 FRIENDLY RECEPTIONISTS = HAPPY CLIENTS! GET 20% OFF RECEPTIONIST PLANS FOR 6 MONTHS (CODE: HAPPYCALLERS)
        </p>
      </div>
      
      <Navigation />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Additional functionality</h1>
            <p className="text-xl text-center text-gray-600 mb-16">Tailor your experience and only pay for what you need.</p>
          </AnimateOnScroll>
          
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll delay="delay-100">
              <h2 className="text-2xl font-bold text-sigsOrange mb-8">Included features</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {includedFeatures.map((feature, index) => (
                  <PricingFeature 
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    isFree={feature.isFree}
                  />
                ))}
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay="delay-200">
              <h2 className="text-2xl font-bold text-sigsOrange mb-8">
                Call add-ons <span className="text-gray-600 text-lg font-normal">(priced per-call, monthly)</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {callAddOns.map((addon, index) => (
                  <PricingFeature 
                    key={index}
                    title={addon.title}
                    description={addon.description}
                    price={addon.price}
                  />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
