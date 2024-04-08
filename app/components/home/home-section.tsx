'use client'
import localFont from "next/font/local";
import React, {useEffect, useRef} from "react";
import '../../assets/styles/animations.css';

const openSans = localFont({
    src: './../../assets/fonts/OpenSans-Regular.ttf',
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
                        entry.target.classList.add('in-view-' + props.position);
                        if (descriptionRef.current) {
                            descriptionRef.current.classList.add('in-view-' + props.position)
                        }
                        if (icon.current) {
                            icon.current.classList.add('in-view-' + iconPos);
                        }
                    } else {
                        if (scrollPosition >= elementTop) {
                            return;
                        }
                        entry.target.classList.remove('in-view-' + props.position);
                        if (descriptionRef.current) {
                            descriptionRef.current.classList.remove('in-view-' + props.position)
                        }
                        if (icon.current) {
                            icon.current.classList.remove('in-view-' + iconPos);
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

    return (
        <>
            <div className={`flex flex-row w-max ${props.extraClasses ? props.extraClasses : ''}`}>
                <div
                    className={`flex flex-row w-[100vw] pt-16 pb-12
             aspect-auto`}
                    style={props.background}>
                    {props.position === Position.RIGHT && props.extraComponent ?
                        (<div id={'icon'} ref={icon}
                              className={`flex flex-col sm:ml-36 pt-14 fly-in-if-in-view p-16 h-auto w-auto`}
                        >
                            {props.extraComponent}
                        </div>) : null}
                    <div
                        id={'test-id'}
                        className={`flex flex-col ml-auto
    ${props.position === Position.LEFT ? 'sm:justify-self-start sm:items-start sm:ml-16 w-[100vw] mt-16' : ''}
    ${props.position === Position.RIGHT ? 'sm:justify-self-end sm:items-end sm:justify-end sm:mr-16 w-[100vw] mt-16' : ''}
    ${props.position === Position.CENTER ? 'sm:justify-self-center sm:items-center sm:mx-auto' : ''}
    text-white mb-24 ${props.extraContentClasses ? props.extraContentClasses : ''}}`}>
                        <div id={props.position} ref={titleRef}
                             className={`flex flex-col w-[70%] fly-in-if-in-view`}>
                            <h2
                                className={`${openSans.className} text-7xl subpixel-antialiased`}>{props.title}</h2>
                            <p ref={descriptionRef}
                               className={`${interRegular.className} text-gray-300 leading[32.5px] mt-6 fade-in-if-in-view text-[26px] w-full select-text subpixel-antialiased
                           ${props.position === Position.LEFT || props.position == Position.RIGHT ? 'text-left text-balance' : ''}`}>{props.description}</p>
                        </div>
                    </div>
                    {props.position !== Position.RIGHT && props.extraComponent ?
                        (<div id={'icon'} ref={icon} className={
                            `flex flex-col h-auto w-auto
                        sm:mr-36 justify-self-start place-self-start pt-14 fly-in-if-in-view p-16`}>
                            {props.extraComponent}
                        </div>) : null}
                </div>
            </div>
        </>
    );
}

export default HomeSection;