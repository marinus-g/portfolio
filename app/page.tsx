'use client'
import Image from "next/image";
import localFont from "next/font/local";
import WelcomeComponent from "@/app/components/home/welcome-component";
import {useEffect, useRef, useState} from "react";
import './assets/styles/animations.css';
import HomeSection from "@/app/components/home/home-section";
import Spacer from "@/app/components/home/spacer";
import Navbar from "@/app/components/navbar";
import { Position } from './components/home/home-section';// @ts-ignore
import {ReactComponent as Eye} from './assets/svgs/eye.svg';

const poiretOne = localFont({
    src: './assets/fonts/PoiretOne-Regular.ttf',
    display: 'swap',
})
const nerdFont = localFont({
    src: './assets/fonts/nerdfont-codensed.ttf',
    display: 'swap',
});

const fireCodeSemiLight = localFont({
    src: './assets/fonts/FiraCode-Light.ttf',
    display: 'swap',
});

export default function Home() {

    const [ready, setReady] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        // Get the viewport height
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        // Get the height of the other elements
        const otherElementsHeight = document.getElementById('other-elements')?.offsetHeight;

        if (otherElementsHeight == null) {
            return;
        }
        const remainingHeight = vh - otherElementsHeight;
        if (divRef.current) {
            divRef.current.style.height = `${remainingHeight}px`;
            setLoaded(true)
        }
    }, []);
    useEffect(() => {
        if (ready) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }, [ready]);
    return (
        <main className={`flex flex-col relative select-none overflow-x-hidden ${loaded ? 'overflow-y-hidden' : ''}`}>
            {Navbar({
                home: true,
                showNavbar: navbar
            })}
            <div
                id={'other-elements'}
                className="flex flex-col
                bg-cover bg-right-bottom bg-no-repeat
                2xl:background-4-k
                sm:h-[55vh] xl:h-[40vh] md:h-[50vh] lg:h-[50vh] h-[55vh] 2xl:h-[70vh] w-screen relative"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgMTAwMCAzMDAiIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGRkZGRkYiPjwvcmVjdD48cGF0aCBkPSJNMCAxNzZMMjAuOCAxODMuMkM0MS43IDE5MC4zIDgzLjMgMjA0LjcgMTI1IDIxMkMxNjYuNyAyMTkuMyAyMDguMyAyMTkuNyAyNTAgMjE2LjVDMjkxLjcgMjEzLjMgMzMzLjMgMjA2LjcgMzc1IDIxNC41QzQxNi43IDIyMi4zIDQ1OC4zIDI0NC43IDUwMCAyNDkuOEM1NDEuNyAyNTUgNTgzLjMgMjQzIDYyNSAyMzEuNUM2NjYuNyAyMjAgNzA4LjMgMjA5IDc1MCAyMDUuMkM3OTEuNyAyMDEuMyA4MzMuMyAyMDQuNyA4NzUgMjAzLjNDOTE2LjcgMjAyIDk1OC4zIDE5NiA5NzkuMiAxOTNMMTAwMCAxOTBMMTAwMCAzMDFMOTc5LjIgMzAxQzk1OC4zIDMwMSA5MTYuNyAzMDEgODc1IDMwMUM4MzMuMyAzMDEgNzkxLjcgMzAxIDc1MCAzMDFDNzA4LjMgMzAxIDY2Ni43IDMwMSA2MjUgMzAxQzU4My4zIDMwMSA1NDEuNyAzMDEgNTAwIDMwMUM0NTguMyAzMDEgNDE2LjcgMzAxIDM3NSAzMDFDMzMzLjMgMzAxIDI5MS43IDMwMSAyNTAgMzAxQzIwOC4zIDMwMSAxNjYuNyAzMDEgMTI1IDMwMUM4My4zIDMwMSA0MS43IDMwMSAyMC44IDMwMUwwIDMwMVoiIGZpbGw9IiMwMDIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjwvc3ZnPg==")'
                }}>
                <div className={'flex flex-col self-center items-center justify-center mt-8'}>
                    {ready && (<>
                        <div className={'brightness-125'}>
                            <Image
                                draggable={false}
                                className={'fly-in rounded-full fade-into-background border-black border-2 2xl:h-[100px] 2xl:w-[100px] lg:h-[150px] lg:w-[150px] md:h-[125px] md:w-[125px] sm:h-[100px] sm:w-[100px] h-[100px] w-[100px]'}
                                src={'https://avatars.githubusercontent.com/u/148557369?v=4'} alt={'User Image'}
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                                width={1920} height={1080}></Image>
                        </div>
                    </>) || <div
                        className={'brightness-125 2xl:h-[100px] 2xl:w-[100px] lg:h-[150px] lg:w-[150px] md:h-[125px] md:w-[125px] sm:h-[100px] sm:w-[100px] h-[100px] w-[100px]'}></div>}{WelcomeComponent({
                    poiretOne,
                    nerdFont,
                    setReady
                })}
                </div>
            </div>
            {ready && (<>
                <HomeSection
                    position={Position.LEFT}
                    title={'My Vision'}
                             description={'Lorem\n' +
                                 '                                ipsum\n' +
                                 '                                dolor sit amet, consetetur\n' +
                                 '                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n' +
                                 '                                aliquyam\n' +
                                 '                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n' +
                                 '                                clita\n' +
                                 '                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n' +
                                 '                                dolor\n' +
                                 '                                sit\n' +
                                 '                                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n' +
                                 '                                dolore\n' +
                                 '                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n' +
                                 '                                ea\n' +
                                 '                                rebum.\n' +
                                 '                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem\n' +
                                 '                                ipsum\n' +
                                 '                                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n' +
                                 '                                labore et\n' +
                                 '                                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n' +
                                 '                                dolores\n' +
                                 '                                et ea\n' +
                                 '                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n' +
                                 '                                amet.\n' +
                                 '\n' +
                                 '                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,\n' +
                                 '                                vel\n' +
                                 '                                illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim\n' +
                                 '                                qui\n' +
                                 '                                blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n' +
                                 '                                Lorem\n' +
                                 '                                ipsum\n' +
                                 '                                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n' +
                                 '                                laoreet\n' +
                                 '                                dolore magna aliquam erat volutpat.\n' +
                                 '\n' +
                                 '                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis\n' +
                                 '                                nisl\n' +
                                 '                                ut\n' +
                                 '                                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in\n' +
                                 '                                vulputate\n' +
                                 '                                velit\n' +
                                 '                                esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et\n' +
                                 '                                accumsan et\n' +
                                 '                                iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te\n' +
                                 '                                feugait\n' +
                                 '                                nulla facilisi.\n' +
                                 '\n' +
                                 '                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod\n' +
                                 '                                mazim\n' +
                                 '                                placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n' +
                                 '                                sed\n' +
                                 '                                diam\n' +
                                 '                                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi\n' +
                                 '                                enim\n' +
                                 '                                ad\n' +
                                 '                                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip\n' +
                                 '                                ex ea\n' +
                                 '                                commodo consequat.\n' +
                                 '\n' +
                                 '                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,\n' +
                                 '                                vel\n' +
                                 '                                illum dolore eu feugiat nulla facilisis.\n' +
                                 '\n' +
                                 '                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no\n' +
                                 '                                sea\n' +
                                 '                                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n' +
                                 '                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n' +
                                 '                                aliquyam\n' +
                                 '                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n' +
                                 '                                clita\n' +
                                 '                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n' +
                                 '                                dolor\n' +
                                 '                                sit\n' +
                                 '                                amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo\n' +
                                 '                                eirmod\n' +
                                 '                                eos\n' +
                                 '                                erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd\n' +
                                 '                                magna no\n' +
                                 '                                rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem\n' +
                                 '                                ipsum\n' +
                                 '                                dolor sit amet, consetetur!'} background={{
                    backgroundColor: '#002',
                    backgroundRepeat: 'no-repeat',
                }}/>
                {/*Spacer('h-12', '#51518C')*/}
                <div className={'items-center'}></div>
                <HomeSection
                    position={Position.RIGHT}
                    title={'My Skills'}
                    extraClasses={'h-[80vh] items-center'}
                             description={'Lorem\n' +
                                 '                                ipsum\n' +
                                 '                                dolor sit amet, consetetur\n' +
                                 '                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n' +
                                 '                                aliquyam\n' +
                                 '                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n' +
                                 '                                clita\n' +
                                 '                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n' +
                                 '                                dolor\n' +
                                 '                                sit\n' +
                                 '                                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n' +
                                 '                                dolore\n' +
                                 '                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n' +
                                 '                                ea\n' +
                                 '                                rebum.\n' +
                                 '                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem\n' +
                                 '                                ipsum\n' +
                                 '                                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n' +
                                 '                                labore et\n' +
                                 '                                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n' +
                                 '                                dolores\n' +
                                 '                                et ea\n' +
                                 '                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n' +
                                 '                                amet.\n' +
                                 '\n' +
                                 '                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,\n' +
                                 '                                vel\n' +
                                 '                                illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim\n' +
                                 '                                qui\n' +
                                 '                                blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n' +
                                 '                                Lorem\n' +
                                 '                                ipsum\n' +
                                 '                                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n' +
                                 '                                laoreet\n' +
                                 '                                dolore magna aliquam erat volutpat.\n' +
                                 '\n' +
                                 '                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis\n' +
                                 '                                nisl\n' +
                                 '                                ut\n' +
                                 '                                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in\n' +
                                 '                                vulputate\n' +
                                 '                                velit\n' +
                                 '                                esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et\n' +
                                 '                                accumsan et\n' +
                                 '                                iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te\n' +
                                 '                                feugait\n' +
                                 '                                nulla facilisi.\n' +
                                 '\n' +
                                 '                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod\n' +
                                 '                                mazim\n' +
                                 '                                placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n' +
                                 '                                sed\n' +
                                 '                                diam\n' +
                                 '                                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi\n' +
                                 '                                enim\n' +
                                 '                                ad\n' +
                                 '                                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip\n' +
                                 '                                ex ea\n' +
                                 '                                commodo consequat.\n' +
                                 '\n' +
                                 '                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,\n' +
                                 '                                vel\n' +
                                 '                                illum dolore eu feugiat nulla facilisis.\n' +
                                 '\n' +
                                 '                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no\n' +
                                 '                                sea\n' +
                                 '                                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n' +
                                 '                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n' +
                                 '                                aliquyam\n' +
                                 '                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n' +
                                 '                                clita\n' +
                                 '                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n' +
                                 '                                dolor\n' +
                                 '                                sit\n' +
                                 '                                amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo\n' +
                                 '                                eirmod\n' +
                                 '                                eos\n' +
                                 '                                erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd\n' +
                                 '                                magna no\n' +
                                 '                                rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem\n' +
                                 '                                ipsum\n' +
                                 '                                dolor sit amet, consetetur!'} background={{
                    backgroundColor: '#51518C', // #B3A04D // #2C2CF2 // #51518C
                    backgroundRepeat: 'no-repeat',
                }}/>
                {Spacer('h-56', '#002')}
            </>) || <>
                <div ref={divRef} className={'h-[100vh] flex-grow bg-[#002] text-white'}/>
            </>}
        </main>
    );
}