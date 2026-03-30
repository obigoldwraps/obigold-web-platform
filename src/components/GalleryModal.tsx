import React from 'react';
import { X } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: string;
  wrap: string;
  img: string;
}

export default function GalleryModal({ isOpen, onClose, vehicle, wrap, img }: GalleryModalProps) {
  if (!isOpen) return null;

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={handleClose}>
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute -top-12 -right-4 text-white/80 hover:text-white w-12 h-12 rounded-full bg-black/30 backdrop-blur flex items-center justify-center hover:bg-black/50 transition-all z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={img}
          alt={vehicle}
          className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
        />
        <div className="text-center mt-6 text-white">
          <h3 className="text-3xl md:text-4xl font-black uppercase mb-2">{vehicle}</h3>
          <p className="text-xl text-[var(--primary-gold)] font-bold uppercase tracking-widest">{wrap}</p>
        </div>
      </div>
    </div>
  );
}

