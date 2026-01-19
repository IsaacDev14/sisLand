"use client";

import { useState } from "react";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabSectionProps {
    tabs: Tab[];
    className?: string;
}

export default function TabSection({ tabs, className = "" }: TabSectionProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

    return (
        <div className={className}>
            {/* Tab Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            px-6 py-3 text-sm font-medium rounded-full transition-all duration-300
                            ${activeTab === tab.id
                                ? "bg-pink-500 text-white shadow-lg shadow-pink-500/25"
                                : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]"
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content with Fade Animation */}
            <div className="relative">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`
                            transition-all duration-500 ease-out
                            ${activeTab === tab.id
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                            }
                        `}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}
