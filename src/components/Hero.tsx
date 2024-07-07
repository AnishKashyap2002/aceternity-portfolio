"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Hero() {
    const images = ["/one.jpg", "/two.jpg", "/three.webp"];
    const words = [
        {
            text: "Hey",
            className: "lg:text-[75px] md:text-[50px] text-5xl",
        },
        {
            text: "I",
            className: "lg:text-[75px] md:text-[50px] text-5xl",
        },
        {
            text: "am",
            className: "lg:text-[75px] md:text-[50px] text-5xl",
        },
        {
            text: "Anish",
            className: " text-blue-50 lg:text-[75px] md:text-[50px] text-5xl",
        },
        {
            text: "Kashyap.",

            className:
                "lg:text-[75px] md:text-[50px] text-5xl text-blue-500 dark:text-blue-500",
        },
    ];

    const heroInfo =
        "A software developer who is keen to learn new technologies with zeal..";

    return (
        <ImagesSlider
            className="h-screen"
            images={images}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <div className="p-8 z-10">
                    <TypewriterEffect
                        words={words}
                        className="text-[75px]"
                    />
                    <TextGenerateEffect words={heroInfo} />
                </div>
            </motion.div>
        </ImagesSlider>
    );
}
