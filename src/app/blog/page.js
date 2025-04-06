

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";

export default function BlogList() {
  const postsDir = path.join(process.cwd(), "src", "app", "posts");
  const files = fs.readdirSync(postsDir);
  const blogIntro = {
    "Reality-of-Linkedin-in-2025": { 
      title: "Reality-of-Linkedin-in-2025",
      excerpt: "LinkedIn is a social media platform for business professionals, entrepreneurs, job recruiters, and job seekers...",
    },
    "Deep-learning-more-than-just-a-buzzword": {
      title: "Deep-learning-more-than-just-a-buzzword",
      excerpt: "In the world of tech, few terms have stirred up as much excitement—and confusion—as Deep Learning. Its everywhere...",
    },
  };
  
  const posts = files
    .filter(file => file.endsWith(".md"))
    .map(file => {
      const slug = file.replace(".md", "");
      const content = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { data } = matter(content);
      return {
        slug,
        title: data.title || slug.replace(/-/g, " "),
        date: data.date || "No date",
        excerpt: blogIntro?.[slug]?.excerpt || "",
      };
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="px-4 md:px-8 lg:px-16 mt-28">
      <h1 className="text-4xl font-bold mb-12">Blogs</h1>

      {posts.map(post => (
        <div key={post.slug} className="mb-12 border-b border-white/10 pb-8">
          <h2 className="text-2xl font-semibold"> <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">
                {post.title}
              </Link></h2>
          <p className="text-gray-400 flex items-center text-sm mt-1"><MdDateRange className="mr-1"/> {post.date}</p>
          <p className="text-gray-300 mt-2">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-white mt-2 inline-block underline"
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}
