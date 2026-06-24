'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Phone number validation: allows optional +, country code, spaces, hyphens, and 10-15 digits
  const validatePhone = (phone: string) => {
    if (!phone) return 'Phone number is required';
    // Remove spaces, hyphens, parentheses to count raw digits
    const cleaned = phone.replace(/[\s\-()]/g, '');
    const cleanDigits = cleaned.replace(/^\+/, '');
    
    if (!/^\+?[0-9\s\-()]+$/.test(phone)) {
      return 'Phone number contains invalid characters';
    }
    if (cleanDigits.length < 10) {
      return 'Phone number is too short (minimum 10 digits)';
    }
    if (cleanDigits.length > 15) {
      return 'Phone number is too long (maximum 15 digits)';
    }
    return '';
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.company.trim()) tempErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    
    const phoneError = validatePhone(formData.phone);
    if (phoneError) tempErrors.phone = phoneError;

    if (!formData.address.trim()) tempErrors.address = 'Address is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear dynamic field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        message: '',
      });
      setErrors({});
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl relative text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-400"></div>
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-100 mb-6 animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-marine mb-3">Thank You!</h3>
        <p className="text-slate-600 max-w-sm mb-8">
          Your message has been sent successfully. Our team will review your requirements and reach out to you within 24 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-brand-marine hover:bg-brand-navy text-white font-bold py-3 px-8 rounded-xl transition-all active:scale-95"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl relative">
      <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-primary to-blue-400"></div>
      <h3 id="send-message-title" className="text-2xl font-bold text-brand-marine mb-2">Send us a message</h3>
      <p className="text-slate-500 mb-8 text-sm">We typically respond within 24 business hours.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-primary focus:ring-primary/10'
              } focus:bg-white focus:outline-none focus:ring-4 transition-all`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                errors.company ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-primary focus:ring-primary/10'
              } focus:bg-white focus:outline-none focus:ring-4 transition-all`}
              placeholder="Lambach Enterprises"
            />
            {errors.company && <p className="text-xs text-red-500 mt-1 font-medium">{errors.company}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-primary focus:ring-primary/10'
              } focus:bg-white focus:outline-none focus:ring-4 transition-all`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-primary focus:ring-primary/10'
              } focus:bg-white focus:outline-none focus:ring-4 transition-all`}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
              errors.address ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-primary focus:ring-primary/10'
            } focus:bg-white focus:outline-none focus:ring-4 transition-all`}
            placeholder="Flat 101, Park Avenue, Hyderabad - 500082"
          />
          {errors.address && <p className="text-xs text-red-500 mt-1 font-medium">{errors.address}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
              errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-primary focus:ring-primary/10'
            } focus:bg-white focus:outline-none focus:ring-4 transition-all resize-none`}
            placeholder="How can we help you?"
          ></textarea>
          {errors.message && <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${
            isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-marine hover:bg-brand-navy'
          } text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-xl mt-2 active:scale-95`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
