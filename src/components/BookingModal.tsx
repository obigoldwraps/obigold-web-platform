import React, { useState } from 'react';

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
  const [formData, setFormData] = useState<FormData>({
    vehicle: '',
    service: 'Full Color Change',
    name: '',
    phone: '',
    email: ''
  });
  const [selectedService, setSelectedService] = useState('Full Color Change');

  if (!isOpen) return null;

  const updateData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = ['Full Color Change', 'Paint Protection (PPF)', 'Commercial Branding'];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log('Booking submitted:', formData);
    onClose();
    // TODO: Integrate Supabase here
  };

  const selectService = (service: string) => {
    setSelectedService(service);
    updateData('service', service);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-obigold-dark border border-obigold-gold/30 w-full max-w-lg rounded-3xl p-8 shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-slide-up">
        
        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-obigold-gold' : 'bg-obigold-grey'}`} />
          ))}
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-obigold-white/50 hover:text-obigold-gold transition-colors text-2xl">×</button>

        {/* Step Content */}
        <div className="min-h-[300px] flex flex-col justify-between">
          <div>
{step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-black text-obigold-gold mb-2 uppercase italic tracking-tighter">The Vehicle</h2>
                <p className="text-obigold-white/60 mb-6"></p>
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
                      className={`p-4 border rounded-xl text-left transition-all text-obigold-white border-obigold-grey hover:border-obigold-gold hover:bg-obigold-gold/10 ${selectedService === type ? 'border-obigold-gold bg-obigold-gold/10' : ''}`}
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

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
{step > 1 && (
              <button 
                onClick={prevStep} 
                className="flex-1 py-4 font-bold text-obigold-white border border-obigold-grey rounded-xl hover:bg-white/5 transition-all"
              >
                Back
              </button>
            )}
            <button 
              onClick={step === 3 ? handleSubmit : nextStep} 
              className="flex-1 py-4 font-bold text-obigold-black bg-obigold-gold-vibrant rounded-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all"
            >
              {step === 3 ? 'Send Quote Request' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

