import React, { useState } from "react";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

export default function HotelWebsite() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="font-sans bg-[#fdf6f0] text-gray-900">
      <section className="w-full">
        <img src="/hero.jpg" alt="Hero Banner" className="w-full h-[1000px] object-cover" />
      </section>

      <section className="h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center p-4 relative" style={{ backgroundImage: `url('/images/hero.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 p-8 rounded-2xl shadow-2xl">
          <h1 className="text-6xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">Namma Hotel</h1>
          <p className="text-2xl font-medium">Authentic Taste, Great Atmosphere</p>
        </div>
      </section>

      <section className="p-12 bg-[#fff6ec]">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#222]">About Us</h2>
        <p className="text-center max-w-2xl mx-auto mb-4 text-lg">
          Welcome to Hotel Name – a cozy place to enjoy delicious food and relax with friends and family.
        </p>
        <p className="text-center max-w-2xl mx-auto text-lg">
          Our mission is to bring you the finest dishes made with love, in a warm and welcoming environment.
        </p>
      </section>

      <section id="menu" className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#222]">Our South Indian Menu</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Breakfast */}
          <div className="bg-[#fff0e5] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#cc5500] mb-4">Breakfast</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Dosa</span><span>₹50</span></li>
              <li className="flex justify-between"><span>Idli Vada</span><span>₹40</span></li>
              <li className="flex justify-between"><span>Pongal</span><span>₹45</span></li>
              <li className="flex justify-between"><span>Upma</span><span>₹35</span></li>
              <li className="flex justify-between"><span>Medu Vada</span><span>₹30</span></li>
            </ul>
          </div>

          {/* Lunch */}
          <div className="bg-[#fff0e5] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#cc5500] mb-4">Lunch</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>South Indian Thali</span><span>₹120</span></li>
              <li className="flex justify-between"><span>Sambar Rice</span><span>₹60</span></li>
              <li className="flex justify-between"><span>Rasam Rice</span><span>₹50</span></li>
              <li className="flex justify-between"><span>Curd Rice</span><span>₹40</span></li>
              <li className="flex justify-between"><span>Lemon Rice</span><span>₹50</span></li>
            </ul>
          </div>

          {/* Snacks */}
          <div className="bg-[#fff0e5] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#cc5500] mb-4">Snacks</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Banana Bajji</span><span>₹25</span></li>
              <li className="flex justify-between"><span>Onion Pakoda</span><span>₹30</span></li>
              <li className="flex justify-between"><span>Sundal</span><span>₹20</span></li>
            </ul>
          </div>

          {/* Beverages */}
          <div className="bg-[#fff0e5] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#cc5500] mb-4">Beverages</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Filter Coffee</span><span>₹20</span></li>
              <li className="flex justify-between"><span>Masala Chai</span><span>₹15</span></li>
              <li className="flex justify-between"><span>Buttermilk</span><span>₹10</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 bg-[#fdf6f0]">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#222]">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`/gallery${i}.jpg`}
              alt={`Gallery ${i}`}
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#222]">Contact Us</h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} action="https://formsubmit.co/your-email@example.com" method="POST" className="grid gap-4">
            <input name="name" placeholder="Your Name" onChange={handleChange} className="p-3 border border-gray-300 rounded-xl" required />
            <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="p-3 border border-gray-300 rounded-xl" required />
            <textarea name="message" placeholder="Your Message" onChange={handleChange} className="p-3 border border-gray-300 rounded-xl" rows="4" required />
            <button type="submit" className="w-full bg-[#cc5500] text-white py-3 rounded-xl font-semibold hover:bg-[#a94700] transition">Send Message</button>
          </form>
          <div className="mt-6 space-y-2 text-center text-gray-700">
            <p className="flex items-center justify-center gap-2"><MapPin />123 Main Street, Your City</p>
            <p className="flex items-center justify-center gap-2"><Phone />+123 456 7890</p>
            <p className="flex items-center justify-center gap-2"><Mail />contact@hotelname.com</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><MessageCircle /></a>
              <a href="https://instagram.com/yourhotel" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            </div>
            <iframe className="w-full h-64 rounded-xl mt-4" src="https://www.google.com/maps/embed?..." allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}