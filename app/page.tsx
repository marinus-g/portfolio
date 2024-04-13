'use client'
import Image from "next/image";
import localFont from "next/font/local";
import WelcomeComponent from "@/app/components/home/welcome-component";
import {useEffect, useRef, useState} from "react";
import './assets/styles/animations.css';
import HomeSection, {Position} from "@/app/components/home/home-section";
import Navbar, {Location} from "@/app/components/navbar";
import HomeSvg from "@/app/components/svg";
import Skills from "@/app/components/home/skill-section";

const poiretOne = localFont({
    src: './assets/fonts/PoiretOne-Regular.ttf',
    display: 'swap',
})
const nerdFont = localFont({
    src: './assets/fonts/nerdfont-codensed.ttf',
    display: 'swap',
});

export default function Home() {

    const [ready, setReady] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const [navbar, setNavbar] = useState(false);
    const background = useRef<HTMLDivElement>(null);
    const [hoveringContactForm, setHoveringContactForm] = useState(false);

    useEffect(() => {
        // Get the viewport height
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        // Get the height of the other elements
        const otherElementsHeight = document.getElementById('other-elements')?.offsetHeight;

        const handleScroll = () => {
            if (background.current == null) {
                return
            }
            const offset = window.pageYOffset;
            background.current.style.backgroundPositionY = offset * 0.5 + 'px';
        };

        window.addEventListener('scroll', handleScroll);

        if (otherElementsHeight == null) {
            return;
        }
        const remainingHeight = vh - otherElementsHeight;
        if (divRef.current) {
            divRef.current.style.height = `${remainingHeight}px`;
            setLoaded(true)
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (ready) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }, [ready]);
    return (
        <>
            <main className={`flex flex-col select-none bg-[#002] m-0 p-0`}>
                {Navbar({
                    location: Location.HOME,
                    showNavbar: navbar
                })}
                <div
                    id={'other-elements'}
                    className={`flex flex-col bg-cover sm:bg-cover bg-right-bottom bg-no-repeat 2xl:background-4-k
                 sm:h-[55vh] xl:h-[40vh] md:h-[50vh] lg:h-[50vh] h-[45vh] 2xl:h-[70vh]
                 w-[100%] overflow-x-hidden
                  `}
                    style={{
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgMTAwMCAzMDAiIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGRkZGRkYiPjwvcmVjdD48cGF0aCBkPSJNMCAxNzZMMjAuOCAxODMuMkM0MS43IDE5MC4zIDgzLjMgMjA0LjcgMTI1IDIxMkMxNjYuNyAyMTkuMyAyMDguMyAyMTkuNyAyNTAgMjE2LjVDMjkxLjcgMjEzLjMgMzMzLjMgMjA2LjcgMzc1IDIxNC41QzQxNi43IDIyMi4zIDQ1OC4zIDI0NC43IDUwMCAyNDkuOEM1NDEuNyAyNTUgNTgzLjMgMjQzIDYyNSAyMzEuNUM2NjYuNyAyMjAgNzA4LjMgMjA5IDc1MCAyMDUuMkM3OTEuNyAyMDEuMyA4MzMuMyAyMDQuNyA4NzUgMjAzLjNDOTE2LjcgMjAyIDk1OC4zIDE5NiA5NzkuMiAxOTNMMTAwMCAxOTBMMTAwMCAzMDFMOTc5LjIgMzAxQzk1OC4zIDMwMSA5MTYuNyAzMDEgODc1IDMwMUM4MzMuMyAzMDEgNzkxLjcgMzAxIDc1MCAzMDFDNzA4LjMgMzAxIDY2Ni43IDMwMSA2MjUgMzAxQzU4My4zIDMwMSA1NDEuNyAzMDEgNTAwIDMwMUM0NTguMyAzMDEgNDE2LjcgMzAxIDM3NSAzMDFDMzMzLjMgMzAxIDI5MS43IDMwMSAyNTAgMzAxQzIwOC4zIDMwMSAxNjYuNyAzMDEgMTI1IDMwMUM4My4zIDMwMSA0MS43IDMwMSAyMC44IDMwMUwwIDMwMVoiIGZpbGw9IiMwMDIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjwvc3ZnPg==")'
                    }}>
                    <div className={`flex flex-col self-center items-center justify-center sm:mt-8 mt-7`}>
                        {ready && (<>
                            <div className={`relative brightness-125 rounded-full
                            2xl:h-[100px] 2xl:w-[100px] lg:h-[100px] lg:w-[100px] md:h-[85px] md:w-[85px]
                            sm:h-[70px] sm:w-[70px] h-[65px] w-[65px] bg-white`}>
                                <a href={'https://github.com/marinus-g'} target={'_blank'}>
                                <Image
                                    draggable={false}
                                    className={`relative fade-in-middle rounded-full fade-into-background border-black
                                    border-2 2xl:h-[100px] 2xl:w-[100px] lg:h-[100px] lg:w-[100px] md:h-[85px] md:w-[85px]
                            sm:h-[70px] sm:w-[70px] h-[65px] w-[65px] hover:scale-110 transition-transform duration-200 cursor-pointer`}
                                    src={'https://avatars.githubusercontent.com/u/148557369?v=4'} alt={'User Image'}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                                    width={1920} height={1080}></Image>
                                </a>
                            </div>
                        </>) || <div
                            className={`brightness-125 2xl:h-[100px] 2xl:w-[100px] lg:h-[100px] lg:w-[100px] md:h-[85px] md:w-[85px]
                            sm:h-[70px] sm:w-[70px] h-[65px] w-[65x] overflow-x-hidden`}></div>}
                        {WelcomeComponent({
                            poiretOne,
                            nerdFont,
                            setReady
                        })}
                    </div>
                </div>
                {ready && (<>
                    <div className={'fade-in-fast'}>
                        <HomeSection
                            level={1}
                            position={Position.LEFT}
                            title={'My Vision'}
                            extraComponent={<HomeSvg svg={'/light-bulb.svg'}/>}
                            extraClasses={`flex-grow`}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
                            background={{
                                backgroundColor: '#002',
                                backgroundRepeat: 'no-repeat',
                            }}/>
                        {/*Spacer('h-12', '#51518C')*/}
                        {/*Spacer('w-screen h-16', '#002')*/}
                        <HomeSection
                            level={2}
                            position={Position.RIGHT}
                            title={'My Experience'}
                            extraComponent={<HomeSvg svg={'/computer.svg'}/>}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
                            background={{
                                backgroundColor: '#51518C', // #B3A04D // #2C2CF2 // #51518C
                                backgroundRepeat: 'no-repeat',
                            }}/>
                        <HomeSection
                            level={3}
                            position={Position.CENTER}
                            title={"My Skills"}
                            extraComponent={<HomeSvg top={'mt-0'} svg={'/skills.svg'}/>}
                            description={(<Skills/>)}
                            background={{
                                useClass: true,
                                fileName: 'home.css',
                                className: 'skills-bg',
                            }}/>

                        <HomeSection level={4} position={Position.CENTER} title={"Projects"} description={
                            <div className={'text-white'}>DAS IST EIN TEXT</div>
                        } background={{
                            useClass: true,
                            fileName: 'home.css',
                            className: 'projects-bg',
                        }
                        }/>
                        <div className={'flex flex-row w-[100%] h-[59vh] relative overflow-hidden'}>
                            <div className={'w-[100%] relative'}>
                                <div className={`w-max h-max `}>
                                    <Image
                                        layout={'fill'}
                                        objectFit={'cover'}
                                        src={'https://media.discordapp.net/attachments/672542743431479306/1228317392615247983/safar-safarov-koOdUvfGr4c-unsplash.jpg?ex=662b9ab7&is=661925b7&hm=daed894c270fab24ac898d647a0ee0c283395d1612a5f96e77d06d88620fc362&=&format=webp'}
                                        alt={'Test'}
                                    className={`${hoveringContactForm ? 'scale-110' : ''} overflow-hidden transition-transform duration-500`}>
                                    </Image>
                                </div>
                                <div className="absolute inset-0 backdrop-blur-sm"></div>
                                <div
                                    className={'absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-50 '}>
                                    <h1 className="text-gray-100 hover:text-white text-4xl text-center mb-3 text-gradient">
                                        Need anything? Contact me!
                                    </h1>
                                </div>
                                <div className={'absolute w-[100%] h-[100%] flex flex-row justify-center'}
                                     >
                                    <div
                                        className={'relative top-1/3 transform w-[80%] h-[40%] bg-gray-700 bg-opacity-55 backdrop-blur-sm rounded-xl shadow shadow-black justify-center items-center p-3'}
                                    >
                                        <div
                                            onMouseEnter={event => setHoveringContactForm(true)}
                                            onMouseLeave={event => setHoveringContactForm(false)}
                                            className={'p-3 flex flex-col items-center h-[100%] text-white'}>
                                            <h1 className={'text-4xl text-fuchsia-50 text-center'}>Contact</h1>
                                            <div className={'flex flex-row justify-center items-center'}>
                                                <div className={'flex flex-col justify-center items-center'}>
                                                    <h2 className={'text-white text-2xl'}>Email</h2>
                                                    <p className={'text-gray-300 text-lg'}></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`absolute bottom-0 w-[100%] h-max left-0 bg-[#FFFFF] bg-opacity-40
                                 backdrop-blur-lg
                                 backdrop-opacity-85
                                 flex flex-row text-gray-500 gap-5 items-center justify-center`}>
                                    <div>
                                        <p>© 2023-2024 marinus.dev</p>
                                    </div>
                                    <div>
                                        <p><a className={`hover:text-white`} href={'/privacy'}>Privacy Policy</a></p>
                                        <p><a className={`hover:text-white`} href={'/tos'}>Terms of Use</a></p>
                                    </div>
                                    <div>
                                        <p><a href={'https://github.com/marinus-g'} target={'_blank'}
                                              className={'hover:brightness-150'}>
                                            <Image width={22} height={22} draggable={false}
                                                   src={'https://assets.stickpng.com/images/5847f98fcef1014c0b5e48c0.png'}
                                                   alt={'Github'} title={'Github'}/>
                                        </a></p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </>) || <>
                    <div ref={divRef} className={'h-[100%] flex-grow bg-red text-white'}/>
                </>}
            </main>
        </>
    );
}