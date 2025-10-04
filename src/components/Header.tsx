import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-slate-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Phone size={14} />
              <span>+91 9053585447</span>
            </a>
            
          </div>
          <a href="mailto:info@asianlegends.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Mail size={14} />
              <span>info@asianlegends.com</span>
            </a>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-slate-900">
                <img src="./logo.jpg" alt="" className='h-20 w-20 rounded-full' />
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-amber-600'
                      : 'text-slate-700 hover:text-amber-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button className="hidden md:block bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-medium">
              Book Now
            </button>

            <button
              className="md:hidden text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-amber-50 text-amber-600 font-medium'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors font-medium mt-4">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
