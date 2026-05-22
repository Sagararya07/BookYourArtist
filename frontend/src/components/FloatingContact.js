import React, { useState } from 'react';

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-contact">
      {open && (
        <div className="floating-actions">
          <a href="https://wa.me/919353548082?text=Hi, I want to book an artist for my event." target="_blank" rel="noreferrer" className="floating-action-btn whatsapp">
            💬 WhatsApp Us
          </a>
          <a href="tel:9353548082" className="floating-action-btn call">
            📞 Call Us
          </a>
        </div>
      )}
      <button className="floating-main-btn" onClick={() => setOpen(!open)} title="Contact Us">
        {open ? '✕' : '📞'}
      </button>
    </div>
  );
};

export default FloatingContact;
