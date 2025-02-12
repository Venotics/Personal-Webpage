"use client";
import Image from "next/image";
export default function Contact()
{
    return (
        <>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <b className="mb-2 text-lg">
                Contact Page
            </b>
        </ol>
        <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                    href="https://www.linkedin.com/in/matthew-infante-9a8019132/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn logomark"
                      width={20}
                      height={20}
                    />
                    LinkedIn
                  </a>
                  <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                    href="https://www.instagram.com/mattichew/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/instagram.svg"
                      alt="Instagram logomark"
                      width={20}
                      height={20}
                    />
                    Instagram
                  </a>
                  <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                    href="https://x.com/MattiChew"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/x.svg"
                      alt="X logomark"
                      width={20}
                      height={20}
                    />
                    X
                  </a>
        </>
    );
}