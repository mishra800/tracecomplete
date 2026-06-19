import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Derive base URL for /uploads image paths.
// Production: VITE_API_URL is a full https URL — strip /api suffix.
// Local dev:  VITE_API_URL is /api (Vite proxy) — use '' so /uploads stays relative.
const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

export default function ViewEvent() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div style={{ padding: '100px', textAlign: 'center', color: '#fff' }}>Loading event...</div>;
    if (!event || event.message) return <div style={{ padding: '100px', textAlign: 'center', color: '#fff' }}>Event not found.</div>;

    const plainDesc = stripHtml(event.description);

    return (
        <>
            <SEO
                title={`${event.title} | Trace Network & Engineering Pvt Ltd`}
                description={plainDesc ? plainDesc.substring(0, 160).replace(/\s+/g, ' ').trim() : "Stay updated with the latest events, webinars, and workshops on cybersecurity and IT technologies from Trace Network & Engineering Pvt Ltd."}
                keywords="IT event, cybersecurity event, webinar, workshop, trace network event"
                ogTitle={event.title}
                ogDescription={plainDesc ? plainDesc.substring(0, 160).replace(/\s+/g, ' ').trim() : "Stay updated with the latest events from Trace Network & Engineering."}
                ogImage={event.image ? (event.image.startsWith('http') ? event.image : `${API_BASE_URL}${event.image}`) : "/assets/images/logoo.png"}
            />
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}></div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>{event.title}</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
                                <li><span className="icon-right-arrow-1"></span></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><span className="icon-right-arrow-1"></span></li>
                                <li>{event.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            {event.image && (
                                <img
                                    src={event.image.startsWith('http') ? event.image : `${API_BASE_URL}${event.image}`}
                                    alt={event.title}
                                    style={{ width: '100%', borderRadius: '12px', marginBottom: '30px', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            )}
                            <h2 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '28px', fontWeight: '700' }}>{event.title}</h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 'bold', marginBottom: '20px' }}>
                                Event Date: {new Date(event.event_date).toLocaleDateString()}
                            </p>
                            <div style={{ lineHeight: '1.8', color: '#ffffff', whiteSpace: 'pre-wrap' }}>
                                {event.description}
                            </div>

                            {/* Event Gallery Section */}
                            {event.gallery_images && event.gallery_images.length > 0 && (
                                <div style={{ marginTop: '50px', marginBottom: '30px' }}>
                                    <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '22px', fontWeight: '600' }}>Event Gallery</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                                        {event.gallery_images.map((imgUrl, index) => {
                                            const resolvedUrl = imgUrl.startsWith('http') ? imgUrl : `${API_BASE_URL}${imgUrl}`;
                                            return (
                                                <div 
                                                    key={index} 
                                                    style={{ 
                                                        borderRadius: '8px', 
                                                        overflow: 'hidden', 
                                                        height: '160px', 
                                                        border: '1px solid rgba(255,255,255,0.1)', 
                                                        cursor: 'pointer', 
                                                        transition: 'transform 0.2s, box-shadow 0.2s' 
                                                    }}
                                                    onClick={() => window.open(resolvedUrl, '_blank')}
                                                    onMouseEnter={(e) => { 
                                                        e.currentTarget.style.transform = 'scale(1.04)';
                                                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
                                                    }}
                                                    onMouseLeave={(e) => { 
                                                        e.currentTarget.style.transform = 'scale(1)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    <img 
                                                        src={resolvedUrl} 
                                                        alt={`Gallery photo ${index + 1}`} 
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div style={{ marginTop: '40px' }}>
                                <Link to="/events" style={{ background: '#d44a00', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
                                    ← Back to Events
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

