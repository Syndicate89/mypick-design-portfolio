"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Portfolio", path: "/portfolio" },
        { name: "Service", path: "/service" },
        { name: "FAQ", path: "/#faq" },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        setIsMobileMenuOpen(false);
        if (path.startsWith("/#") && pathname === "/") {
            e.preventDefault();
            const id = path.substring(2);
            const el = document.getElementById(id);
            if (el) {
                window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                isScrolled || pathname !== "/"
                    ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-black tracking-tighter text-foreground"
                    onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        if (pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                >
                    mypickdesign.
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            onClick={(e) => handleLinkClick(e, link.path)}
                            className={cn(
                                "transition-colors hover:text-foreground",
                                pathname === link.path ? "text-primary font-bold" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="http://pf.kakao.com/_UiPpn/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-blue-600 transition-colors"
                    >
                        문의하기
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background border-b border-border py-4 px-6 flex flex-col space-y-4 md:hidden shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            onClick={(e) => handleLinkClick(e, link.path)}
                            className={cn(
                                "text-left py-2 font-medium text-lg",
                                pathname === link.path ? "text-primary font-bold" : "text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="http://pf.kakao.com/_UiPpn/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-primary text-primary-foreground text-center py-3 rounded-md font-semibold mt-4"
                    >
                        문의하기
                    </a>
                </div>
            )}
        </nav>
    );
}
