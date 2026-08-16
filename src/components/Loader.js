import Image from 'next/image';

export default function Loader({ text = 'pulling content...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12">
      <Image
        src="/loading.gif"
        alt="Loading..."
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
        unoptimized
      />
      <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400 lowercase">
        {text}
      </p>
    </div>
  );
}
