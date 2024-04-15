import HomePage from '@/app/components/home/home';

type Test = {
    name: string;
};


export default function Home() {
    return (
        <main className={`flex flex-col select-none bg-[#002] m-0 p-0`}>
            <HomePage name={'Test'} />
        </main>
    );
}