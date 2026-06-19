import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { blogAPI } from '../../services/api';
import SEO from '../../components/SEO';

// Derive base URL for /uploads image paths.
// Production: VITE_API_URL is a full https URL — strip /api suffix.
// Local dev:  VITE_API_URL is /api (Vite proxy) — use '' so /uploads stays relative.
const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

/* ─── Reusable WYSIWYG Editor ─────────────────────────────────────────────── */
function RichEditor({ id, placeholder, minHeight = 140, onChange, initialValue = '' }) {
    const editorRef = useRef(null);
    const initialised = useRef(false);

    // Inject initial HTML once (handles edit mode where content already exists)
    useEffect(() => {
        if (editorRef.current && initialValue && !initialised.current) {
            editorRef.current.innerHTML = initialValue;
            initialised.current = true;
        }
    }, [initialValue]);

    const exec = (cmd, value = null) => {
        editorRef.current?.focus();
        document.execCommand(cmd, false, value);
        onChange(editorRef.current?.innerHTML || '');
    };

    const handleInput = () => {
        onChange(editorRef.current?.innerHTML || '');
    };

    const handleLink = () => {
        const sel = window.getSelection();
        const selectedText = sel?.toString() || '';
        const url = window.prompt('Enter URL:', 'https://');
        if (url) {
            editorRef.current?.focus();
            if (selectedText) {
                document.execCommand('createLink', false, url);
            } else {
                document.execCommand('insertHTML', false,
                    `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
            }
            onChange(editorRef.current?.innerHTML || '');
        }
    };

    const handleHighlight = () => {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
            exec('hiliteColor', '#fef08a');
        } else {
            editorRef.current?.focus();
            document.execCommand('insertHTML', false,
                '<mark style="background:#fef08a;padding:0 2px;border-radius:2px;">highlighted text</mark>');
            onChange(editorRef.current?.innerHTML || '');
        }
    };

    return (
        <div className="rich-editor">
            <div className="rich-toolbar">
                <button type="button" className="rich-btn rich-btn--bold"   title="Bold (Ctrl+B)"      onMouseDown={(e) => { e.preventDefault(); exec('bold'); }}><b>B</b></button>
                <button type="button" className="rich-btn rich-btn--italic" title="Italic (Ctrl+I)"    onMouseDown={(e) => { e.preventDefault(); exec('italic'); }}><i>I</i></button>
                <button type="button" className="rich-btn rich-btn--under"  title="Underline (Ctrl+U)" onMouseDown={(e) => { e.preventDefault(); exec('underline'); }}><u>U</u></button>
                <button type="button" className="rich-btn rich-btn--strike" title="Strikethrough"      onMouseDown={(e) => { e.preventDefault(); exec('strikeThrough'); }}><s>S</s></button>
                <div className="rich-divider" />
                <button type="button" className="rich-btn rich-btn--hl"     title="Highlight"          onMouseDown={(e) => { e.preventDefault(); handleHighlight(); }}>🖊 Highlight</button>
                <button type="button" className="rich-btn"                  title="Insert link"        onMouseDown={(e) => { e.preventDefault(); handleLink(); }}>🔗 Link</button>
                <div className="rich-divider" />
                <button type="button" className="rich-btn"                  title="Bullet list"        onMouseDown={(e) => { e.preventDefault(); exec('insertUnorderedList'); }}>• Bullet</button>
                <button type="button" className="rich-btn"                  title="Numbered list"      onMouseDown={(e) => { e.preventDefault(); exec('insertOrderedList'); }}>1. Number</button>
                <div className="rich-divider" />
                <button type="button" className="rich-btn rich-btn--clear"  title="Clear formatting"   onMouseDown={(e) => { e.preventDefault(); exec('removeFormat'); }}>✕ Clear</button>
            </div>
            <div
                id={id}
                ref={editorRef}
                className="rich-area"
                contentEditable
                suppressContentEditableWarning
                onInput={handleInput}
                style={{ minHeight }}
                data-placeholder={placeholder}
            />
        </div>
    );
}

/* ─── EditBlog Page ───────────────────────────────────────────────────────── */
export default function EditBlog() {
    const { id } = useParams();
    const [loading, setLoading]           = useState(true);
    const [title, setTitle]               = useState('');
    const [author, setAuthor]             = useState('');
    const [mainContent, setMainContent]   = useState('');
    const [sectionContent, setSectionContent] = useState('');
    const [bottomContent, setBottomContent]   = useState('');
    const [heroImage, setHeroImage]       = useState(null);
    const [heroImageUrl, setHeroImageUrl] = useState('');
    const [heroImageLink, setHeroImageLink] = useState('');
    const [existingGallery, setExistingGallery] = useState([]);
    const [newGalleryImages, setNewGalleryImages] = useState([]);
    const [newGalleryPreviews, setNewGalleryPreviews] = useState([]);
    const [submitting, setSubmitting]     = useState(false);
    const navigate = useNavigate();

    useEffect(() => { fetchBlog(); }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchBlog = async () => {
        try {
            setLoading(true);
            const blog = await blogAPI.getById(id);
            setTitle(blog.title || '');
            setAuthor(blog.author || '');
            setMainContent(blog.content || '');
            setHeroImageUrl(blog.image1 || '');
            setHeroImageLink(blog.hero_image_link || '');
            setExistingGallery(blog.gallery_images || []);
        } catch (error) {
            console.error('Error fetching blog:', error);
            alert('Failed to load blog');
            navigate('/admin/blogs');
        } finally {
            setLoading(false);
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
        const plainMain = mainContent.replace(/<[^>]*>/g, '').trim();
        if (!title.trim() || !plainMain) {
            alert('Title and Main Content are required.');
            return;
        }

        setSubmitting(true);
        try {
            const combinedContent = [mainContent, sectionContent, bottomContent]
                .map(s => s.trim())
                .filter(Boolean)
                .join('<hr/>');

            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', combinedContent);
            if (author) formData.append('author', author);
            if (heroImage) {
                formData.append('image1', heroImage);
            } else if (heroImageUrl) {
                formData.append('image1_url', heroImageUrl);
            }
            if (heroImageLink) formData.append('hero_image_link', heroImageLink);

            formData.append('existing_gallery', JSON.stringify(existingGallery));
            if (newGalleryImages.length > 0) {
                newGalleryImages.forEach(file => {
                    formData.append('gallery', file);
                });
            }

            await blogAPI.update(id, formData);
            navigate('/admin/blogs');
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('Failed to update blog. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: 'system-ui' }}>
                <p>Loading blog...</p>
            </div>
        );
    }

    return (
        <>
            <SEO
                title="Edit Blog | Admin Dashboard | Trace Network"
                description="Edit existing blog posts and articles on Trace Network & Engineering website."
                keywords="edit blog, modify article, blog editing, trace network blog admin"
                robots="noindex, nofollow"
            />
            <style>{STYLES}</style>

            <div className="blog-page">
                <div className="blog-card">
                    <h1 className="blog-card__title">Update Blog Post</h1>

                    <form onSubmit={handleSubmit} className="blog-form">

                        <div className="blog-form__group">
                            <label className="blog-form__label" htmlFor="title">Blog Title *</label>
                            <input type="text" id="title" className="blog-form__input"
                                placeholder="Enter your blog title"
                                value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>

                        <div className="blog-form__group">
                            <label className="blog-form__label" htmlFor="author">Author Name</label>
                            <input type="text" id="author" className="blog-form__input"
                                placeholder="Enter author name"
                                value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </div>

                        <div className="blog-form__group">
                            <label className="blog-form__label">Hero Image</label>
                            <input type="file" className="blog-form__file" accept="image/*"
                                onChange={(e) => setHeroImage(e.target.files[0])} />
                            <p className="blog-form__hint">Or paste an image URL / path</p>
                            <input type="text" className="blog-form__input"
                                placeholder="https://example.com/image.jpg"
                                value={heroImageUrl} onChange={(e) => setHeroImageUrl(e.target.value)} />
                            <p className="blog-form__hint">Optional link when user clicks on hero image</p>
                            <input type="url" className="blog-form__input"
                                placeholder="https://example.com"
                                value={heroImageLink} onChange={(e) => setHeroImageLink(e.target.value)} />
                        </div>

                        {/* Gallery Images */}
                        <div className="blog-form__group">
                            <label className="blog-form__label">Gallery Images (Up to 6)</label>
                            
                            {/* Existing Gallery Images */}
                            {existingGallery.length > 0 && (
                                <div style={{ marginBottom: '14px' }}>
                                    <span className="blog-form__hint" style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Current Gallery Photos:</span>
                                    <div className="gallery-previews">
                                        {existingGallery.map((imgUrl, index) => (
                                            <div key={`exist-${index}`} className="gallery-preview-item">
                                                <img src={imgUrl.startsWith('http') ? imgUrl : `${API_BASE_URL}${imgUrl}`} alt={`Existing gallery ${index + 1}`} />
                                                <button type="button" className="gallery-preview-item__remove" onClick={() => removeExistingGalleryImage(index)}>✕</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <input type="file" className="blog-form__file" accept="image/*" multiple
                                onChange={handleGalleryChange} />
                            <span className="blog-form__hint">Upload additional photos to add to the gallery (Max 6 total)</span>
                            
                            {/* New Gallery Previews */}
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

                        <div className="blog-form__group">
                            <label className="blog-form__label">Main Content *</label>
                            <RichEditor
                                id="main_content"
                                placeholder="Write the main body of your blog here..."
                                minHeight={180}
                                onChange={setMainContent}
                                initialValue={mainContent}
                            />
                        </div>

                        <div className="blog-form__group">
                            <label className="blog-form__label">Sub-section Content</label>
                            <RichEditor
                                id="section1_content"
                                placeholder="Use this for a sub-section, key points, or case study."
                                minHeight={140}
                                onChange={setSectionContent}
                                initialValue={sectionContent}
                            />
                        </div>

                        <div className="blog-form__group">
                            <label className="blog-form__label">Bottom Section Content</label>
                            <RichEditor
                                id="bottom_content"
                                placeholder="Perfect for conclusion, CTA, or summary."
                                minHeight={120}
                                onChange={setBottomContent}
                                initialValue={bottomContent}
                            />
                        </div>

                        <div className="blog-form__actions">
                            <Link to="/admin/blogs" className="blog-btn blog-btn-secondary">Cancel</Link>
                            <button type="submit" className="blog-btn" disabled={submitting}>
                                {submitting ? 'Updating...' : 'Update Blog'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

/* ─── Styles ──────────────────────────────────────────────────────────────── */
const STYLES = `
*, *::before, *::after { box-sizing: border-box; }

.blog-page {
    max-width: 960px;
    margin: 32px auto;
    padding: 0 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: #f1f5f9;
    min-height: 100vh;
}

.blog-card {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 18px 40px rgba(15,23,42,.08);
    padding: 32px 28px 28px;
}

.blog-card__title {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    margin: 0 0 24px;
}

.blog-form { display: flex; flex-direction: column; gap: 20px; }
.blog-form__group { display: flex; flex-direction: column; gap: 8px; }
.blog-form__label { font-size: 14px; font-weight: 600; color: #111827; }

.blog-form__input {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    padding: 10px 12px;
    font-size: 14px;
    outline: none;
    background: #f9fafb;
    transition: border-color .18s, box-shadow .18s, background .18s;
}
.blog-form__input:focus {
    border-color: #d44a00;
    box-shadow: 0 0 0 1px rgba(212,74,0,.15);
    background: #fff;
}

.blog-form__file {
    display: block;
    width: 100%;
    border-radius: 10px;
    border: 1px dashed #cbd5e1;
    padding: 10px 12px;
    font-size: 14px;
    background: #f9fafb;
}

.blog-form__hint { font-size: 12px; color: #6b7280; margin: 0; }

.rich-editor {
    border: 1px solid #d1d5db;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    transition: border-color .18s, box-shadow .18s;
}
.rich-editor:focus-within {
    border-color: #d44a00;
    box-shadow: 0 0 0 1px rgba(212,74,0,.15);
}

.rich-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    padding: 8px 10px;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.rich-btn {
    border: 1px solid #e5e7eb;
    background: #fff;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
    line-height: 1.4;
    transition: background .15s, border-color .15s;
    white-space: nowrap;
}
.rich-btn:hover { background: #f3f4f6; border-color: #d1d5db; }
.rich-btn:active { background: #e5e7eb; }

.rich-btn--bold   { font-weight: 700; min-width: 30px; text-align: center; }
.rich-btn--italic { font-style: italic; min-width: 30px; text-align: center; }
.rich-btn--under  { text-decoration: underline; min-width: 30px; text-align: center; }
.rich-btn--strike { text-decoration: line-through; min-width: 30px; text-align: center; }
.rich-btn--hl     { background: #fef9c3; border-color: #fde047; }
.rich-btn--hl:hover { background: #fef08a; }
.rich-btn--clear  { color: #6b7280; font-size: 12px; }

.rich-divider { width: 1px; height: 20px; background: #e5e7eb; margin: 0 2px; }

.rich-area {
    padding: 12px 14px;
    font-size: 14px;
    line-height: 1.75;
    color: #111827;
    outline: none;
    font-family: inherit;
    overflow-y: auto;
}

.rich-area:empty::before {
    content: attr(data-placeholder);
    color: #9ca3af;
    pointer-events: none;
}

.rich-area b, .rich-area strong { font-weight: 700; }
.rich-area i, .rich-area em     { font-style: italic; }
.rich-area u                    { text-decoration: underline; }
.rich-area s                    { text-decoration: line-through; }
.rich-area a                    { color: #d44a00; text-decoration: underline; }
.rich-area ul                   { padding-left: 22px; margin: 6px 0; list-style: disc; }
.rich-area ol                   { padding-left: 22px; margin: 6px 0; list-style: decimal; }
.rich-area li                   { margin-bottom: 3px; }
.rich-area mark                 { background: #fef08a; padding: 0 2px; border-radius: 2px; }

.blog-form__actions {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 8px;
}

.blog-btn {
    min-width: 180px;
    padding: 10px 24px;
    border-radius: 999px;
    border: none;
    background: #d44a00;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    transition: background .3s;
}
.blog-btn:hover:not(:disabled) { background: #b73e00; }
.blog-btn:disabled { background: #999; cursor: not-allowed; }
.blog-btn-secondary { background: #6b7280; }
.blog-btn-secondary:hover:not(:disabled) { background: #4b5563; }

@media (max-width: 992px) {
    .blog-page { margin: 24px auto; }
    .blog-card { padding: 24px 20px 22px; border-radius: 16px; }
    .blog-card__title { font-size: 24px; }
}
@media (max-width: 600px) {
    .blog-page { margin: 16px auto; padding: 0 10px; }
    .blog-card { padding: 18px 14px; border-radius: 14px; }
    .blog-card__title { font-size: 20px; margin-bottom: 18px; }
    .blog-form__input, .blog-form__file { font-size: 13px; padding: 8px 10px; }
    .rich-btn { padding: 3px 8px; font-size: 11px; }
    .blog-btn { width: 100%; min-width: 0; }
    .blog-form__actions { flex-direction: column; }
}
.gallery-previews {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 10px;
}
.gallery-preview-item {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #cbd5e1;
}
.gallery-preview-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.gallery-preview-item__remove {
    position: absolute;
    top: 4px;
    right: 4px;
    background: rgba(239, 68, 68, 0.9);
    color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 11px;
    line-height: 1;
    padding: 0;
}
`;
