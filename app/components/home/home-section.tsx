'use client'
import localFont from "next/font/local";
import React, {useEffect, useRef, useState} from "react";
import '../../assets/styles/animations.css';

const poiretOne = localFont({
    src: './../../assets/fonts/PoiretOne-Regular.ttf',
    display: 'swap',
})

const openSans = localFont({
    src: './../../assets/fonts/OpenSans-Regular.ttf',
    display: 'swap',
});

const spaceMonoBold = localFont({
    src: './../../assets/fonts/SpaceMono-Bold.ttf',
    display: 'swap',
});

const interRegular = localFont({
    src: './../../assets/fonts/Inter-Regular.ttf',
    display: 'swap',
});

interface Props {
    position: Position,
    title: string,
    description: string,
    background: BackgroundProps,
    extraClasses?: string,
    extraContentClasses?: string,
    extraComponent?: React.ReactNode,
}

export enum Position {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'

}

interface BackgroundProps {

}

function HomeSection(props: Props) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const icon = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        let titleTimeout: NodeJS.Timeout;
        const observer = new IntersectionObserver(
            ([entry]) => {
                const elementTop = entry.target.getBoundingClientRect().top;

                const scrollPosition = window.pageYOffset;

                titleTimeout = setTimeout(() => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('in-view' + props.position)) {
                            return;
                        }
                        entry.target.classList.add('in-view-' + props.position);
                        if (descriptionRef.current) descriptionRef.current.classList.add('in-view-' + props.position)
                    } else {
                        if (scrollPosition >= elementTop) {
                            return;
                        }
                        entry.target.classList.remove('in-view-' + props.position);
                        if (descriptionRef.current) descriptionRef.current.classList.remove('in-view-' + props.position)
                    }
                }, 100);

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
            <div className={`flex flex-row w-max ${props.extraClasses ? props.extraClasses : ''}`}>
                <div
                    className={`flex flex-row w-[100vw] pt-16 pb-12
             aspect-auto`}
                    style={props.background}>
                    {props.position === Position.RIGHT && props.extraComponent ?
                        (<div className={`overflow-auto sm:mr-12 pt-14`} style={{padding: '16px'}}>
                            {props.extraComponent}
                        </div>) : null}
                    <div
                        id={'test-id'}
                        className={`flex flex-col ml-auto
    ${props.position === Position.LEFT ? 'sm:justify-self-start sm:items-start sm:ml-16 w-[70vw]' : ''}
    ${props.position === Position.RIGHT ? 'sm:justify-self-end sm:items-end sm:justify-end sm:mr-16 w-[70vw] ' : ''}
    ${props.position === Position.CENTER ? 'sm:justify-self-center sm:items-center sm:mx-auto' : ''}
    text-white ${props.extraContentClasses ? props.extraContentClasses : ''}} o-r`}>
                        <div id={props.position} ref={titleRef}
                             className={`flex flex-col w-[80%] fly-in-if-in-view`}>
                            <h2
                                className={`${openSans.className} text-7xl subpixel-antialiased`}>{props.title}</h2>
                            <p ref={descriptionRef}
                               className={`${interRegular.className} text-gray-400 leading[32.5px] mt-6 fade-in-if-in-view text-[26px] w-full select-text subpixel-antialiased
                           ${props.position === Position.LEFT || props.position == Position.RIGHT ? 'text-left text-balance' : ''}`}>{props.description}</p>
                        </div>
                    </div>
                    {props.position !== Position.RIGHT && props.extraComponent ?
                        (<div className={
                            `overflow-auto
                        sm:ml-12 justify-self-start place-self-start pt-14`}>
                            {props.extraComponent}
                        </div>) : null}
                </div>
            </div>
        </>
    );
}

export default HomeSection;