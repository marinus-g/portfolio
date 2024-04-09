'use client'
import localFont from "next/font/local";
import React, {useEffect, useRef} from "react";
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
    useEffect(() => {
        function loadCSSFile(filename: string) {
            const file = document.createElement("link");
            file.setAttribute("rel", "stylesheet");
            file.setAttribute("type", "text/css");
            file.setAttribute("href", filename);
            document.head.appendChild(file);
            console.log("loaded css file")
        }

        if (props.background && ('useClass' in props.background) && 'fileName' in props.background) {
            loadCSSFile("/styles/" + props.background.fileName);
        }

        let titleTimeout: NodeJS.Timeout;
        const observer = new IntersectionObserver(
            ([entry]) => {
                const elementTop = entry.target.getBoundingClientRect().top;
                if (props.level == 3) {
                    console.log("elementTop", elementTop)
                }
                const scrollPosition = window.pageYOffset;
                titleTimeout = setTimeout(() => {
                    let iconPos = props.position;
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
                        if (entry.target.classList.contains('in-view' + props.position)) {
                            return;
                        }
                        entry.target.classList.remove('out-of-view');
                        entry.target.classList.add('in-view-' + props.position);
                        if (descriptionRef.current) {
                            descriptionRef.current.classList.remove('out-of-view')
                            descriptionRef.current.classList.add('in-view-' + props.position)
                        }
                        if (icon.current) {
                            icon.current.classList.remove('out-of-view');
                            icon.current.classList.add('in-view-' + iconPos);
                        }
                    } else {
                        if (scrollPosition >= elementTop) {
                            return;
                        }
                        entry.target.classList.remove('in-view-' + props.position);
                        entry.target.classList.add('out-of-view')
                        if (descriptionRef.current) {
                            descriptionRef.current.classList.remove('in-view-' + props.position)
                            descriptionRef.current.classList.add('out-of-view')
                        }
                        if (icon.current) {
                            icon.current.classList.remove('in-view-' + iconPos);
                            icon.current.classList.add('out-of-view');
                        }
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

    let backgroundStyle = {};
    if (!props.background || !('useClass' in props.background)) {
        backgroundStyle = props.background;
    }

    return (
        <>
            <div className={`flex flex-row w-max ${props.extraClasses ? props.extraClasses : ''}`}
                 style={{
                     zIndex: 1000 - props.level,
                 }}>
                <div
                    className={`flex ${props.position == Position.CENTER ? 'flex-col justify-center items-center' : 'flex-row'} w-[100vw] pt-16 pb-12
             aspect-auto ${(props.background && "className" in props.background) ? props.background.className : ''}`}
                    style={backgroundStyle}>
                    {props.position === Position.RIGHT && props.extraComponent ?
                        (<div id={'icon'} ref={icon}
                              className={`flex flex-col sm:ml-36 pt-14 p-16 h-auto w-auto fly-in-if-in-view`}
                        >
                            {props.extraComponent}
                        </div>) : null}
                    {props.position === Position.CENTER && props.extraComponent ?
                        (<div id={'icon'} ref={icon}
                              className={`flex flex-col sm:mb-10 pt-14 p-16 h-auto w-auto fly-in-if-in-view`}
                        >
                            {props.extraComponent}
                        </div>) : null}
                    <div
                        id={'test-id'}
                        className={`flex flex-col ml-auto
    ${props.position === Position.LEFT ? 'sm:justify-self-start sm:items-start sm:ml-16 w-[100vw] mt-16' : ''}
    ${props.position === Position.RIGHT ? 'sm:justify-self-end sm:items-end sm:justify-end sm:mr-16 w-[100vw] mt-16' : ''}
    ${props.position === Position.CENTER ? 'sm:justify-self-center sm:items-center sm:mx-auto w-[100vw]' : ''}
    text-white mb-24 ${props.extraContentClasses ? props.extraContentClasses : ''}}`}>
                        <div id={props.position} ref={titleRef}
                             className={`flex flex-col ${props.position != Position.CENTER ? 'w-[70%]' : ' justify-center items-center w-[76%]'} fly-in-if-in-view`}>
                            <h2
                                className={`${openSans.className} text-7xl subpixel-antialiased`}>{props.title}</h2>
                            <div ref={descriptionRef} className={`text-gray-300 leading[32.5px] mt-6 fade-in-if-in-view text-[26px] w-full select-text subpixel-antialiased 
                            ${props.position == Position.CENTER} ? 'text-center text-balance' : 'text-left text-balance'`}>
                                {<SectionBody element={props.description}></SectionBody>}
                            </div>
                        </div>
                    </div>
                    {props.position !== Position.RIGHT && props.position != Position.CENTER && props.extraComponent ?
                        (<div id={'icon'} ref={icon} className={
                            `flex flex-col h-auto w-auto
                        sm:mr-36 justify-self-start place-self-start pt-14 p-16 fly-in-if-in-view`}>
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