import {useEffect} from "react";
import Image from "next/image";

function DiscordModal() {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);
    return (
        <div className={'top-0 left-0 fixed h-full w-full'} style={{zIndex: 999999}}>
            <div className={`h-[100%] w-[100vw] bg-gray-800 bg-opacity-75
      flex flex-row justify-center items-center overflow-hidden`}
            style={{zIndex: 999999}}>
                <div className={`h-3/4 w-1/2 bg-gray-900 rounded-lg shadow shadow-gray-950
                flex flex-col items-center`}>
                    <div className={`flex flex-row text-white placeholder:text-center sm:border-transparent
   text-base font-medium leading-none items-center
   p-4 focus:outline-none`}>
                        <Image
                            width={30}
                            height={30}
                            draggable={false}
                            className={'mr-2 invert filter hover:brightness-150 cursor-pointer'}
                            src={'/discord.png'} alt={'Discord'}/>
                        Login with Discord
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscordModal;