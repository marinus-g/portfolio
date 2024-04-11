import Image from "next/image";

function Skills() {
    return (
        <>
            <div className={'flex flex-col self-center items-center justify-center sm:mt-8 mt-2'}>
                <div
                //    className={'grid lg:grid-cols-8 sm:grid-cols-11 2xl:grid-cols-11 grid-cols-7 gap-4 sm:gap-12 grid-rows-3 items-center justify-items select-none grid-flow-row justify-items-center '}>
                   className={'flex flex-row justify-center flex-wrap gap-4 sm:gap-12 w-[70%]'}>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png"
                           alt="Java" title="Java"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
                           alt="JavaScript" title="JavaScript"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
                           alt="TypeScript" title="TypeScript"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
                           alt="HTML" title="HTML"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
                           alt="CSS" title="CSS"/>

                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png"
                           alt="Spring" title="Spring"/>
                    <Image width={50} height={50} draggable={false}
                           src="/spigot.png"
                           alt="Spigot" title="Spigot"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png"
                           alt="Angular" title="Angular"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                           alt="React" title="React"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704"
                           alt="Next.js" title="Next.js"/>

                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
                           alt="Tailwind CSS" title="Tailwind CSS"/>




                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png"
                           alt="MySQL" title="MySQL"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
                           alt="Firebase" title="Firebase"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/182884894-d3fa6ee0-f2b4-4960-9961-64740f533f2a.png"
                           alt="redis" title="redis"/>

                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
                           alt="Git" title="Git"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png"
                           alt="Jira" title="Jira"/>

                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png"
                           alt="Docker" title="Docker"/>

                    <Image width={50} height={50} draggable={false}
                           src="https://user-images.githubusercontent.com/25181517/186884150-05e9ff6d-340e-4802-9533-2c3f02363ee3.png"
                           alt="Windows" title="Windows"/>
                    <Image width={50} height={50} draggable={false}
                           src="https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa"
                           alt="Linux" title="Linux"/>
                </div>
                <p className={'mt-5'}>My tech stack centers around Java and TypeScript. I use macOS, Windows, and Linux on a daily basis, keeping my coding versatile and up to speed with any challenge that comes my way.</p>
            </div>
        </>
    );
}

export default Skills;