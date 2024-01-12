import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => {
    return (
        <nav
            className="flex-between background-light900_dark200 fixed z-50 w-full 
        gap-5 p-6 shadow-light-300 sm:px-12 dark:shadow-none"
        >
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/assets/images/site-logo.svg"
                    width={23}
                    height={23}
                    alt="DevFlow"
                />
                <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900">
                    Dev <span className="text-primary-500">OverFlow</span>
                </p>
            </Link>

            <div className="flex-between gap-5">
                <SignedIn>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: "h-10 w-10",
                            },
                            variables: {
                                colorPrimary: "#ff7000",
                            },
                        }}
                    />
                </SignedIn>
            </div>
        </nav>
    );
};

export default NavBar;