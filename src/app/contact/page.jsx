"use client";

import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const submitRef = useRef(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Prevents SSR mismatch

  return (
    <div className="max-w-2xl mt-28 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 animate-fadeIn">Contact Me</h1>
      <form ref={formRef} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-black border border-gray-500 focus:border-white outline-none transition-colors rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="w-full p-2 bg-black border border-gray-500 focus:border-white outline-none transition-colors rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message here..."
            className="w-full p-2 bg-black border border-gray-500 focus:border-white outline-none transition-colors rounded-md"
            rows={5}
          ></textarea>
        </div>
        <button
          ref={submitRef}
          type="submit"
          className="w-full bg-white text-black font-bold py-2 px-4 rounded-md transition-transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
