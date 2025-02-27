// "use client"

// import Link from "next/link"
// import { useRef } from "react"

// const blogPosts = [
//   {
//     title: "The Future of AI in Healthcare",
//     description: "Exploring how artificial intelligence is revolutionizing the healthcare industry...",
//     date: "2023-06-01",
//     slug: "future-of-ai-in-healthcare",
//   },
//   {
//     title: "Understanding Deep Learning: A Beginner's Guide",
//     description: "A comprehensive introduction to deep learning concepts and applications...",
//     date: "2023-05-15",
//     slug: "understanding-deep-learning",
//   },
//   {
//     title: "Ethics in AI: Navigating the Challenges",
//     description: "Discussing the ethical considerations and challenges in AI development...",
//     date: "2023-04-28",
//     slug: "ethics-in-ai",
//   },
// ]

// export default function Blog() {
//   const blogRef = useRef(null)

//   return (
//     <div>
//       <h1 className="text-4xl epi mt-28 font-bold mb-8 animate-fadeIn">Blog</h1>
//       <div ref={blogRef} className="space-y-8 stagger-animate">
//         {blogPosts.map((post, index) => (
//           <div key={index} className="border-b border-white/10 pb-8">
//             <h2 className="text-2xl font-bold mb-2">
//               <Link href={`/blog/${post.slug}`} className="elegant-hover">
//                 {post.title}
//               </Link>
//             </h2>
//             <p className="text-gray-400 mb-2">{post.date}</p>
//             <p className="text-gray-300">{post.description}</p>
//             <Link href={`/blog/${post.slug}`} className="text-white underline mt-2 inline-block elegant-hover">
//               Read more
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const blogPosts = [
  {
    title: "The Future of AI in Healthcare",
    description: "Exploring how artificial intelligence is revolutionizing the healthcare industry...",
    date: "2023-06-01",
    slug: "future-of-ai-in-healthcare",
  },
  {
    title: "Understanding Deep Learning: A Beginner's Guide",
    description: "A comprehensive introduction to deep learning concepts and applications...",
    date: "2023-05-15",
    slug: "understanding-deep-learning",
  },
  {
    title: "Ethics in AI: Navigating the Challenges",
    description: "Discussing the ethical considerations and challenges in AI development...",
    date: "2023-04-28",
    slug: "ethics-in-ai",
  },
];

export default function Blog() {
  const blogRef = useRef(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Avoids hydration mismatch

  
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold mt-28 mb-8 animate-fadeIn">Blog</h1>
      <div ref={blogRef} className="space-y-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="border-b border-white/10 pb-8">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-400">{post.date}</p>
            <p className="text-gray-300">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="text-white underline mt-2 inline-block hover:text-gray-300 transition-colors">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


