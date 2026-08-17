import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Appwrite configuration constants
export const appwriteConfig = {
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '',
    collections: {
        lifeUpdates: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_LIFE_UPDATES || '',
        blogs: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BLOGS || '',
        projects: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROJECTS || '',
        photography: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PHOTOGRAPHY || '',
    },
    buckets: {
        images: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_IMAGES || '',
    }
};

/**
 * Transforms an Appwrite file URL (view or preview) into an optimized image URL
 * with webp output format, target width/quality, and client-side webp fallback.
 */
export function getOptimizedImageUrl(url, { width = 1000, quality = 80 } = {}) {
    if (!url) return '';
    try {
        const urlObj = new URL(url);
        // Appwrite preview endpoint format check
        if (urlObj.pathname.includes('/files/')) {
            urlObj.pathname = urlObj.pathname.replace('/view', '/preview');
            urlObj.searchParams.set('width', width.toString());
            urlObj.searchParams.set('quality', quality.toString());
            return urlObj.toString();
        }
    } catch (e) {
        // Return original if parsing fails
    }
    return url;
}

export default client;
