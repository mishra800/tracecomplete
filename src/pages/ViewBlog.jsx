import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogAPI } from '../services/api';
import SEO from '../components/SEO';

// Derive base URL for /uploads image paths.
// Production: VITE_API_URL is a full https URL — strip /api suffix.
// Local dev:  VITE_API_URL is /api (Vite proxy) — use '' so /uploads stays relative.
const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

// Resolve the hero image URL from whichever field is available
function getBlogImage(blog) {
    if (blog.image1) {
        return blog.image1.startsWith('http') ? blog.image1 : `${API_BASE_URL}${blog.image1}`;
    }
    if (blog.image1_url) return blog.image1_url;
    if (blog.hero_image_link) return blog.hero_image_link;
    return null;
}

// Strip HTML tags for plain-text meta descriptions
function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

export default function ViewBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await blogAPI.getById(id);
                setBlog(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) return <div style={{ padding: '100px', textAlign: 'center', color: '#fff' }}>Loading blog...</div>;
    if (!blog || blog.message) return <div style={{ padding: '100px', textAlign: 'center', color: '#fff' }}>Blog not found.</div>;

    const heroImage = getBlogImage(blog);
    const plainText = stripHtml(blog.content);

    return (
        <>
            <SEO
                title={`${blog.title} | Trace Network & Engineering Pvt Ltd`}
                description={plainText ? plainText.substring(0, 160).replace(/\s+/g, ' ').trim() : "Read expert insights on cybersecurity, network infrastructure, cloud solutions, and IT services from Trace Network & Engineering Pvt Ltd."}
                keywords="IT blog, cybersecurity article, network security, technology insights, trace network blog"
                ogTitle={blog.title}
                ogDescription={plainText ? plainText.substring(0, 160).replace(/\s+/g, ' ').trim() : "Read expert insights on cybersecurity and IT services from Trace Network & Engineering."}
                ogImage={heroImage || "/assets/images/logoo.png"}
            />
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}></div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>{blog.title}</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
                                <li><span className="icon-right-arrow-1"></span></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                <li><span className="icon-right-arrow-1"></span></li>
                                <li>{blog.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <style>{`
                                .blog-content-body { color: #ffffff; }
                                .blog-content-body b,
                                .blog-content-body strong { font-weight: 700; color: #ffffff; }
                                .blog-content-body i,
                                .blog-content-body em     { font-style: italic; }
                                .blog-content-body u      { text-decoration: underline; }
                                .blog-content-body s      { text-decoration: line-through; }
                                .blog-content-body a      { color: #ff7a30; text-decoration: underline; }
                                .blog-content-body ul     { padding-left: 24px; margin: 10px 0; list-style: disc; color: #ffffff; }
                                .blog-content-body ol     { padding-left: 24px; margin: 10px 0; list-style: decimal; color: #ffffff; }
                                .blog-content-body li     { margin-bottom: 6px; color: #ffffff; }
                                .blog-content-body mark   { background: #fef08a; color: #111; padding: 0 3px; border-radius: 2px; }
                                .blog-content-body p      { margin: 0 0 14px; color: #ffffff; }
                                .blog-content-body hr     { border: none; border-top: 1px solid rgba(255,255,255,0.2); margin: 28px 0; }
                                .blog-content-body h1,
                                .blog-content-body h2,
                                .blog-content-body h3,
                                .blog-content-body h4    { color: #ffffff; }
                            `}</style>

                            {/* Hero Image */}
                            {heroImage && (
                                <img
                                    src={heroImage}
                                    alt={blog.title}
                                    style={{ width: '100%', borderRadius: '12px', marginBottom: '30px', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            )}

                            <h2 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '28px', fontWeight: '700' }}>{blog.title}</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', marginBottom: '28px', fontSize: '14px' }}>
                                Posted on {new Date(blog.created_at).toLocaleDateString()}
                            </p>
                            <div
                                className="blog-content-body"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                                style={{ lineHeight: '1.8', color: '#ffffff' }}
                            />

                            {/* Blog Gallery Section */}
                            {blog.gallery_images && blog.gallery_images.length > 0 && (
                                <div style={{ marginTop: '50px', marginBottom: '30px' }}>
                                    <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '22px', fontWeight: '600' }}>Photo Gallery</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                                        {blog.gallery_images.map((imgUrl, index) => {
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
                                <Link to="/blogs" style={{ background: '#d44a00', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
                                    ← Back to Blogs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

