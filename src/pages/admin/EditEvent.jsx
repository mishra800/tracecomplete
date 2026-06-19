import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { eventAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './CreateEvent.css'; // Reuse CreateEvent's styles

// Derive base URL for /uploads image paths.
// Production: VITE_API_URL is a full https URL — strip /api suffix.
// Local dev:  VITE_API_URL is /api (Vite proxy) — use '' so /uploads stays relative.
const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

export default function EditEvent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    
    // Form fields state
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        event_date: '',
        location: '',
    });

    // Image file & preview states
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    
    // Gallery states
    const [existingGallery, setExistingGallery] = useState([]);
    const [newGalleryImages, setNewGalleryImages] = useState([]);
    const [newGalleryPreviews, setNewGalleryPreviews] = useState([]);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                setLoading(true);
                const event = await eventAPI.getById(id);
                setFormData({
                    title: event.title || '',
                    description: event.description || '',
                    event_date: event.event_date ? event.event_date.split('T')[0] : '',
                    location: event.location || '',
                });
                if (event.image) {
                    setImagePreview(event.image.startsWith('http') ? event.image : `${API_BASE_URL}${event.image}`);
                }
                setExistingGallery(event.gallery_images || []);
            } catch (err) {
                console.error('Error fetching event:', err);
                alert('Failed to load event data.');
                navigate('/admin/events');
            } finally {
                setLoading(false);
            }
        };
        fetchEvent();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        if (existingGallery.length + newGalleryImages.length + files.length > 6) {
            alert('You can upload a maximum of 6 gallery images.');
            return;
        }
        setNewGalleryImages(prev => [...prev, ...files]);
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setNewGalleryPreviews(prev => [...prev, ...newPreviews]);
    };

    const removeExistingGalleryImage = (idx) => {
        setExistingGallery(prev => prev.filter((_, i) => i !== idx));
    };

    const removeNewGalleryImage = (idx) => {
        setNewGalleryImages(prev => prev.filter((_, i) => i !== idx));
        setNewGalleryPreviews(prev => prev.filter((_, i) => i !== idx));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.title.trim()) {
            alert('Please enter an event title');
            return;
        }

        try {
            setSubmitting(true);
            const data = new FormData();
            data.append('title', formData.title);
            data.append('description', formData.description);
            data.append('event_date', formData.event_date);
            data.append('location', formData.location);
            if (imageFile) {
                data.append('image', imageFile);
            }
            
            data.append('existing_gallery', JSON.stringify(existingGallery));
            if (newGalleryImages.length > 0) {
                newGalleryImages.forEach(file => {
                    data.append('gallery', file);
                });
            }

            await eventAPI.update(id, data);
            alert('Event updated successfully!');
            navigate('/admin/events');
        } catch (error) {
            console.error('Error updating event:', error);
            alert('Failed to update event. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div style={{ padding: '100px', textAlign: 'center', color: '#fff' }}>Loading event details...</div>;

    return (
        <div className="create-event-page">
            <SEO
                title="Edit Event | Admin | Trace Network & Engineering"
                description="Edit events, webinars, and workshops for Trace Network & Engineering."
                keywords="edit event, modify event, admin panel, trace network"
            />
            {/* Header */}
            <header className="create-event-header">
                <div className="header-content">
                    <div className="header-left">
                        <div className="page-icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="page-title-section">
                            <h1 className="page-title">Edit Event</h1>
                            <p className="page-subtitle">Update your event schedule and gallery details</p>
                        </div>
                    </div>
                    <div className="header-actions">
                        <Link to="/admin/events" className="btn btn-secondary">
                            <i className="fas fa-arrow-left"></i>
                            <span>Back to Events</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="create-event-main">
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="event-form">
                        {/* Form Header */}
                        <div className="form-header">
                            <div className="form-icon">
                                <i className="fas fa-edit"></i>
                            </div>
                            <div>
                                <h2>Modify Event Details</h2>
                                <p>Make changes below to update the event page</p>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="form-body">
                            {/* Title Field */}
                            <div className="form-group">
                                <label htmlFor="title" className="form-label">
                                    <i className="fas fa-heading"></i>
                                    Event Title *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter event title..."
                                    className="form-input"
                                    required
                                />
                            </div>

                            {/* Description Field */}
                            <div className="form-group">
                                <label htmlFor="description" className="form-label">
                                    <i className="fas fa-align-left"></i>
                                    Event Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe your event..."
                                    className="form-textarea"
                                    rows="6"
                                />
                            </div>

                            {/* Date and Location Row */}
                            <div className="form-row">
                                {/* Event Date */}
                                <div className="form-group">
                                    <label htmlFor="event_date" className="form-label">
                                        <i className="fas fa-calendar-day"></i>
                                        Event Date
                                    </label>
                                    <input
                                        type="date"
                                        id="event_date"
                                        name="event_date"
                                        value={formData.event_date}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>

                                {/* Location */}
                                <div className="form-group">
                                    <label htmlFor="location" className="form-label">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Event location..."
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            {/* Main Image Upload */}
                            <div className="form-group">
                                <label htmlFor="image" className="form-label">
                                    <i className="fas fa-image"></i>
                                    Change Main Image
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="form-input"
                                    style={{ padding: '8px 12px', cursor: 'pointer' }}
                                />
                                <span className="form-hint">Select a new image to replace the main banner</span>
                            </div>

                            {/* Main Image Preview */}
                            {imagePreview && (
                                <div className="image-preview-section">
                                    <label className="form-label">
                                        <i className="fas fa-eye"></i>
                                        Main Image Preview
                                    </label>
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Event preview" />
                                    </div>
                                </div>
                            )}

                            {/* Gallery Section */}
                            <div className="form-group">
                                <label htmlFor="gallery" className="form-label">
                                    <i className="fas fa-images"></i>
                                    Gallery Images (Up to 6)
                                </label>

                                {/* Existing Gallery Images */}
                                {existingGallery.length > 0 && (
                                    <div style={{ marginBottom: '16px' }}>
                                        <span className="form-hint" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Current Gallery Images:</span>
                                        <div className="gallery-previews">
                                            {existingGallery.map((imgUrl, index) => (
                                                <div key={`exist-${index}`} className="gallery-preview-item">
                                                    <img src={imgUrl.startsWith('http') ? imgUrl : `${API_BASE_URL}${imgUrl}`} alt={`Gallery ${index + 1}`} />
                                                    <button type="button" className="gallery-preview-item__remove" onClick={() => removeExistingGalleryImage(index)}>✕</button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <input
                                    type="file"
                                    id="gallery"
                                    name="gallery"
                                    accept="image/*"
                                    multiple
                                    onChange={handleGalleryChange}
                                    className="form-input"
                                    style={{ padding: '8px 12px', cursor: 'pointer' }}
                                />
                                <span className="form-hint">Upload new photos to add to the gallery</span>

                                {/* New Gallery Images Previews */}
                                {newGalleryPreviews.length > 0 && (
                                    <div className="gallery-previews" style={{ marginTop: '12px' }}>
                                        {newGalleryPreviews.map((preview, index) => (
                                            <div key={`new-${index}`} className="gallery-preview-item">
                                                <img src={preview} alt={`New gallery preview ${index + 1}`} />
                                                <button type="button" className="gallery-preview-item__remove" onClick={() => removeNewGalleryImage(index)}>✕</button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Form Footer */}
                        <div className="form-footer">
                            <button 
                                type="button" 
                                onClick={() => navigate('/admin/events')}
                                className="btn btn-cancel"
                                disabled={submitting}
                            >
                                <i className="fas fa-times"></i>
                                <span>Cancel</span>
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-submit"
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i>
                                        <span>Saving...</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-check"></i>
                                        <span>Save Changes</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Info Card */}
                    <div className="info-card">
                        <div className="info-header">
                            <i className="fas fa-info-circle"></i>
                            <h3>Editing Tips</h3>
                        </div>
                        <ul className="info-list">
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Re-evaluate and tweak titles for clarity</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Ensure dates match exactly with actual schedules</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Remove outdated images from your gallery to keep it fresh</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Verify spelling in descriptions before updating</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}
