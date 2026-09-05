"use client";

import Image from "next/image";
import BlackLogo from "@/assets/logo/final-Logo.png";
import WhiteLogo from "@/assets/logo/finalLogo.png";

export function PublicLogo() {

    return (
        <div className="flex items-center w-14">
            <Image
                src={BlackLogo}
                alt="Toha Hossain Logo"
                width={64}
                height={64}
                priority
                className="h-auto w-10 sm:w-12 md:w-14 lg:w-16 dark:hidden"
            />

            <Image
                src={WhiteLogo}
                alt="Toha Hossain Logo"
                width={64}
                height={64}
                priority
                className="hidden h-auto w-10 sm:w-12 md:w-14 lg:w-16 dark:block"
            />
        </div>
    );
}