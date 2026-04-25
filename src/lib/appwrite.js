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

export default client;
