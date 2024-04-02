import Image from "next/image";
import localFont from "next/font/local";

const poiretOne = localFont({
    src: './assets/fonts/PoiretOne-Regular.ttf',
    display: 'swap',
})
const nerdFont = localFont({
    src: './assets/fonts/nerdfont-codensed.ttf',
    display: 'swap',
});
export default function Home() {
    return (
        <main className="flex flex-col min-h-screen min-w-max relative">
            <div className={'flex max-h-[69vh] min-h-[64vh] min-w-full flex-col bg-cover bg-center bg-no-repeat'}
                 style={{backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgOTYwIDU0MCIgd2lkdGg9Ijk2MCIgaGVpZ2h0PSI1NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk2MCIgaGVpZ2h0PSI1NDAiIGZpbGw9IiMwMDY2ZmYiPjwvcmVjdD48cGF0aCBkPSJNMCAzNTVMNDAgMzc2LjhDODAgMzk4LjcgMTYwIDQ0Mi4zIDI0MCA0MzguM0MzMjAgNDM0LjMgNDAwIDM4Mi43IDQ4MCAzNTguOEM1NjAgMzM1IDY0MCAzMzkgNzIwIDM1My4yQzgwMCAzNjcuMyA4ODAgMzkxLjcgOTIwIDQwMy44TDk2MCA0MTZMOTYwIDU0MUw5MjAgNTQxQzg4MCA1NDEgODAwIDU0MSA3MjAgNTQxQzY0MCA1NDEgNTYwIDU0MSA0ODAgNTQxQzQwMCA1NDEgMzIwIDU0MSAyNDAgNTQxQzE2MCA1NDEgODAgNTQxIDQwIDU0MUwwIDU0MVoiIGZpbGw9IiMxMTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjwvc3ZnPg==")'}}>
                <div className={'flex flex-col self-center items-center justify-center mt-2'}>
                    <div className={'brightness-125'}>
                        <Image className={'rounded-full fade-into-background'}
                               src={'https://avatars.githubusercontent.com/u/148557369?v=4'} alt={'User Image'}
                               placeholder="blur"
                               blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                               width={200} height={200}></Image>
                    </div>
                    <h1 className={`${poiretOne.className} font-medium text-5xl bg-gradient-to-r from-gray-600 via-gray-800 to-black inline-block text-transparent bg-clip-text`}>Hi,
                        I am Marinus!</h1>
                    <h3 className={` ${nerdFont.className} font-light text-3xl text-white mt-3.5`}>I am a
                        Software Developer interested in developing software for the general public.
                    </h3>
                    <p><span className={`${nerdFont.className} text-white`}>Test</span></p>
                </div>
            </div>
            <div className={'flex-grow bg-[#113]'}>
                <div className={`flex flex-col items-center justify-center`}>
                    <h2
                        className={`${poiretOne.className} text-4xl text-white`}>My
                        Vision</h2>

                </div>
            </div>
        </main>
    );
}
