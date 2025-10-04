import { Dumbbell, Utensils, Wifi, Car, Waves, Sparkles, Shield, Clock } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    {
      icon: Waves,
      title: 'Infinity Pool',
      description: 'Rooftop pool with stunning city views and poolside bar service',
    },
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Multiple restaurants serving authentic Asian and international cuisine',
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with modern equipment and personal trainers',
    },
    {
      icon: Sparkles,
      title: 'Luxury Spa',
      description: 'Full-service spa offering traditional Asian wellness treatments',
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'High-speed internet access throughout the entire property',
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Complimentary valet service and secure parking facilities',
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security and surveillance for your peace of mind',
    },
    {
      icon: Clock,
      title: 'Concierge Service',
      description: 'Dedicated team available 24/7 to assist with any requests',
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-medium tracking-wider text-sm uppercase">
            Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            World-Class Amenities
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Indulge in our exceptional facilities designed to make your stay unforgettable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <div className="bg-amber-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                <p className="text-slate-400">{amenity.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Experience True Luxury
          </h3>
          <p className="text-lg mb-8 text-amber-50 max-w-2xl mx-auto">
            Book your stay at Asian Legends and discover why we're the preferred choice for discerning travelers
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-md hover:bg-slate-100 transition-colors font-medium text-lg">
            View Special Offers
          </button>
        </div>
      </div>
    </section>
  );
}
