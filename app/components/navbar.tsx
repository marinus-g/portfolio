'use client'

import {useEffect, useState} from "react";
import './../assets/styles/animations.css';

export enum Location {
    HOME = 'Home',
    PROJECTS = 'Projects',
}

interface Props {
    location: Location,
    showNavbar: boolean
}

export default function Navbar({location, showNavbar}: Props) {
    const [showScrollTop, setShowScrollTop] = useState(false);

    let lastScrollTop = 0;
    const checkScrollTop = () => {
        const currentScrollTop = window.pageYOffset;

        if (currentScrollTop > lastScrollTop && currentScrollTop > 400) {
            setShowScrollTop(true);
        } else {
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
            {showNavbar ? (
                showScrollTop ? (<div className={'fixed top-4 right-4 cursor-pointer fade-in-fast'}
                                      style={{
                                          zIndex: 9999,
                                      }}
                                      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <span className={'text-4xl text-white group-hover:text-5xl'}>↑</span>
                </div>) : (<div className={'flex flex-row w-[100%] fixed top-0 bg-[#002]' +
                        ' fade-in-fast justify-center items-center align-middle place-items-center'}
                                style={{
                                    zIndex: 9999,
                                }}>
                        <nav className={'content-center'}>
                            <ul className={'flex flex-row gap-3'}>
                                {Object.values(Location).map(value => {
                                    return (
                                        <li key={value}>
                                            <a className={`${location == value ? 'text-white'
                                                : 'text-gray-400 hover:text-gray-200 cursor-pointer'}`}>{value}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                )
            ) : null}
        </>
    );
}
