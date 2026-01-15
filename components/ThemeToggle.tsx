"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 transition-all hover:border-pink-500/50 hover:bg-slate-700/50 hover:text-pink-400 dark:border-slate-600 dark:bg-slate-800/50"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {/* Sun icon */}
            <svg
                className={`h-4 w-4 transition-all ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                    }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ position: theme === "light" ? "absolute" : "relative" }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>

            {/* Moon icon */}
            <svg
                className={`h-4 w-4 transition-all ${theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                    }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ position: theme === "dark" ? "absolute" : "relative" }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        </button>
    );
}
