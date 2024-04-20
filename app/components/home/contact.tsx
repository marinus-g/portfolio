"use client"
import Image from "next/image";
import {useEffect, useState} from "react";

interface Props {
    name: string
}

function ContactForm({name}: Props) {

    const [hoveringContactForm, setHoveringContactForm] = useState(false);
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [loggedInWithDiscord, setLoggedInWithDiscord] = useState(false);
    useEffect(() => {

        const isValidEmail = (email: string) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        setValidEmail(email.length == 0 || isValidEmail(email));
    }, [email]);

    return (
        <div className={'flex flex-row w-[100%] h-[59vh] relative overflow-hidden'}>
            <div className={'w-[100%] relative'}>
                <div className={`w-max h-max `}>
                    <Image
                        layout={'fill'}
                        objectFit={'cover'}
                        src={'https://i.imgur.com/PSQed6n.jpg'}
                        alt={'Test'}
                        className={`${hoveringContactForm ? 'scale-110' : ''} overflow-hidden transition-transform duration-500`}>
                    </Image>
                </div>
                <div
                    className={'absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-50 '}>

                </div>
                <div className={'absolute w-[100%] h-[100%] flex flex-row justify-center'}
                >
                    <div
                        className={'relative top-20 transform w-max h-max bg-gray-700 bg-opacity-55 backdrop-blur-sm rounded-xl shadow shadow-black justify-center items-center p-8'}
                    >
                        <div
                            onMouseEnter={event => setHoveringContactForm(true)}
                            onMouseLeave={event => setHoveringContactForm(false)}
                            className={'p-1 flex flex-col items-center h-[100%] text-white mr-20 ml-20'}>
                            <h1 className={`text-gray-100 hover:text-white text-4xl text-center text-gradient text-inter inter`}>
                                Need anything? Contact me!
                            </h1>
                            <form className={'flex flex-col justify-center items-center'}>
                                <div className={'flex flex-row flex-grow justify-center items-center'}>
                                    <div
                                        className={'sm:border border-gray-400 flex-col sm:flex-row flex items-center lg:w-72 w-full mt-12 space-y-4 sm:space-y-0'}>
                                        <input
                                            className={`placeholder:text-center border border-primary sm:border-transparent
               text-base w-full font-medium leading-none
                ${validEmail ? 'text-white' : 'text-red-500'}
               p-4 focus:outline-none bg-transparent`}
                                            placeholder={'Email'}
                                            onChange={event => setEmail(event.target.value)}/>
                                    </div>
                                    <p className={'ml-2 mt-12 text-gray-400 text-center justify-self-center'}>or</p>
                                    <div
                                        className={`ml-2 flex-grow bg-[#5865F2] hover:bg-blue-600 transition-colors duration-200 space-y-4 sm:space-y-0 flex flex-row 
                                        items-stretch mt-12`}>
                                        <button className={`flex flex-row text-center text-white placeholder:text-center sm:border-transparent
   text-base w-full font-medium leading-none justify-center items-center
   p-4 focus:outline-none bg-transparent cursor-pointer`}>
                                            <Image
                                                width={30}
                                                height={30}
                                                draggable={false}
                                                className={'mr-2 invert filter hover:brightness-150 cursor-pointer'}
                                                src={'/discord.png'} alt={'Discord'}/>
                                            Login with Discord
                                        </button>
                                    </div>
                                </div>
                                <div className={'mt-3.5'}>
                                    <textarea
                                        placeholder={'Message'}
                                        className={`placeholder:text-center border border-gray-400
             text-base w-full font-medium leading-none text-primary p-4
              focus:outline-none bg-transparent resize-none`}
                                        rows={6}
                                        cols={50}/>
                                </div>
                                <label>
                                    <input className={'m-2'} type={'checkbox'}/>
                                    Ich akzeptiere die <a href={'/privacy'} target={'_blank'} className={'underline text-blue-500'}>Datenschutzbestimungen</a>
                                </label>
                                <button disabled={!validEmail || email.length == 0} className={`bg-opacity-35
                                 bg-gray-800 rounded-lg pl-4 pr-4 p-2 mt-2.5`}>Submit</button>
                            </form>
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
    );
}

export default ContactForm;