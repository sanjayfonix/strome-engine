"use client";

import { useState } from "react";
import Link from "next/link";

const ROLES = ["Attorney", "Case Manager", "Admin"];

export default function SignupPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};
        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.password) newErrors.password = "Password is required";
        if (!form.role) newErrors.role = "Please select a role";
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // TODO: backend integration
        console.log("Signup submitted:", form);
    };

    return (
        <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 p-8 sm:p-10 animate-scaleIn hover-lift">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4 shadow-lg animate-float">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Create an account</h1>
                        <p className="text-text-muted mt-2 text-base">Get started with Storm Engine today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="group">
                            <label htmlFor="name" className="block text-sm font-semibold text-text-label mb-2 group-focus-within:text-primary transition-colors">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 ${errors.name ? "border-red-400" : "border-gray-200"} bg-white text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300 hover:border-gray-300`}
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-xs mt-2 animate-slideIn">{errors.name}</p>}
                        </div>

                        <div className="group">
                            <label htmlFor="email" className="block text-sm font-semibold text-text-label mb-2 group-focus-within:text-primary transition-colors">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 ${errors.email ? "border-red-400" : "border-gray-200"} bg-white text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300 hover:border-gray-300`}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-2 animate-slideIn">{errors.email}</p>}
                        </div>

                        <div className="group">
                            <label htmlFor="password" className="block text-sm font-semibold text-text-label mb-2 group-focus-within:text-primary transition-colors">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 ${errors.password ? "border-red-400" : "border-gray-200"} bg-white text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300 hover:border-gray-300`}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-2 animate-slideIn">{errors.password}</p>}
                        </div>

                        <div className="group">
                            <label htmlFor="role" className="block text-sm font-semibold text-text-label mb-2 group-focus-within:text-primary transition-colors">
                                Role
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <select
                                    id="role"
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 ${errors.role ? "border-red-400" : "border-gray-200"} bg-white text-foreground focus:outline-none focus:border-primary transition-all duration-300 hover:border-gray-300 appearance-none cursor-pointer`}
                                >
                                    <option value="">Select your role</option>
                                    {ROLES.map((r) => (
                                        <option key={r} value={r}>
                                            {r}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {errors.role && <p className="text-red-500 text-xs mt-2 animate-slideIn">{errors.role}</p>}
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full py-4 px-4 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] mt-6"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center justify-center gap-2">
                                Create Account
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-text-muted">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary font-bold hover:text-purple-600 transition-colors duration-300 hover:underline">
                                Sign In →
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
