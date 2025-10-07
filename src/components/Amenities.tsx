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
    <section id="amenities" className="py-20 bg-gradient-to-br from-slate-900 via-pink-900/20 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FCD34D] font-medium tracking-wider text-sm uppercase">
            Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
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
                className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg hover:bg-gradient-to-br hover:from-pink-800/30 hover:to-slate-800/80 transition-all group border border-slate-700/50"
              >
                <div className="bg-gradient-to-br from-pink-600 to-rose-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                <p className="text-slate-400">{amenity.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#E6BE00] via-pink-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Experience True Luxury
          </h3>
          <p className="text-lg mb-8 text-white/95 max-w-2xl mx-auto">
            Book your stay at Asian Legends and discover why we're the preferred choice for discerning travelers
          </p>
          <button className="bg-white text-pink-700 px-8 py-4 rounded-md hover:bg-slate-100 transition-all font-medium text-lg shadow-lg">
            View Special Offers
          </button>
        </div>
      </div>
    </section>
  );
}
