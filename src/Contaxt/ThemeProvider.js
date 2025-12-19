import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import axiosIns, { API_URL } from '../config';
import { decryptData } from '../_services';

export const ThemeProvider = ({ children }) => {
    // Load initial theme from localStorage (default: false = dark)
    const [isLight, setIsLight] = useState(() => {
        const savedTheme = localStorage.getItem("isLight");
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    // Save theme to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("isLight", JSON.stringify(isLight));
    }, [isLight]);

    const changeTheme = () => {
        setIsLight(prev => !prev);
    };

    const [data, setData] = useState()

    const fetchData = async () => {

        try {
            const response = await axiosIns.get(`${API_URL.GetMobileSection}`);
            // Get the encrypted header
            const encrypted = response.headers["x-encrypted"];

            // Fallback if header is missing
            if (!encrypted) {
                console.warn("⚠ No X-Encrypted header, using fallback empty array");
                setData([]);
                return;
            }

            // Attempt to decrypt
            const decrypted = decryptData(encrypted);

            // Validate decrypted data
            if (decrypted && decrypted.isSuccess === 1 && Array.isArray(decrypted.data)) {
                // ✅ Sort by orderNumber (null values go last)
                const sortedData = [...decrypted?.data].sort((a, b) => {
                    const A = a.orderNumber ?? 999999;  // null should go last
                    const B = b.orderNumber ?? 999999;
                    return A - B;
                });

                setData(sortedData);
            } else {
                setData([]);
            }

        } catch (error) {
            setData([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                changeTheme,
                isLight,
                setIsLight,
                data
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
