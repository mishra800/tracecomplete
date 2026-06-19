import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { eventAPI } from '../../services/api';
import SEO from '../../components/SEO';
import './CreateEvent.css';

export default function CreateEvent() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryPreviews, setGalleryPreviews] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        event_date: '',
        location: '',
    });

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
        if (galleryImages.length + files.length > 6) {
            alert('You can upload a maximum of 6 gallery images.');
            return;
        }
        setGalleryImages(prev => [...prev, ...files]);
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setGalleryPreviews(prev => [...prev, ...newPreviews]);
    };

    const removeGalleryImage = (idx) => {
        setGalleryImages(prev => prev.filter((_, i) => i !== idx));
        setGalleryPreviews(prev => prev.filter((_, i) => i !== idx));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.title.trim()) {
            alert('Please enter an event title');
            return;
        }

        try {
            setLoading(true);
            const data = new FormData();
            data.append('title', formData.title);
            data.append('description', formData.description);
            data.append('event_date', formData.event_date);
            data.append('location', formData.location);
            if (imageFile) data.append('image', imageFile);

            if (galleryImages.length > 0) {
                galleryImages.forEach(file => {
                    data.append('gallery', file);
                });
            }

            await eventAPI.create(data);
            alert('Event created successfully!');
            navigate('/admin/events');
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Failed to create event. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-event-page">
            <SEO
                title="Create Event | Admin | Trace Network & Engineering"
                description="Create new events, webinars, and workshops for Trace Network & Engineering."
                keywords="create event, add event, event creation, admin panel, trace network"
            />
            {/* Header */}
            <header className="create-event-header">
                <div className="header-content">
                    <div className="header-left">
                        <div className="page-icon">
                            <i className="fas fa-calendar-plus"></i>
                        </div>
                        <div className="page-title-section">
                            <h1 className="page-title">Create New Event</h1>
                            <p className="page-subtitle">Schedule and publish a new event</p>
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
                                <h2>Event Details</h2>
                                <p>Fill in the information below to create your event</p>
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
                                <span className="form-hint">Give your event a clear, descriptive title</span>
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
                                <span className="form-hint">Provide details about the event</span>
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
                                    <span className="form-hint">When will the event take place?</span>
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
                                    <span className="form-hint">Where will it be held?</span>
                                </div>
                            </div>

                             {/* Image Upload */}
                            <div className="form-group">
                                <label htmlFor="image" className="form-label">
                                    <i className="fas fa-image"></i>
                                    Event Main Image
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
                                <span className="form-hint">Upload a main featured image for the event (JPG, PNG, WebP)</span>
                            </div>

                            {/* Gallery Upload */}
                            <div className="form-group">
                                <label htmlFor="gallery" className="form-label">
                                    <i className="fas fa-images"></i>
                                    Gallery Images (Up to 6)
                                </label>
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
                                <span className="form-hint">Upload additional gallery photos for the event (Max 6 total)</span>
                                
                                {galleryPreviews.length > 0 && (
                                    <div className="gallery-previews">
                                        {galleryPreviews.map((preview, index) => (
                                            <div key={index} className="gallery-preview-item">
                                                <img src={preview} alt={`Gallery preview ${index + 1}`} />
                                                <button type="button" className="gallery-preview-item__remove" onClick={() => removeGalleryImage(index)}>✕</button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Image Preview */}
                            {imagePreview && (
                                <div className="image-preview-section">
                                    <label className="form-label">
                                        <i className="fas fa-eye"></i>
                                        Image Preview
                                    </label>
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Event preview" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Form Footer */}
                        <div className="form-footer">
                            <button 
                                type="button" 
                                onClick={() => navigate('/admin/events')}
                                className="btn btn-cancel"
                                disabled={loading}
                            >
                                <i className="fas fa-times"></i>
                                <span>Cancel</span>
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i>
                                        <span>Creating...</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-check"></i>
                                        <span>Create Event</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Info Card */}
                    <div className="info-card">
                        <div className="info-header">
                            <i className="fas fa-info-circle"></i>
                            <h3>Quick Tips</h3>
                        </div>
                        <ul className="info-list">
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Use a clear, descriptive title</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Include event date and location</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Add a high-quality image</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Provide detailed description</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Double-check all information</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}
