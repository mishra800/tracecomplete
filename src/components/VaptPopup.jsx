import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function VaptPopup() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'VAPT'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    // Never show popup on admin or login pages
    if (
      path.includes('admin') ||
      path.includes('login') ||
      path === '/admin' ||
      path.startsWith('/admin/')
    ) {
      setShow(false);
      setAnimate(false);
      return;
    }

    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('vaptPopupShown');
    if (popupShown) return;

    const showTimer = setTimeout(() => {
      setShow(true);
      setTimeout(() => setAnimate(true), 50);
      sessionStorage.setItem('vaptPopupShown', 'true');
    }, 10000); // Show after 10 seconds

    const hideTimer = setTimeout(() => {
      handleClose();
    }, 70000); // Hide after 70 seconds (10s + 60s)

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setShow(false);
      setShowContactForm(false);
      setSubmitMessage('');
    }, 400);
  };

  const handleAvailOffer = () => {
    setShowContactForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', service: 'VAPT' });
      
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoToContact = () => {
    handleClose();
    setTimeout(() => {
      navigate('/contact-us');
    }, 400);
  };

  if (!show) return null;

  // Extra safety: never render on admin or login pages
  const path = location.pathname.toLowerCase();
  if (
    path.includes('admin') ||
    path.includes('login') ||
    path === '/admin' ||
    path.startsWith('/admin/')
  ) return null;

  return (
    <div 
      style={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 999999,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: animate ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}
      onClick={handleClose}
    >
      <div 
        style={{
          background: 'linear-gradient(135deg,#081a2f,#0f2c4d)',
          color: '#fff',
          padding: '42px',
          borderRadius: '22px',
          width: '90%',
          maxWidth: '460px',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 10px 60px rgba(0,150,255,0.25)',
          transform: animate ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(30px)',
          transition: 'all 0.45s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <span 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            cursor: 'pointer',
            fontSize: '22px',
            background: 'rgba(255,255,255,0.1)',
            padding: '6px 12px',
            borderRadius: '50%',
            transition: '0.3s',
            lineHeight: '1',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => e.target.style.background = '#ff7a00'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
        >
          ✕
        </span>

        {/* Main Heading */}
        <h2 style={{
          marginBottom: '14px',
          fontSize: '32px',
          fontWeight: 'bold',
          display: 'inline-block',
          padding: '10px 22px',
          borderRadius: '14px',
          background: 'rgba(255,122,0,0.1)',
          color: '#ff7a00',
          border: '1px solid rgba(255,122,0,0.5)',
          boxShadow: '0 0 20px rgba(255,122,0,0.6)',
          animation: 'vaptGlow 2s infinite',
        }}>
          Free VAPT
        </h2>

        {!showContactForm ? (
          <>
            <p style={{
              margin: '10px 0 18px',
              color: '#ccc',
              fontSize: '16px',
            }}>
              Secure More, Risk Less
            </p>

            {/* Badge */}
            <div style={{
              display: 'inline-block',
              padding: '10px 24px',
              margin: '15px 0',
              fontSize: '17px',
              fontWeight: 'bold',
              color: '#00eaff',
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.4)',
              borderRadius: '30px',
              boxShadow: '0 0 25px rgba(0,212,255,0.5)',
              animation: 'glowPulse 2s infinite',
            }}>
              Free for 5 IPs
            </div>

            <p style={{
              color: '#bbb',
              fontSize: '15px',
              lineHeight: '1.7',
              marginTop: '12px',
            }}>
              Stay one step ahead of cyber threats with our expert security testing.
            </p>

            {/* Button */}
            <button 
              onClick={handleAvailOffer}
              style={{
                background: '#ff7a00',
                color: 'white',
                padding: '14px 30px',
                border: 'none',
                borderRadius: '35px',
                marginTop: '22px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 20px rgba(255,122,0,0.4)',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#ff5500';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ff7a00';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Avail Offer
            </button>
          </>
        ) : (
          <>
            <p style={{
              margin: '10px 0 20px',
              color: '#ccc',
              fontSize: '15px',
            }}>
              Fill in your details to avail the offer
            </p>

            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  marginBottom: '15px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.border = '1px solid #ff7a00'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.2)'}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  marginBottom: '15px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.border = '1px solid #ff7a00'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.2)'}
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  fontSize: '15px',
                  outline: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.border = '1px solid #ff7a00'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.2)'}
              >
                <option value="VAPT" style={{ background: '#0f2c4d' }}>VAPT</option>
                <option value="Cybersecurity" style={{ background: '#0f2c4d' }}>Cybersecurity</option>
                <option value="Network Security" style={{ background: '#0f2c4d' }}>Network Security</option>
                <option value="Cloud Security" style={{ background: '#0f2c4d' }}>Cloud Security</option>
                <option value="Other" style={{ background: '#0f2c4d' }}>Other</option>
              </select>

              {submitMessage && (
                <p style={{
                  color: submitMessage.includes('Thank you') ? '#00ff88' : '#ff4444',
                  fontSize: '14px',
                  marginBottom: '15px',
                  fontWeight: '500',
                }}>
                  {submitMessage}
                </p>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting ? '#666' : '#ff7a00',
                  color: 'white',
                  padding: '14px 30px',
                  border: 'none',
                  borderRadius: '35px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 20px rgba(255,122,0,0.4)',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = '#ff5500';
                    e.target.style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = '#ff7a00';
                    e.target.style.transform = 'scale(1)';
                  }
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        )}

        {/* Inline Styles for Animations */}
        <style>{`
          @keyframes vaptGlow {
            0% { box-shadow: 0 0 10px rgba(255,122,0,0.3); transform: scale(1); }
            50% { box-shadow: 0 0 30px rgba(255,122,0,0.9); transform: scale(1.05); }
            100% { box-shadow: 0 0 10px rgba(255,122,0,0.3); transform: scale(1); }
          }

          @keyframes glowPulse {
            0% { box-shadow: 0 0 10px rgba(0,212,255,0.2); }
            50% { box-shadow: 0 0 35px rgba(0,212,255,0.8); }
            100% { box-shadow: 0 0 10px rgba(0,212,255,0.2); }
          }
        `}</style>
      </div>
    </div>
  );
}
