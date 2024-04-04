'use client'
import React, {useEffect, useState, useRef} from "react";
import '../../globals.css'
import '../../assets/styles/fly-in-animation.css';
import '../../assets/styles/cursor.css'
import {NextFont} from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

interface WelcomeProps {
    nerdFont: NextFont,
    poiretOne: NextFont
    setReady: React.Dispatch<React.SetStateAction<boolean>>
}

const inconsolataSemiExpanded = localFont({
    src: './../../assets/fonts/Inconsolata_Expanded-Bold.ttf',
    display: 'swap',
});

const spaceMonoBold = localFont({
    src: './../../assets/fonts/SpaceMono-Bold.ttf',
    display: 'swap',
});

function WelcomeComponent(welcomeProps: WelcomeProps) {
    const [welcomeText, setWelcomeText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showQuote, setShowQuote] = useState(false);
    useEffect(() => {
        function incrementWelcomeText(wantedText: string) {
            let welcomeTextArray = wantedText.split('');
            let newText = '';
            setIsTyping(true);
            let interval = setInterval(() => {
                newText += welcomeTextArray.shift();
                setWelcomeText(newText);
                if (welcomeTextArray.length === 0) {
                    clearInterval(interval);
                    setIsTyping(false);
                    setShowDescription(true);
                    setTimeout(() => {
                        setShowQuote(true);
                        setTimeout(() => {
                            welcomeProps.setReady(true);
                        }, 250);
                    }, 500);
                    return;
                }
            }, 256);
        }

        incrementWelcomeText('Hi, I am Marinus!')
    }, []);

    return <div className={'flex flex-col items-center justify-center text-center'}>
        <h1 //  bg-gradient-to-r from-red-600 via-yellow-500-800 to-white
            className={`${spaceMonoBold.className} mt-2.5 select-text font-medium sm:text-9xl 2xl:text-7xl text-black inline-block 
            md:text-9xl text-9xl`}>
            {welcomeText}{isTyping && <span className={'cursor text-black'}>|</span>}
        </h1>
        {showDescription && (<>
            <h3
                className={`${welcomeProps.nerdFont.className} select-text font-light text-3xl 2xl:text-4xl text-black mt-3.5 fly-in md:text-2xl text-[18px] leading-4`}>I am
                a
                Software Developer interested in developing software for the general public.
            </h3>
            {showQuote &&
            <p className={'2xl:mt-0 xl:mt-1 lg:mt-0 sm:mt-2 mt-3 fly-in 2xl:text-2xl'}><span
                className={`${welcomeProps.poiretOne.className} text-black fly-in`}> &quot;Quality is more important than quantity. One home run is much better than two doubles.&quot; - Steve Jobs</span>
            </p>}
        </>)}
    </div>
}

export default WelcomeComponent;