import { PartyPopper, Heart, Cake, Users, Music, Sparkles } from 'lucide-react';

export default function Events() {
  const events = [
    {
      icon: Heart,
      title: 'Ring Ceremony',
      description: 'Celebrate your engagement in our elegant lounge with romantic ambiance and exceptional service',
      capacity: 'Up to 150 guests',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sparkles,
      title: 'Weddings',
      description: 'Make your special day unforgettable with our premium wedding packages and dedicated event planning',
      capacity: 'Up to 300 guests',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Create magical memories with customized birthday celebrations in our vibrant party lounge',
      capacity: 'Up to 100 guests',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Users,
      title: 'Kitty Parties',
      description: 'Host your social gatherings in style with our premium lounge facilities and catering services',
      capacity: 'Up to 50 guests',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: PartyPopper,
      title: 'Corporate Events',
      description: 'Professional event spaces perfect for meetings, conferences, and corporate celebrations',
      capacity: 'Up to 200 guests',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Music,
      title: 'Live Band Nights',
      description: 'Experience electrifying live music performances in our state-of-the-art entertainment lounge',
      capacity: 'Up to 250 guests',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const features = [
    'Professional Event Planning',
    'Custom Catering Menu',
    'Audio & Visual Equipment',
    'Elegant Decor Options',
    'Dedicated Event Manager',
    'Complimentary Parking',
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#8C5A2E] font-medium tracking-wider text-sm uppercase">
            Events & Celebrations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6">
            Luxury Lounge & Event Spaces
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Host unforgettable celebrations in our premium lounge facilities. From intimate gatherings to grand celebrations, we create perfect moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-[#8C5A2E] p-2 rounded-lg">
                        <Icon className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#8C5A2E] font-medium">{event.capacity}</span>
                    <button className="text-slate-900 hover:text-[#8C5A2E] transition-colors font-medium text-sm">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Everything You Need for the Perfect Event
              </h3>
              <p className="text-slate-300 mb-6">
                Our experienced event team handles every detail, from planning to execution, ensuring your celebration is flawless and memorable.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-[#8C5A2E] text-white px-8 py-4 rounded-md hover:bg-[#704822] transition-colors font-medium">
                Book Your Event Now
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Event Space"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#8C5A2E] text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Events Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
