"use client";
import Image from "next/image";
export default function Projects() {
    return (
        <>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <b className="mb-2 text-lg">
                Projects Page
            </b>
        </ol>
        <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/Venotics"
            target="_blank"
            rel="noopener noreferrer"
        >
                <Image
                    src="/github.svg"
                    alt="GitHub logomark"
                    width={20}
                    height={20} />
                Github
        </a>
        </>
    );
}