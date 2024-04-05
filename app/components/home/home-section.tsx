'use client'
import localFont from "next/font/local";
import {useEffect, useRef, useState} from "react";
import '../../assets/styles/animations.css';
const poiretOne = localFont({
    src: './../../assets/fonts/PoiretOne-Regular.ttf',
    display: 'swap',
})

const nunitoMedium = localFont({
    src: './../../assets/fonts/Nunito-Medium.ttf',
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
    background: BackgroundProps
    extraClasses?: string
    extraContentClasses?: string,
    extraComponent?: React.ReactNode
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
            <div className={`flex flex-row w-100[vw] h-min`}>
                <div
                    className={`flex flex-row w-[100vw] pt-14 pb-14
                 aspect-auto ${props.extraClasses ? props.extraClasses : ''} `}
                    style={props.background}>
                    <div // TODO IF CENTERED??? sm:justify-self-center
                        className={`flex flex-col 
                         ${props.position === Position.LEFT ? 'sm:justify-self-start sm:items-start sm:ml-16' : ''}
                  ${props.position === Position.RIGHT ? 'sm:justify-self-end sm:items-end sm:mr-16 text-left' : ''}
                  ${props.position === Position.CENTER ? 'sm:justify-self-center sm:items-center sm:mx-auto' : ''} 
                         text-white ${props.extraContentClasses ? props.extraContentClasses : ''}`}>
                        <div id={props.position} ref={titleRef}
                             className={`flex flex-col w-2/5 fly-in-if-in-view`}>
                            <h2
                                className={`${nunitoMedium.className} text-6xl place-self-center mt-14`}>{props.title}</h2>
                            <p ref={descriptionRef}
                               className={`${interRegular.className} text-gray-400 leading-5 mt-5 fade-in-if-in-view text-[18px] w-full select-text
                               ${props.position === Position.LEFT || props.position == Position.RIGHT ? 'text-left text-balance' : ''}`}>{props.description}</p>
                        </div>
                    </div>
                    {props.extraComponent ? props.extraComponent : null}
                </div>
            </div>
        </>
    );
}

export default HomeSection;