"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "10th Class",
        description:
            "Kendriya Vidyalaya Subathu,  Year - 2018,   Percentage - 83.6",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/school.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "12th Class",
        description:
            "Kendriya Vidyalaya Subathu,  Year - 2020,   Percentage - 91.6",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/college_image.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Bachelor of Computer Application",
        description: "Government College Solan, Hp,  Year - 2023,   CGPA- 8.01",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/university_image.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Master of Computer Application",
        description:
            "Panjab University Chandigarh,  Year - 2025,   Percentage - (active)",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/sports.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];
export function Education() {
    return (
        <div className="w-full flex justify-center">
            <StickyScroll content={content} />
        </div>
    );
}
