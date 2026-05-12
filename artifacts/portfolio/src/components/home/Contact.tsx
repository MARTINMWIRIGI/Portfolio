import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Corporate Website",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", projectType: "Corporate Website", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#F0F7FF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">— Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1628]">Ready to Build Your Website?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <a href="https://wa.me/254703823398" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1628]">Phone & WhatsApp</h4>
                <p className="text-slate-500">+254 703 823 398</p>
              </div>
            </a>
            
            <a href="mailto:info@imperialenterprise.co.ke" className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1628]">Email Us</h4>
                <p className="text-slate-500">info@imperialenterprise.co.ke</p>
              </div>
            </a>

            <a href="https://imperialenterprise.co.ke" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1628]">Website</h4>
                <p className="text-slate-500">imperialenterprise.co.ke</p>
              </div>
            </a>

            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1628]">Location</h4>
                <p className="text-slate-500">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="https://wa.me/254703823398?text=Hi%20Imperial%20Enterprise%2C%20I%27d%20like%20a%20free%20quote" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-green-200">
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1628]">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#0B1628] mb-2">Full Name</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" placeholder="John Doe" data-testid="input-name" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0B1628] mb-2">Email Address</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" placeholder="john@example.com" data-testid="input-email" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0B1628] mb-2">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" placeholder="+254 7XX XXX XXX" data-testid="input-phone" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0B1628] mb-2">Project Type</label>
                  <select value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" data-testid="select-project-type">
                    <option>Corporate Website</option>
                    <option>E-Commerce Store</option>
                    <option>NGO Website</option>
                    <option>Hotel Website</option>
                    <option>ISP Website</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0B1628] mb-2">Message</label>
                  <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none" placeholder="Tell us about your project..." data-testid="textarea-message"></textarea>
                </div>

                <button type="submit" data-testid="submit-contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}