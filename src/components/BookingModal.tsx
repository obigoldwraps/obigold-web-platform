import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js'; // 1. Import Supabase

// Initialize Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface FormData {
  vehicle: string;
  service: string;
  name: string;
  phone: string;
  email: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false); // 2. Add loading state
  const [isSuccess, setIsSuccess] = useState(false); // 3. Add success state
  
  const [formData, setFormData] = useState<FormData>({
    vehicle: '',
    service: 'Full/Partial Color Change',
    name: '',
    phone: '',
    email: ''
  });
  const [selectedService, setSelectedService] = useState('Full/Partial Color Change');

  if (!isOpen) return null;

  const updateData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = ['Full/Partial Color Change', 'Paint Protection (PPF)', 'Commercial Branding', 'Window & Windscreen Tint'];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // 4. Integrated Supabase Logic
  const handleSubmit = async () => {
    setLoading(true);
    
    const { error } = await supabase
      .from('leads')
      .insert([
        { 
          full_name: formData.name, 
          email: formData.email,
          phone: formData.phone,
          vehicle_info: formData.vehicle,
          service_requested: formData.service,
          status: 'pending'
        }
      ]);

    setLoading(false);

    if (error) {
      console.error('Error saving lead:', error.message);
      alert("Something went wrong. Please try again or call us directly!");
    } else {
      setIsSuccess(true);
      // Reset form after a delay or let user close it
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setStep(1);
        setFormData({ vehicle: '', service: 'Full/Partial Color Change', name: '', phone: '', email: '' });
      }, 3000);
    }
  };

  const selectService = (service: string) => {
    setSelectedService(service);
    updateData('service', service);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative bg-obigold-dark border border-obigold-gold/30 w-full max-w-lg rounded-3xl p-8 shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-slide-up">
        
        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="text-center py-12 animate-fade-in">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-3xl font-black text-obigold-gold uppercase italic tracking-tighter mb-4">Request Sent!</h2>
            <p className="text-obigold-white/60">We've received your vision. The Obigold team will reach out shortly to discuss your transformation.</p>
          </div>
        ) : (
          /* FORM STATE */
          <>
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-obigold-gold' : 'bg-obigold-grey'}`} />
              ))}
            </div>

            <button onClick={onClose} className="absolute top-6 right-6 text-obigold-white/50 hover:text-obigold-gold transition-colors text-2xl">×</button>

            <div className="min-h-[300px] flex flex-col justify-between">
              <div>
                {step === 1 && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-black text-obigold-gold mb-2 uppercase italic tracking-tighter">The Vehicle</h2>
                    <p className="text-obigold-white/60 mb-6">Which masterpiece are we working on?</p>
                    <input 
                      type="text" 
                      placeholder="e.g. 2024 Mercedes G-Wagon" 
                      value={formData.vehicle}
                      onChange={(e) => updateData('vehicle', e.target.value)}
                      className="w-full bg-obigold-black border border-obigold-grey p-4 rounded-xl text-white focus:border-obigold-gold outline-none transition-all"
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-black text-obigold-gold mb-2 uppercase italic tracking-tighter">The Vision</h2>
                    <p className="text-obigold-white/60 mb-6">What kind of transformation?</p>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((type) => (
                        <button 
                          key={type} 
                          onClick={() => selectService(type)}
                          className={`p-4 border rounded-xl text-left transition-all text-obigold-white border-obigold-grey hover:border-obigold-gold hover:bg-obigold-gold/40 ${selectedService === type ? 'border-obigold-gold bg-obigold-gold/40' : ''}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-black text-obigold-gold mb-2 uppercase italic tracking-tighter">The Connect</h2>
                    <p className="text-obigold-white/60 mb-6">Final step. How to reach you?</p>
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => updateData('name', e.target.value)}
                      className="w-full bg-obigold-black border border-obigold-grey p-4 rounded-xl text-white mb-4 focus:border-obigold-gold outline-none transition-all" 
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone / WhatsApp" 
                      value={formData.phone}
                      onChange={(e) => updateData('phone', e.target.value)}
                      className="w-full bg-obigold-black border border-obigold-grey p-4 rounded-xl text-white mb-4 focus:border-obigold-gold outline-none transition-all" 
                    />
                    <input 
                      type="email" 
                      placeholder="Email (optional)" 
                      value={formData.email}
                      onChange={(e) => updateData('email', e.target.value)}
                      className="w-full bg-obigold-black border border-obigold-grey p-4 rounded-xl text-white focus:border-obigold-gold outline-none transition-all" 
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <button 
                    onClick={prevStep} 
                    className="flex-1 py-4 font-bold text-obigold-white border border-obigold-grey rounded-xl hover:bg-white/5 transition-all"
                    disabled={loading}
                  >
                    Back
                  </button>
                )}
                <button 
                  onClick={step === 3 ? handleSubmit : nextStep} 
                  disabled={loading}
                  className="flex-1 py-4 font-bold text-obigold-black bg-obigold-gold-vibrant rounded-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all disabled:opacity-50"
                >
                  {loading ? 'Processing...' : step === 3 ? 'Send Quote Request' : 'Continue'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;