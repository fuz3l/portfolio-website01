
"use client";

import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const submitRef = useRef(null);
  const [hydrated, setHydrated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // Track submission status

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Prevents SSR mismatch

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch('https://getform.io/f/agdpdrmb', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        formRef.current.reset(); // Reset the form after successful submission
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mt-28 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 animate-fadeIn">Contact Me</h1>
      
      {submitStatus === 'success' && (
        <p className="text-green-500 text-center mb-4">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 text-center mb-4">Something went wrong. Please try again.</p>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-300">
            Name
          </label>
          <input
            id="name"
            name="name" // Added name attribute
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-black border border-gray-500 focus:border-white outline-none transition-colors rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email" // Added name attribute
            type="email"
            placeholder="your@email.com"
            className="w-full p-2 bg-black border border-gray-500 focus:border-white outline-none transition-colors rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message" // Added name attribute
            placeholder="Your message here..."
            className="w-full p-2 bg-black border border-gray-500 focus:border-white outline-none transition-colors rounded-md"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          ref={submitRef}
          type="submit"
          className="w-full bg-white text-black font-bold py-2 px-4 rounded-md transition-transform hover:scale-105"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
