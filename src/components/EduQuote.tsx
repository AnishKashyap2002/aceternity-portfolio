"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Meteors } from "./ui/meteors";

export function EduQuote() {
    return (
        <CardContainer className="inter-var relative">
            <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    My Education
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Education is supposed to juice your curiosity, not diminish
                    or sate it.
                </CardItem>
                <CardItem
                    translateZ="100"
                    className="w-full mt-4"
                >
                    <Image
                        src="/education.jpg"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
