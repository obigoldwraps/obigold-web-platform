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
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    vehicle: '',
    service: 'Full/Partial Color Change',
    name: '',
    phone: '',
    email: ''
  });

  if (!isOpen) return null;

  // Helper to update state
  const updateData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    'Full/Partial Color Change', 
    'Paint Protection (PPF)', 
    'Commercial Branding', 
    'Window & Windscreen Tint'
  ];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // --- Web3Forms Submission Logic ---
  const handleSubmit = async () => {
    setLoading(true);

    // Using the native FormData object required by Web3Forms
    const submissionData = new window.FormData();
    
    // Web3Forms Configuration
    submissionData.append("access_key", "9e02630f-5998-4ff2-8485-31e03b4b97da");
    submissionData.append("subject", `New Obigold Quote: ${formData.vehicle}`);
    submissionData.append("from_name", "Obigold Wraps Website");
    
    // Adding your Form Data
    submissionData.append("Customer Name", formData.name);
    submissionData.append("Phone/WhatsApp", formData.phone);
    submissionData.append("Email", formData.email || "Not Provided");
    submissionData.append("Vehicle Model", formData.vehicle);
    submissionData.append("Requested Service", formData.service);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        // Clean up and close after success
        setTimeout(() => {
          setIsSuccess(false);
          setStep(1);
          setFormData({ vehicle: '', service: 'Full/Partial Color Change', name: '', phone: '', email: '' });
          onClose();
        }, 4000);
      } else {
        alert("Submission failed. Please try again or message us on WhatsApp.");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={!loading ? onClose : undefined} 
      />

      {/* Modal Container */}
      <div className="relative bg-obigold-dark border border-obigold-gold/30 w-full max-w-lg rounded-3xl p-8 shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-slide-up">
        
        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="text-center py-12 animate-fade-in">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-3xl font-black text-obigold-gold uppercase italic tracking-tighter mb-4">Request Sent!</h2>
            <p className="text-obigold-white/60">We've received your vision. The Obigold team will reach out shortly to discuss your transformation.</p>
          </div>
        ) : (
          /* FORM STEPS */
          <>
            {/* Progress Bar */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-obigold-gold' : 'bg-obigold-grey'}`} 
                />
              ))}
            </div>

            {/* Close Button */}
            {!loading && (
              <button 
                onClick={onClose} 
                className="absolute top-6 right-6 text-obigold-white/50 hover:text-obigold-gold transition-colors text-2xl"
              >
                ×
              </button>
            )}

            <div className="min-h-[300px] flex flex-col justify-between">
              <div>
                {/* STEP 1: VEHICLE */}
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

                {/* STEP 2: SERVICE */}
                {step === 2 && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-black text-obigold-gold mb-2 uppercase italic tracking-tighter">The Vision</h2>
                    <p className="text-obigold-white/60 mb-6">What kind of transformation?</p>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((type) => (
                        <button 
                          key={type} 
                          onClick={() => updateData('service', type)}
                          className={`p-4 border rounded-xl text-left transition-all text-obigold-white border-obigold-grey hover:border-obigold-gold hover:bg-obigold-gold/40 ${formData.service === type ? 'border-obigold-gold bg-obigold-gold/40' : ''}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTACT */}
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

              {/* NAVIGATION BUTTONS */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <button 
                    onClick={prevStep} 
                    disabled={loading}
                    className="flex-1 py-4 font-bold text-obigold-white border border-obigold-grey rounded-xl hover:bg-white/5 transition-all disabled:opacity-50"
                  >
                    Back
                  </button>
                )}
                <button 
                  onClick={step === 3 ? handleSubmit : nextStep} 
                  disabled={loading || (step === 1 && !formData.vehicle) || (step === 3 && (!formData.name || !formData.phone))}
                  className="flex-1 py-4 font-bold text-obigold-black bg-obigold-gold-vibrant rounded-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all disabled:opacity-50 disabled:grayscale"
                >
                  {loading ? 'Sending Request...' : step === 3 ? 'Send Quote Request' : 'Continue'}
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