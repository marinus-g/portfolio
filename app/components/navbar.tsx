'use client'

import React, {useEffect, useRef, useState} from "react";
import '../assets/styles/animations.css';


interface NavbarProps {
    home: boolean,
    showNavbar: boolean
}

export default function Navbar(props: NavbarProps) {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        let lastScrollTop = 0;
        const checkScrollTop = () => {
            if (typeof window === 'undefined') {
                return;
            }
            if (!props.showNavbar) {
                return;
            }
            const currentScrollTop = window.pageYOffset;

            if (currentScrollTop > lastScrollTop && currentScrollTop > 400) {
                setShowScrollTop(true);

            } else {
                setShowScrollTop(false);
            }

            lastScrollTop = currentScrollTop;
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => {
            if (typeof window === 'undefined') return;
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, [props.showNavbar]);

    useEffect(() => {
        if (navbarRef.current) {
            if (showScrollTop) {
                navbarRef.current.classList.remove('nav-fade-out');
                navbarRef.current.classList.add('nav-fade-in');
            } else {
                navbarRef.current.classList.remove('nav-fade-in');
                navbarRef.current.classList.add('nav-fade-out');
            }
        }
    }, [navbarRef]);
    return (
        <>
            {props.showNavbar ? (
                showScrollTop ? (<div className={'fixed top-4 right-4 cursor-pointer fade-in'}
                                      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <span className={'text-4xl text-white group-hover:text-5xl'}>↑</span>
                </div>) : (
                    <div
                        ref={navbarRef}
                        className={'fade-in flex flex-row col-span-full w-screen fixed top-0 bg-black text-white'}
                        style={{
                            zIndex: 1000,
                        }}>
                        <nav>
                            <ul className={'flex flex-row justify-end'}>
                                <li className={'mr-2'}>About</li>
                                <li className={'mr-2'}>Projects</li>
                                <li className={'mr-2'}>Contact</li>
                            </ul>
                        </nav>
                    </div>
                )) : null}
        </>
    );
}
