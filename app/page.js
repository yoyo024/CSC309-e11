"use client";

import { useState } from "react";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <header id="header" className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
                <div className="container mx-auto flex items-center justify-between p-4">
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
            </header>

            <main id="main-content" className="flex-grow pt-16">
                <section className="mx-auto p-6">
                <div id="authors" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Author {i + 1}</h3>
                    </div>
                    ))}
                </div>
                </section>

                <section className="container mx-auto p-6 bg-gray-100">
                <div id="stores" className="flex flex-wrap justify-center gap-4">
                    {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-gray-500 text-white p-4 w-60 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Store {i + 1}</h3>
                    </div>
                    ))}
                </div>
                </section>

                <section className="container mx-auto p-6">
                <div id="books" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Book {i + 1}</h3>
                    </div>
                    ))}
                </div>
                </section>
            </main>
            
            <footer id="footer" className="flex flex-col sm:flex-col md:flex-row lg:flex-row bg-gray-900 text-white py-6">
                <div className="container mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center px-4">
                <div className="contact-info mb-4 md:mb-0">
                    <p className="text-white-400">Contact: yoyozhidong.li@mail.utoronto.ca</p>
                </div>

                <div className="social-media-links flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue">Facebook</a>
                    <a href="#" className="text-blue-200 hover:text-blue-200">Twitter</a>
                    <a href="#" className="text-pink-400 hover:text-pink">Instagram</a>
                </div>
                </div>
            </footer>
        </div>
    );
}