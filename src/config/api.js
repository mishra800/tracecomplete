// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Contact endpoints
  CONTACT_SEND: `${API_BASE_URL}/api/contact/send`,
  CONTACT_CAREER: `${API_BASE_URL}/api/contact/submit`,
  
  // Auth endpoints
  AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
  
  // Blog endpoints
  BLOGS_LIST: `${API_BASE_URL}/api/blogs`,
  BLOGS_CREATE: `${API_BASE_URL}/api/blogs`,
  BLOGS_UPDATE: (id) => `${API_BASE_URL}/api/blogs/${id}`,
  BLOGS_DELETE: (id) => `${API_BASE_URL}/api/blogs/${id}`,
  
  // Event endpoints
  EVENTS_LIST: `${API_BASE_URL}/api/events`,
  EVENTS_CREATE: `${API_BASE_URL}/api/events`,
  EVENTS_UPDATE: (id) => `${API_BASE_URL}/api/events/${id}`,
  EVENTS_DELETE: (id) => `${API_BASE_URL}/api/events/${id}`,
};

export default API_BASE_URL;
