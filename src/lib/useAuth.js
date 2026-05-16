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
        } catch (error) {
            console.error('Session check error:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        setLoading(true);
        try {
            // Delete any existing sessions first (helps with mobile cookie issues)
            try {
                await account.deleteSession('current');
            } catch (e) {
                // Session might not exist, that's okay
            }

            // Create new session with mobile-friendly settings
            await account.createEmailPasswordSession(email, password);
            
            // Small delay to ensure session is established
            await new Promise(resolve => setTimeout(resolve, 500));
            
            await checkUser();
        } catch (error) {
            setLoading(false);
            console.error('Login error details:', error);
            throw error;
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await account.deleteSession('current');
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
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
