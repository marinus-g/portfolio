'use client'

import {useEffect, useState} from "react";

export default function Navbar(home: boolean) {
    const [showScrollTop, setShowScrollTop] = useState(false);

    let lastScrollTop = 0;
    const checkScrollTop = () => {
        const currentScrollTop = window.pageYOffset;

        if (currentScrollTop > lastScrollTop && currentScrollTop > 400) {
            // User is scrolling down and has scrolled more than 400px from the top
            setShowScrollTop(true);
        } else {
            // User is scrolling up
            setShowScrollTop(false);
        }

        lastScrollTop = currentScrollTop;
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, []);
    return (
        <>
            {showScrollTop ? (<div className={'fixed top-4 right-4 cursor-pointer '}
                                   onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <span className={'text-4xl text-white group-hover:text-5xl'}>↑</span>
            </div>) : (<div className={'flex flex-row col-span-full w-screen fixed top-0 bg-black text-white'}
                            style={{
                                zIndex: 1000,
                            }}>
                    <nav>
                        <ul className={'flex flex-row'}>
                            <li className={'mr-2'}>About</li>
                            <li className={'mr-2'}>Projects</li>
                            <li className={'mr-2'}>Contact</li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}
