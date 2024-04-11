'use client'
import localFont from "next/font/local";
import React, {useEffect, useRef, useState} from "react";
import '../../assets/styles/animations.css';
import {Sen} from "next/dist/compiled/@next/font/dist/google";
import {bool} from "prop-types";

const openSans = localFont({
    src: './../../assets/fonts/OpenSans-Regular.ttf',
    display: 'swap',
});
const interRegular = localFont({
    src: './../../assets/fonts/Inter-Regular.ttf',
    display: 'swap',
});

interface Props {
    level: number,
    position: Position,
    title: string,
    description: string | React.ReactNode,
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
    const [initialLoad, setInitialLoad] = useState(true);
    const [position, setPosition] = useState<Position>(props.position);

    useEffect(() => {
        function loadCSSFile(filename: string) {
            const file = document.createElement("link");
            file.setAttribute("rel", "stylesheet");
            file.setAttribute("type", "text/css");
            file.setAttribute("href", filename);
            document.head.appendChild(file);
        }

        if (props.background && ('useClass' in props.background) && 'fileName' in props.background) {
            loadCSSFile("/styles/" + props.background.fileName);
        }

        let titleTimeout: NodeJS.Timeout | null = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                const elementTop = entry.target.getBoundingClientRect().top;

                const scrollPosition = window.pageYOffset;
                if (titleTimeout) {
                    return;
                }
                titleTimeout = setTimeout(() => {
                    let position = props.position;
                    if (document.body.offsetWidth < 768) {
                        position = Position.CENTER;
                    }
                    titleTimeout = null;
                    let iconPos = position;
                    switch (iconPos) {
                        case Position.LEFT:
                            iconPos = Position.RIGHT;
                            break;
                        case Position.RIGHT:
                            iconPos = Position.LEFT;
                            break;
                        default:
                            break;
                    }
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('in-view-' + position)) {
                            return;
                        }
                        entry.target.classList.remove('out-of-view');
                        entry.target.classList.add('in-view-' + position);
                        if (descriptionRef.current) {
                            descriptionRef.current.classList.remove('out-of-view')
                            descriptionRef.current.classList.add('in-view-' + position)
                        }
                        if (icon.current) {
                            icon.current.classList.remove('out-of-view');
                            icon.current.classList.add('in-view-' + iconPos);
                        }
                    } else {
                        if (initialLoad) {
                            setInitialLoad(false);
                            return;
                        }
                        if (scrollPosition >= elementTop) {
                            return;
                        }
                        entry.target.classList.remove('in-view-' + position);
                        entry.target.classList.add('out-of-view')
                        if (descriptionRef.current) {
                            descriptionRef.current.classList.remove('in-view-' + position)
                            descriptionRef.current.classList.add('out-of-view')
                        }
                        if (icon.current) {
                            icon.current.classList.remove('in-view-' + iconPos);
                            icon.current.classList.add('out-of-view');
                        }
                    }
                }, initialLoad ? 1 : 100);
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
    }, [initialLoad]);

    let backgroundStyle = {};
    if (!props.background || !('useClass' in props.background)) {
        backgroundStyle = props.background;
    }

    return (
        <>
            <div className={`flex flex-row w-[100%] relative`}
                 style={{
                     zIndex: 1000 - props.level,
                 }}>
                <div
                    className={`flex ${position == Position.CENTER ? 'flex-col justify-center items-center' : 
                        'xl:flex-row xl:justify-normal xl:items-start' +
                        ' flex-col justify-center items-center'}
                         w-[100%] max-w-[100%] md:pt-16 md:pb-12 pt-2 pb-1
             aspect-auto ${(props.background && "className" in props.background) ? props.background.className : ''} ${props.extraClasses ? props.extraClasses : ''}`}
                    style={backgroundStyle}>
                    {position === Position.RIGHT && props.extraComponent ?
                        (<div id={'icon'} ref={icon}
                              className={`flex flex-col xl:ml-36 md:pt-14 md:p-16 pt-5 md-5 h-auto w-auto fly-in-if-in-view order-2`}
                        >
                            {props.extraComponent}
                        </div>) : null}
                    {position === Position.CENTER && props.extraComponent ?
                        (<div id={'icon'} ref={icon}
                              className={`flex flex-col xl:mb-10 mb-3 xl:pt-14 xl:p-16 pt-5 h-auto w-auto fly-in-if-in-view order-2`}
                        >
                            {props.extraComponent}
                        </div>) : null}
                    <div
                        id={'test-id'}
                        className={`flex flex-col ml-auto order-3
    ${position === Position.LEFT ? 'xl:justify-self-start xl:items-start xl:ml-16 max-w-[100%] w-[100%] justify-self-center items-center' : ''}
    ${position === Position.RIGHT ? 'xl:justify-self-end xl:items-end xl:justify-end xl:mr-16 max-w-[100%] w-[100%] md:mt-16 justify-self-center items-center' : ''}
    ${position === Position.CENTER ? 'justify-self-center items-center mx-auto max-w-[100%] w-[100%] md:mt-2 mt-0' : ''}
    text-white mb-24 ${props.extraContentClasses ? props.extraContentClasses : ''}}`}>
                        <div id={position} ref={titleRef}
                             className={`flex flex-col ${position != Position.CENTER ? 'w-[70%] xl:justify-start xl:items-start justify-center items-center' : ' justify-center items-center w-[76%]'} fly-in-if-in-view`}>
                            <h2
                                className={`${openSans.className} md:text-7xl text-3xl subpixel-antialiased`}>{props.title}</h2>
                            <div ref={descriptionRef} className={`text-gray-300 leading-2 xl:leading-[32.5px] sd:mt-6 mt-2 xl:text-[26px] sm:text[38px] lg:text-[18px] text-[12px] w-full select-text subpixel-antialiased fade-in-if-in-view
                            ${position == Position.CENTER ? 'text-center text-balance' : 'sm:text-center lg:text-center md:text-center xl:text-left 2xl:text-left text-balance'}`}>
                                {<SectionBody element={props.description}></SectionBody>}
                            </div>
                        </div>
                    </div>
                    {position === Position.LEFT && props.extraComponent ?
                        (<div id={'icon'} ref={icon} className={
                            `flex flex-col h-auto w-auto xl:self-auto self-center xl:order-9 order-1
                            
                        xl:mr-36 xl:justify-self-start xl:place-self-start place-self-center justify-self-center xl:pt-14 xl:p-16
                          pt-2 p-2 fly-in-if-in-view`}>
                            {props.extraComponent}
                        </div>) : null}
                </div>
            </div>
        </>
    );
}

interface SectionBodyProps {
    element: string | React.ReactNode
}

export function SectionBody({element}: SectionBodyProps) {
    const isText = typeof element === 'string';
    return (
        <>
            {!isText && element || <p>{element}</p>}
        </>)
}

export default HomeSection;