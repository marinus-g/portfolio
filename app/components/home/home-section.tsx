'use client'
import localFont from "next/font/local";
import {useEffect, useRef, useState} from "react";
import '../../assets/styles/fly-in-animation.css';
import {number} from "prop-types";

const poiretOne = localFont({
    src: './../../assets/fonts/PoiretOne-Regular.ttf',
    display: 'swap',
})

const fireCodeSemiLight = localFont({
    src: './../../assets/fonts/FiraCode-Light.ttf',
    display: 'swap',
});

interface Props {
    title: string,
    description: string,
    background: BackgroundProps
    extraClasses?: string
    extraContentClasses?: string,
}

interface BackgroundProps {

}

function HomeSection(props: Props) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        let titleTimeout: NodeJS.Timeout;
        const observer = new IntersectionObserver(
            ([entry]) => {
                const elementTop = entry.target.getBoundingClientRect().top;

                const scrollPosition = window.pageYOffset;

                if (entry.target.id === 'title') {
                    titleTimeout = setTimeout(() => {
                        if (entry.isIntersecting) {
                            if (entry.target.classList.contains('in-view')) {
                                return;
                            }
                            entry.target.classList.add('in-view');
                            if (descriptionRef.current) descriptionRef.current.classList.add('in-view')
                        } else {
                            if (scrollPosition >= elementTop) {
                                return;
                            }
                            entry.target.classList.remove('in-view');
                            if (descriptionRef.current) descriptionRef.current.classList.remove('in-view')
                        }

                    }, 100);
                }
            },
            {
                root: null,
                rootMargin: `0px`,
               // threshold: [0, 0.25, 0.5, 0.75, 1]
                threshold: 0
                //threshold: 0.1
            }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <>
            <div
                className={`flex flex-col w-[100vw] aspect-auto ${props.extraClasses ? props.extraClasses : ''}`}
                style={props.background}>
                <div
                    className={`flex flex-col items-center justify-center text-white ${props.extraContentClasses ? props.extraContentClasses : ''}`}>
                    <h2 id={'title'} ref={titleRef}
                        className={`${fireCodeSemiLight.className} text-4xl fly-in-if-in-view`}>{props.title}</h2>
                    <div className={`w-2/5`}>
                        <p ref={descriptionRef}
                           className={`${poiretOne.className} text-white text-wrap leading-3 mt-2 fade-in-if-in-view`}>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSection;