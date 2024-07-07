"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
// import { FloatingNav } from "../ui/floating-navbar.tsx";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
            icon: (
                <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "About",
            link: "#about",
            icon: (
                <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Projects",
            link: "#projects",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Contact",
            link: "#contact",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
