"use client";

import { useState, useEffect, createContext, useContext } from 'react';
import { account } from './appwrite';

const AuthContext = createContext({
    user: null,
    loading: true,
    login: async () => {},
    logout: async () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const session = await account.get();
            setUser(session);
            console.log('✅ User session found:', session);
        } catch (error) {
            console.warn('⚠️ Session check failed (expected if not logged in):', error.message);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        setLoading(true);
        try {
            console.log('🔐 Attempting login for:', email);
            
            // Delete any existing sessions first
            try {
                await account.deleteSession('current');
                console.log('🗑️ Cleared old session');
            } catch (e) {
                console.log('ℹ️ No previous session to clear');
            }

            // Create new session
            console.log('📝 Creating new session...');
            await account.createEmailPasswordSession(email, password);
            console.log('✅ Session created successfully');
            
            // Small delay to ensure session is established
            await new Promise(resolve => setTimeout(resolve, 500));
            
            console.log('🔍 Fetching user info...');
            await checkUser();
            console.log('✅ Login complete!');
        } catch (error) {
            setLoading(false);
            console.error('❌ Login error:', {
                message: error.message,
                code: error.code,
                fullError: error
            });
            throw error;
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            console.log('🚪 Logging out...');
            await account.deleteSession('current');
            setUser(null);
            console.log('✅ Logout successful');
        } catch (error) {
            console.error('❌ Logout error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
