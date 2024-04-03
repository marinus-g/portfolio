'use client'
import {useEffect, useState, useRef} from "react";
import '../globals.css'
import '../assets/styles/fly-in-animation.css';
import '../assets/styles/cursor.css'
import {NextFont} from "next/dist/compiled/@next/font";

interface WelcomeProps {
    nerdFont: NextFont,
    poiretOne: NextFont
}

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
                if (welcomeTextArray.length === 0) {
                    clearInterval(interval);
                    setIsTyping(false);
                    setShowDescription(true);
                    setTimeout(() => {
                        setShowQuote(true);
                    }, 500);
                    return;
                }
                newText += welcomeTextArray.shift();
                setWelcomeText(newText);
            }, 50);
        }

        incrementWelcomeText('Hi, I am Marinus!')
    }, []);

    return <div className={'flex flex-col items-center justify-center text-center'}>
        <h1
            className={`font-fira-code mt-2.5 select-text font-medium sm:text-4xl 2xl:text-5xl bg-gradient-to-r from-red-600 via-yellow-500-800 to-white inline-block text-transparent bg-clip-text 
            md:text-5xl text-4xl`}>
            {welcomeText}{isTyping && <span className={'cursor text-white'}>|</span>}
        </h1>
        {showDescription && (<>
            <h3
                className={`${welcomeProps.nerdFont.className} select-text font-light text-3xl 2xl:text-4xl text-white mt-3.5 fly-in md:text-2xl text-[18px] leading-4`}>I am
                a
                Software Developer interested in developing software for the general public.
            </h3>
            {showQuote &&
            <p className={'2xl:mt-0 xl:mt-1 lg:mt-0 sm:mt-2 mt-3 fly-in 2xl:text-2xl'}><span
                className={`${welcomeProps.poiretOne.className} text-white fly-in`}> &quot;Quality is more important than quantity. One home run is much better than two doubles.&quot; - Steve Jobs</span>
            </p>}
        </>)}
    </div>
}

export default WelcomeComponent;