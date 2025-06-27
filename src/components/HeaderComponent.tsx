"use client";

import Link from "next/link";
import { Navbar, Avatar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from "flowbite-react";
import { usePathname } from 'next/navigation';

export default function HeaderComponent () {

    const pathname = usePathname()

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <Navbar>
                <NavbarBrand href="https://e-stunting.vercel.app/">
                    <Avatar img="/icons/icon-512x512.png" alt="Logo E-Stunting" rounded/>
                    <span className="ml-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-Stunting</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink active={pathname === "/"} as={Link} href="/">
                        Home
                    </NavbarLink>
                    <NavbarLink active={pathname === "/petunjuk"} as={Link} href="/petunjuk">Petunjuk</NavbarLink>
                    <NavbarLink active={pathname === "/klasifikasi"} as={Link} href="/klasifikasi">Klasifikasi</NavbarLink>
                </NavbarCollapse>
            </Navbar>           
        </header>
    )
}