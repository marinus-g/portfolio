'use client'

import React, {useCallback, useEffect, useRef, useState} from "react";
import '../assets/styles/animations.css';


interface NavbarProps {
    home: boolean,
    showNavbar: boolean
}

export default function Navbar(props: NavbarProps) {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    const lastScrollTop = useRef(0); // Use useRef to store the value of lastScrollTop
    const checkScrollTop = useCallback(() => {

        console.log('checkScrollTop')
        if (typeof window === 'undefined') {
            return;
        }
        const currentScrollTop = window.pageYOffset;

        console.log(currentScrollTop, lastScrollTop.current, showScrollTop)
        if (currentScrollTop > lastScrollTop.current && currentScrollTop > 400) {
            setShowScrollTop(true);
        } else {
            setShowScrollTop(false);
        }
        lastScrollTop.current = currentScrollTop;
    }, []
)

    useEffect(() => {
        if (!props.showNavbar) {
            return;
        }
        const handleScroll = () => {
            console.log('scroll event triggered');
            checkScrollTop();
        };
        window.addEventListener('scroll', handleScroll);
        console.log('added event listener')
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('removed event listener')
        };
    }, [props.showNavbar]);

    useEffect(() => {
        if (navbarRef.current) {
            if (showScrollTop) {
                navbarRef.current.classList.remove('nav-fade-out');
                navbarRef.current.classList.add('nav-fade-in-fast');
            } else {
                navbarRef.current.classList.remove('nav-fade-in-fast');
                navbarRef.current.classList.add('nav-fade-out');
            }
        }
    }, [showScrollTop]);
    return (
        <>
            {props.showNavbar ? (
                showScrollTop ? (<div className={'top-4 right-4 cursor-pointer fade-in-fast w-[100%] fixed'}
                                      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <span className={'text-4xl text-white group-hover:text-5xl'}>↑</span>
                </div>) : (
                    <div
                        ref={navbarRef}
                        className={'fade-in-fast flex flex-row col-span-full w-[100%] max-w-[100%] fixed top-0 bg-[#002] text-gray-400'}
                        style={{
                            zIndex: 9999,
                        }}>
                        <nav>
                            <ul className={'flex flex-row justify-end'}>
                                <li className={'mr-2 hover:text-white cursor-pointer'}>About</li>
                                <li className={'mr-2 hover:text-white cursor-pointer'}>Projects</li>
                                <li className={'mr-2 hover:text-white cursor-pointer'}>Contact</li>
                            </ul>
                        </nav>
                    </div>
                )) : null}
        </>
    );
}