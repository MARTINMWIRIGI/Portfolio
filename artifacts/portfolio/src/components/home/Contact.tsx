import { useState } from "react";
import { Mail, MessageCircle, MapPin, Globe, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const TO_EMAIL = "info@imperialenterprise.co.ke";
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Corporate Website",
    message: ""
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMsg("Form service is not configured yet. Please contact us directly by email or WhatsApp.");
      return;
    }

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `Website Enquiry — ${formData.projectType} | ${formData.name}`,
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        message: formData.message,
        to_email: TO_EMAIL,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json() as { success: boolean; message?: string };

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", projectType: "Corporate Website", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.message ?? "Submission failed. Please try again or contact us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
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
                <h4 className="font-bold text-[#0B1628]">Phone &amp; WhatsApp</h4>
                <p className="text-slate-500">+254 703 823 398</p>
              </div>
            </a>

            <a href={`mailto:${TO_EMAIL}`} className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1628]">Email Us</h4>
                <p className="text-slate-500">{TO_EMAIL}</p>
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
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1628]">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. We've received your enquiry and will get back to you shortly at <strong>{TO_EMAIL}</strong>.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-blue-600 font-semibold hover:underline text-sm"
                >
                  Send another message
                </button>
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

                {status === "error" && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  data-testid="submit-contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Message to Imperial Enterprise"
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center">Submissions go directly to {TO_EMAIL}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
