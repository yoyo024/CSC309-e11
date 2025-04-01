"use client";

import { useState } from "react";

export default function Flex() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav id="navbar" className="flex justify-between items-center p-4">
                <div className="container mx-auto flex items-center justify-between p-4 bg-gray-800 text-white">
                <div className="text-xl font-bold text-gray-800">MyLogo</div>
                <ul id="nav-links" className="hidden md:flex space-x-6">
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Authors</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Stores</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Books</a></li>
                </ul>

                <button id="hamburger-menu" className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✖" : "☰"}
                </button>
                </div>

                {menuOpen && (
                <ul id="nav-links-sm" className="md:hidden bg-white shadow-md absolute left-0 w-full p-4 space-y-4">
                    <li><a href="#" className="block text-gray-600 hover:text-gray-900">Home</a></li>
                    <li><a href="#" className="block text-gray-600 hover:text-gray-900">Authors</a></li>
                    <li><a href="#" className="block text-gray-600 hover:text-gray-900">Stores</a></li>
                    <li><a href="#" className="block text-gray-600 hover:text-gray-900">Books</a></li>
                </ul>
                )}
            </nav>
            <section id="hero-section" className="relative h-screen flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1699544960693-dae97da4e426?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="text-center px-6">
                <h1 className="hero-title text-4xl md:text-6xl font-bold">Welcome to Our Website</h1>
                <button className="hero-button mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg transition">
                    Get Started
                </button>
                </div>
            </section>
        </div>
    );
}