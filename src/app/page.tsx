import Image from 'next/image';
import { UserButton } from '@clerk/nextjs/app-beta';
import { InputFile } from '@/components/ui/inputfile';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
            <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <InputFile />
            </div>
        </main>
    );
}
