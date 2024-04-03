import Image from "next/image";
import localFont from "next/font/local";
import WelcomeComponent from "@/app/components/welcome-component";
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
    return (
        <main className="flex flex-col min-h-screen w-full relative select-none">
            <div
                className="flex flex-col
                bg-cover bg-right-bottom bg-no-repeat
                2xl:background-4-k
                sm:h-[55vh] xl:h-[40vh] md:h-[50vh] lg:h-[50vh] h-[55vh] 2xl:h-[70vh] w-full relative"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgOTYwIDU0MCIgd2lkdGg9Ijk2MCIgaGVpZ2h0PSI1NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk2MCIgaGVpZ2h0PSI1NDAiIGZpbGw9IiMwMDY2ZmYiPjwvcmVjdD48cGF0aCBkPSJNMCAzNTVMNDAgMzc2LjhDODAgMzk4LjcgMTYwIDQ0Mi4zIDI0MCA0MzguM0MzMjAgNDM0LjMgNDAwIDM4Mi43IDQ4MCAzNTguOEM1NjAgMzM1IDY0MCAzMzkgNzIwIDM1My4yQzgwMCAzNjcuMyA4ODAgMzkxLjcgOTIwIDQwMy44TDk2MCA0MTZMOTYwIDU0MUw5MjAgNTQxQzg4MCA1NDEgODAwIDU0MSA3MjAgNTQxQzY0MCA1NDEgNTYwIDU0MSA0ODAgNTQxQzQwMCA1NDEgMzIwIDU0MSAyNDAgNTQxQzE2MCA1NDEgODAgNTQxIDQwIDU0MUwwIDU0MVoiIGZpbGw9IiMxMTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjwvc3ZnPg==")'
                }}>
                <div className={'flex flex-col self-center items-center justify-center mt-2'}>
                    <div className={'brightness-125'}>
                        <Image
                            draggable={false}
                            className={'rounded-full fade-into-background border-4 border-blue-600 2xl:h-[100px] 2xl:w-[100px] lg:h-[150px] lg:w-[150px] md:h-[125px] md:w-[125px] sm:h-[100px] sm:w-[100px] h-[100px] w-[100px]'}
                            src={'https://avatars.githubusercontent.com/u/148557369?v=4'} alt={'User Image'}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                            width={1920} height={1080}></Image>
                    </div>
                    <WelcomeComponent poiretOne={poiretOne} nerdFont={nerdFont}/>
                </div>
            </div>
            <div className={'flex-grow bg-[#113]'}>
                <div className={`flex flex-col items-center justify-center sm:mt-0 mt-5`}>
                    <h2
                        className={`${fireCodeSemiLight.className} text-4xl text-white`}>My Vision</h2>
                </div>
            </div>
        </main>
    );
}