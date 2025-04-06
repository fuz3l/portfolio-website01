// import { notFound } from "next/navigation"

// const blogPosts = {
  
//  "linkedin-rant-2025": {
//   title: "LinkedIn in 2025: Everyone's a Founder, No One Replies",
//   content: `LinkedIn is a social media platform for business professionals, entrepreneurs, job recruiters, and job seekers. It became popular among professionals for sharing milestones, progress, work, projects, job openings, and career-related content.

// It was mostly used by job seekers to connect with HRs, founders, and managers, or to get help from industry experts in their field. But now? It’s a circus.

// The platform is filled with content creators dropping daily posts, tech updates, and motivational garbage. And sure, that’s not *bad*—but let’s be real. LinkedIn was meant to help people grow in their careers, not become another entertainment scroll hole like Instagram or Facebook.

// Over the last couple of years, LinkedIn has been flooded with memes about office culture, tech, movies, and whatever else is trending. The quality of content has dropped, and the platform’s professional image is turning into a joke.

// Nobody really helps anymore. If a junior messages a senior for advice or guidance, they’re mostly ignored or left on read. Meanwhile, the feed is packed with success stories that only end up making unemployed folks feel like shit. Everyone’s busy flexing. Nobody’s responding.

// And then there’s the “I am interested” hiring trend—
// People post vague announcements like:
// > “Looking for interns, drop an ‘I am interested’ below.”
// No company name. No job description. No form. Just vibes and empty engagement.

// Let’s talk about the viral content problem:
// A guy puts effort into building something valuable, explains it well, and posts it… almost no one cares.
// A girl posts a half-baked, ChatGPT-generated project with a cute selfie and *bam!*—300 likes, 100 comments, all saying “So inspiring!” or “Amazing work!”
// It's frustrating, but it's real.

// Also, everyone’s suddenly a Founder now.
// Founder of what, though? A side project deployed on Vercel’s free hobby plan? No users, no revenue, no team—but hey, it has a dark mode toggle and a Notion-style landing page. Must be a startup, right?

// It’s not about real value anymore. It’s all about chasing likes, playing the algorithm, and looking successful.

// In the end, LinkedIn feels less like a professional network and more like a fake-ass highlight reel.
// Everyone’s hiring, everyone’s a founder, and yet… no one replies to DMs.

// But hey, if you're not posting carousels, fake job openings, or AI side hustles—are you even “building in public”?

// **LinkedIn 2025: All clout, no connection.**`,
//   date: "2025-04-05",
// },

//   "future-of-ai-in-healthcare": {
//     title: "The Future of AI in Healthcare",
//     content:
//       "Artificial Intelligence is poised to revolutionize the healthcare industry in numerous ways. From improving diagnostic accuracy to personalizing treatment plans, AI has the potential to enhance patient care significantly. Machine learning algorithms can analyze vast amounts of medical data, including patient records, research papers, and clinical trials, to identify patterns and insights that might escape human observation. This can lead to earlier disease detection, more accurate prognoses, and more effective treatments. Additionally, AI-powered robots and virtual assistants can help streamline administrative tasks, allowing healthcare professionals to focus more on patient care. As we move forward, the integration of AI in healthcare will likely lead to more efficient, accessible, and personalized medical services, ultimately improving health outcomes for patients worldwide.",
//     date: "2023-06-01",
//   },
//   "understanding-deep-learning": {
//     title: "Understanding Deep Learning: A Beginner's Guide",
//     content:
//       "Deep Learning, a subset of machine learning, has gained significant attention in recent years due to its remarkable performance in various tasks such as image and speech recognition, natural language processing, and game playing. At its core, deep learning is inspired by the structure and function of the human brain, using artificial neural networks with multiple layers to learn from large amounts of data. These neural networks consist of interconnected nodes (neurons) organized in layers, with each layer learning to recognize increasingly complex features of the input data. The 'deep' in deep learning refers to the multiple hidden layers between the input and output layers. One of the key advantages of deep learning is its ability to automatically learn feature representations from raw data, eliminating the need for manual feature engineering. This makes it particularly powerful for tasks involving unstructured data like images, audio, and text. As you delve deeper into the world of deep learning, you'll encounter various architectures such as Convolutional Neural Networks (CNNs) for image processing, Recurrent Neural Networks (RNNs) for sequential data, and Transformers for natural language processing tasks. Each of these architectures is designed to capture specific patterns and relationships in different types of data. As you progress in your deep learning journey, you'll also learn about important concepts such as backpropagation, activation functions, and optimization algorithms that are crucial for training these complex models. While deep learning has achieved remarkable results, it's important to understand its limitations, such as the need for large amounts of labeled data and the challenge of interpreting the decision-making process of these 'black box' models. Despite these challenges, deep learning continues to push the boundaries of what's possible in artificial intelligence and remains an exciting field for research and innovation.",
//     date: "2023-05-15",
//   },
//   "ethics-in-ai": {
//     title: "Ethics in AI: Navigating the Challenges",
//     content:
//       "As artificial intelligence becomes increasingly integrated into our daily lives, the ethical implications of these technologies have come to the forefront of public discourse. AI systems, while powerful and potentially beneficial, raise numerous ethical concerns that need to be carefully addressed. One primary concern is bias in AI algorithms, which can perpetuate or even exacerbate existing societal inequalities. This bias can stem from skewed training data or reflect the unconscious biases of the developers themselves. Another critical issue is privacy and data protection, as AI systems often require vast amounts of personal data to function effectively. Ensuring the responsible collection, use, and storage of this data is crucial to maintain public trust. Transparency and explainability in AI decision-making processes are also vital, especially in high-stakes areas like healthcare, criminal justice, and finance. The concept of AI accountability raises questions about who is responsible when AI systems make errors or cause harm. Additionally, the potential impact of AI on employment and the economy necessitates careful consideration of how to manage workforce transitions and ensure equitable distribution of AI's benefits. As AI continues to advance, it's crucial that we develop robust ethical frameworks and guidelines to ensure that these technologies are developed and deployed in ways that benefit humanity as a whole, respect individual rights, and uphold our shared values.",
//     date: "2023-04-28",
//   },
// }

// export default function BlogPost({ params }) {
//   const post = blogPosts[params.slug]

//   if (!post) {
//     notFound()
//   }

//   return (
//     <article className="max-w-3xl mt-28 mx-auto animate-fadeIn">
//       <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//       <p className="text-gray-400 mb-8">{post.date}</p>
//       <div className="prose prose-invert max-w-none">
//         <p>{post.content}</p>
//       </div>
//     </article>
//   )
// }

// import fs from "fs"
// import path from "path"
// import matter from "gray-matter"
// import { remark } from "remark"
// import html from "remark-html"
// import { notFound } from "next/navigation"

// export async function generateStaticParams() {
//   const postsDir = path.join(process.cwd(), "blog", "posts")
// const files = fs.readdirSync(postsDir)

//   return files.map((file) => ({
//     slug: file.replace(".md", ""),
//   }))
// }

// export default async function BlogPost({ params }) {
//   const filePath = path.join(process.cwd(), "posts", `${params.slug}.md`)

//   if (!fs.existsSync(filePath)) {
//     notFound()
//   }

//   const fileContent = fs.readFileSync(filePath, "utf8")
//   const { data, content } = matter(fileContent)

//   const processedContent = await remark().use(html).process(content)
//   const contentHtml = processedContent.toString()

//   return (
//     <article className="max-w-3xl mt-28 mx-auto animate-fadeIn">
//       <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
//       <p className="text-gray-400 mb-8">{data.date}</p>
//       <div
//         className="prose prose-invert max-w-none"
//         dangerouslySetInnerHTML={{ __html: contentHtml }}
//       />
//     </article>
//   )
// }

// import fs from "fs";
// import path from "path";
// import { marked } from "marked";
// import { notFound } from "next/navigation";

// export default function BlogPost({ params }) {
//   const filePath = path.join(process.cwd(), "src", "app", "posts", `${params.slug}.md`);

//   if (!fs.existsSync(filePath)) notFound();

//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const htmlContent = marked(fileContent);

//   return (
//     <article className="max-w-3xl mt-28 mx-auto animate-fadeIn">
//       <h1 className="text-4xl font-bold mb-8">{params.slug.replaceAll("-", " ")}</h1>
//       <div
//         className="prose prose-invert max-w-none"
//         dangerouslySetInnerHTML={{ __html: htmlContent }}
//       />
//     </article>
//   );
// }


import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";
import { MdDateRange } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";


export default function BlogPost({ params }) {
  const filePath = path.join(process.cwd(), "src", "app", "posts", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Parse frontmatter + markdown content
  const { data: metadata, content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <article className="max-w-3xl mt-28 mx-auto animate-fadeIn">
      <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
      <div className="flex space-x-4 pt-6  border-white border-t-[1px]">
      <p className="text-sm flex items-center text-gray-400 mb-8"><MdDateRange className="mr-1"/>{metadata.date}</p>
      <p className="text-sm flex items-center text-gray-400 mb-8"><FaPenNib className="mr-1"/> {metadata.author}</p>
      <p className="text-sm flex items-center text-gray-400 mb-8"><FaClock className="mr-1"/>{metadata.time}</p>
      </div>
      <div
  className="prose epi prose-invert prose-lg max-w-none text-[#E5E7EB] leading-relaxed"
  dangerouslySetInnerHTML={{ __html: htmlContent }}
/>

    </article>
  );
}
