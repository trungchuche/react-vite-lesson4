import React, { useState, useEffect } from "react";

export default function Header() {
    const [language, setLanguage] = useState('en');
    const [theme, setTheme] = useState('Dark');

    const title = () => {
        switch (language) {
            case 'en':
                return 'To-Do List Application';
            case 'vi':
                return 'Ứng Dụng Danh Sách Công Việc';
            case 'jp':
                return 'To-Doリストアプリケーション';
            case 'fr':
                return "Application de liste de tâches";
            default:
                return 'To-Do List Application';
        }
    };

    useEffect(() => {
        console.log('Language changed:', language);
        document.title = title();
    }, [language]);

    return (
        <>
            <header
                style={{
                    backgroundColor: theme === 'Dark' ? '#222' : '#ffffff',
                    color: theme === 'Dark' ? '#ffffff' : '#000000',
                    padding: '10px',
                    textAlign: 'center',
                }}
            >
                <h1>{title()}</h1>
            </header>

            {/* Controls placed below the header, centered on the page */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme === 'Dark' ? '#2a2a2a' : '#f8f9fa',
                color: theme === 'Dark' ? '#ffffff' : '#000000',
                padding: '12px 0'
            }}>
                <nav style={{ display: 'flex', gap: 12, alignItems: 'center', width: '100%', maxWidth: 720, justifyContent: 'center' }}>
                    <select
                        name="language"
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        style={{ marginRight: 8 }}
                    >
                        <option value="en">English</option>
                        <option value="vi">Vietnamese</option>
                        <option value="jp">Japanese</option>
                        <option value="fr">French</option>
                    </select>

                    <select
                        name="theme"
                        id="theme"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                    >
                        <option value="Dark">Dark</option>
                        <option value="Light">Light</option>
                    </select>
                </nav>
            </div>
        </>
    );
}