'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full h-[80px] bg-white border-b border-slate-200 z-50 flex items-center">
            <div className="container-custom flex justify-between items-center w-full">
                <Link href="/" className="flex items-center gap-2 text-xl font-extrabold text-blue-600">
                    <i className="fa-solid fa-shapes"></i>
                    <span className="text-slate-900">ABI <span className="text-blue-600">Systems</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Home</Link>
                    <Link href="/products" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Products</Link>
                    <Link href="/services" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Services</Link>
                    <Link href="/careers" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Careers</Link>
                    <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium text-sm">About</Link>
                    <Link href="/contact" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Contact</Link>
                </nav>

                <Link href="/contact" className="hidden md:inline-flex btn btn-primary">
                    Request a Demo
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-700 text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-lg md:hidden">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium">Home</Link>
                    <Link href="/products" onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium">Products</Link>
                    <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium">Services</Link>
                    <Link href="/careers" onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium">Careers</Link>
                    <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium">About</Link>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-slate-700 font-medium">Contact</Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
