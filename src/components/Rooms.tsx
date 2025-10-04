import { Wifi, Coffee, Tv, Wind, Users, Maximize } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      name: 'Deluxe Room',
      price: 1990,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '350 sq ft',
      guests: '2 Guests',
      amenities: ['Free WiFi', 'Coffee Maker', 'Smart TV', 'Air Conditioning'],
      description: 'Elegant room with modern amenities and Asian-inspired decor',
    },
    {
      name: 'Executive Suite',
      price: 3490,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '550 sq ft',
      guests: '3 Guests',
      amenities: ['Free WiFi', 'Coffee Maker', 'Smart TV', 'Air Conditioning'],
      description: 'Spacious suite with separate living area and premium furnishings',
    },
    {
      name: 'Presidential Suite',
      price: 5990,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: '900 sq ft',
      guests: '4 Guests',
      amenities: ['Free WiFi', 'Coffee Maker', 'Smart TV', 'Air Conditioning'],
      description: 'Ultimate luxury with panoramic views and exclusive services',
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('WiFi')) return Wifi;
    if (amenity.includes('Coffee')) return Coffee;
    if (amenity.includes('TV')) return Tv;
    if (amenity.includes('Air')) return Wind;
    return null;
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-wider text-sm uppercase">
            Accommodations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Our Luxury Rooms & Suites
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide the perfect balance of comfort, style, and functionality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-md font-medium">
                  ₹{room.price}/night
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{room.name}</h3>
                <p className="text-slate-600 mb-4">{room.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Maximize size={16} />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{room.guests}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, idx) => {
                      const Icon = getAmenityIcon(amenity);
                      return (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          {Icon && <Icon size={16} className="text-amber-600" />}
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button className="w-full bg-slate-900 text-white py-3 rounded-md hover:bg-amber-600 transition-colors font-medium">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
