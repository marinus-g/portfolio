'use client'
import Image from "next/image";
import localFont from "next/font/local";
import WelcomeComponent from "@/app/components/welcome-component";
import {useEffect, useRef, useState} from "react";
import './assets/styles/fly-in-animation.css';

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

    useEffect(() => {
        // Get the viewport height
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        // Get the height of the other elements
        const otherElementsHeight = document.getElementById('other-elements')?.offsetHeight;

        if (otherElementsHeight == null) {
            return;
        }
        // Calculate the remaining height
        const remainingHeight = vh - otherElementsHeight;

        // Apply the remaining height to the element
        if (divRef.current) {
            divRef.current.style.height = `${remainingHeight}px`;
            setLoaded(true)
        }
    }, []);
    return (
        <main className={`flex flex-col relative select-none overflow-x-hidden ${loaded ? 'overflow-y-hidden' : ''}`}>
            <div
                id={'other-elements'}
                className="flex flex-col
                bg-cover bg-right-bottom bg-no-repeat
                2xl:background-4-k
                sm:h-[55vh] xl:h-[40vh] md:h-[50vh] lg:h-[50vh] h-[55vh] 2xl:h-[70vh] w-screen relative"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgMTAwMCAzMDAiIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMwMDY2RkYiPjwvcmVjdD48cGF0aCBkPSJNMCAxNzZMMjAuOCAxODMuMkM0MS43IDE5MC4zIDgzLjMgMjA0LjcgMTI1IDIxMkMxNjYuNyAyMTkuMyAyMDguMyAyMTkuNyAyNTAgMjE2LjVDMjkxLjcgMjEzLjMgMzMzLjMgMjA2LjcgMzc1IDIxNC41QzQxNi43IDIyMi4zIDQ1OC4zIDI0NC43IDUwMCAyNDkuOEM1NDEuNyAyNTUgNTgzLjMgMjQzIDYyNSAyMzEuNUM2NjYuNyAyMjAgNzA4LjMgMjA5IDc1MCAyMDUuMkM3OTEuNyAyMDEuMyA4MzMuMyAyMDQuNyA4NzUgMjAzLjNDOTE2LjcgMjAyIDk1OC4zIDE5NiA5NzkuMiAxOTNMMTAwMCAxOTBMMTAwMCAzMDFMOTc5LjIgMzAxQzk1OC4zIDMwMSA5MTYuNyAzMDEgODc1IDMwMUM4MzMuMyAzMDEgNzkxLjcgMzAxIDc1MCAzMDFDNzA4LjMgMzAxIDY2Ni43IDMwMSA2MjUgMzAxQzU4My4zIDMwMSA1NDEuNyAzMDEgNTAwIDMwMUM0NTguMyAzMDEgNDE2LjcgMzAxIDM3NSAzMDFDMzMzLjMgMzAxIDI5MS43IDMwMSAyNTAgMzAxQzIwOC4zIDMwMSAxNjYuNyAzMDEgMTI1IDMwMUM4My4zIDMwMSA0MS43IDMwMSAyMC44IDMwMUwwIDMwMVoiIGZpbGw9IiMwMDIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjwvc3ZnPg==")'
                }}>
                <div className={'flex flex-col self-center items-center justify-center mt-2'}>
                    {ready && (<>
                        <div className={'brightness-125'}>
                            <Image
                                draggable={false}
                                className={'fly-in rounded-full fade-into-background border-4 border-blue-600 2xl:h-[100px] 2xl:w-[100px] lg:h-[150px] lg:w-[150px] md:h-[125px] md:w-[125px] sm:h-[100px] sm:w-[100px] h-[100px] w-[100px]'}
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
                <div className={'flex flex-col bg-[#002] h-auto w-screen'}>
                    <div className={`flex flex-col items-center justify-center sm:mt-0 mt-5`}>
                        <h2 className={`${fireCodeSemiLight.className} text-4xl text-white fly-in`}>My Vision</h2>
                        <div className={`w-2/5`}>
                            <p className={`${poiretOne.className} text-white text-wrap leading-3 mt-2 fade-in`}>Lorem
                                ipsum
                                dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                clita
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                dolor
                                sit
                                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                                ea
                                rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                                ipsum
                                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et
                                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                dolores
                                et ea
                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                amet.

                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                vel
                                illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                                qui
                                blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                Lorem
                                ipsum
                                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet
                                dolore magna aliquam erat volutpat.

                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                nisl
                                ut
                                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                                vulputate
                                velit
                                esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
                                accumsan et
                                iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                                feugait
                                nulla facilisi.

                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod
                                mazim
                                placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed
                                diam
                                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                enim
                                ad
                                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                                ex ea
                                commodo consequat.

                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                vel
                                illum dolore eu feugiat nulla facilisis.

                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea
                                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                clita
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                dolor
                                sit
                                amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo
                                eirmod
                                eos
                                erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd
                                magna no
                                rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem
                                ipsum
                                dolor sit amet, consetetur</p>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col w-[100vw] h-screen text-white`}
                     style={{

                         background: 'url("data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiMwMDIiPjwvcmVjdD48cGF0aCBkPSJNMCA1MDFMMzg0IDU2Mkw3NjggNTMyTDExNTIgNTIzTDE1MzYgNTc0TDE5MjAgNjA3TDE5MjAgMTA4MUwxNTM2IDEwODFMMTE1MiAxMDgxTDc2OCAxMDgxTDM4NCAxMDgxTDAgMTA4MVoiIGZpbGw9IiMzMjJjMmMiPjwvcGF0aD48cGF0aCBkPSJNMCA2OTFMMzg0IDU3OUw3NjggNjY2TDExNTIgNjkwTDE1MzYgNjg1TDE5MjAgNjEyTDE5MjAgMTA4MUwxNTM2IDEwODFMMTE1MiAxMDgxTDc2OCAxMDgxTDM4NCAxMDgxTDAgMTA4MVoiIGZpbGw9IiM1NzJlMzkiPjwvcGF0aD48cGF0aCBkPSJNMCA3MTZMMzg0IDczNkw3NjggNzE4TDExNTIgNjc3TDE1MzYgNzM0TDE5MjAgNjc2TDE5MjAgMTA4MUwxNTM2IDEwODFMMTE1MiAxMDgxTDc2OCAxMDgxTDM4NCAxMDgxTDAgMTA4MVoiIGZpbGw9IiM3NTJlNTciPjwvcGF0aD48cGF0aCBkPSJNMCA3NzRMMzg0IDc4MEw3NjggODI0TDExNTIgODE0TDE1MzYgODIzTDE5MjAgNzg0TDE5MjAgMTA4MUwxNTM2IDEwODFMMTE1MiAxMDgxTDc2OCAxMDgxTDM4NCAxMDgxTDAgMTA4MVoiIGZpbGw9IiM4NjMzODUiPjwvcGF0aD48cGF0aCBkPSJNMCA4ODBMMzg0IDg3M0w3NjggODU2TDExNTIgODU5TDE1MzYgODYxTDE5MjAgOTA2TDE5MjAgMTA4MUwxNTM2IDEwODFMMTE1MiAxMDgxTDc2OCAxMDgxTDM4NCAxMDgxTDAgMTA4MVoiIGZpbGw9IiM3YzQ3YmYiPjwvcGF0aD48cGF0aCBkPSJNMCA5MzVMMzg0IDk3M0w3NjggOTU0TDExNTIgOTU3TDE1MzYgOTcxTDE5MjAgOTMzTDE5MjAgMTA4MUwxNTM2IDEwODFMMTE1MiAxMDgxTDc2OCAxMDgxTDM4NCAxMDgxTDAgMTA4MVoiIGZpbGw9IiMwMDY2ZmYiPjwvcGF0aD48L3N2Zz4=")',
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',
                         //   backgroundColor: 'black'
                     }}>
                </div>
            </>) || <>
                <div ref={divRef} className={'h-[100vh] flex-grow bg-[#002] text-white'} />
            </>}
        </main>
    );
}