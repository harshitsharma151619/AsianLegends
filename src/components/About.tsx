import { Award, Users, MapPin, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '50K+', label: 'Happy Guests' },
    { icon: MapPin, value: '3', label: 'Locations' },
    { icon: Star, value: '4.9', label: 'Guest Rating' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#8C5A2E] font-medium tracking-wider text-sm uppercase">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6">
              Where Ancient Traditions Meet Modern Luxury
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Asian Legends is more than just a hotel—it's a journey through the rich tapestry of Asian culture and heritage. Our property seamlessly blends traditional Asian architectural elements with contemporary comforts, creating an unforgettable experience for every guest.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              From the moment you step into our lobby, adorned with carefully curated artifacts and elegant designs, you'll be transported to a world where every detail tells a story. Our commitment to excellence and authentic hospitality has made us a legendary destination for travelers seeking something truly special.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#eaddc8] p-3 rounded-lg">
                      <Icon className="text-[#8C5A2E]" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hotel Interior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hotel Exterior"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hotel Dining"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hotel Room"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
