import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";
import { Education } from "./Education";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { EduQuote } from "./EduQuote";
import { FlipWords } from "./ui/flip-words";
import { EvervaultCard } from "./ui/evervault-card";
import { CardContainer } from "./ui/3d-card";
import { PinContainer } from "./ui/3d-pin";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { projects, skills, hobbies, interests } from "@/utils";
import { BackgroundGradient } from "./ui/background-gradient";

const About = () => {
    return (
        <div className="text-white p-4 md:p-12">
            <h1
                className="font-bold text-[50px]"
                id="about"
            >
                About
            </h1>
            <div className="w-full">
                <TextRevealCard
                    text="Moto of my life"
                    revealText="Hard work always pays off:)"
                    className="font-bold text-4xl"
                />
            </div>
            {/* <ContainerScroll
                        titleComponent={
                            <>
                                <h1 className="text-2xl font-semibold text-white">
                                    <span className="text-4xl  font-bold leading-none">
                                        My Education
                                    </span>
                                </h1>
                            </>
                        }
                    >
                        <Image
                            src="https://wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-10.jpg"
                            alt="hero"
                            fill
                            className="w-full rounded-2xl object-cover h-full object-left-top"
                            draggable={false}
                        />
                    </ContainerScroll> */}
            <div className="pt-10 flex justify-between flex-col gap-4 items-center md:flex-row">
                <EduQuote />
                <Education />
            </div>
            <div className="font-bold text-3xl sm:text-5xl py-8">
                My <FlipWords words={["Skills", "Expertise", "Interests"]} />
                <div className="flex flex-wrap gap-4 justify-center py-4">
                    {skills.map((skill) => (
                        <div
                            className="h-[250px] w-[250px] rounded-3xl overflow-hidden "
                            key={skill}
                        >
                            <EvervaultCard text={skill} />
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="font-bold text-3xl sm:text-5xl py-8"
                id="projects"
            >
                My <FlipWords words={["Projects", "Creations", "Practicals"]} />
                <div className="flex flex-wrap gap-4 justify-center py-4">
                    {projects.map((project) => (
                        <div
                            className=" rounded-2xl "
                            key={project.title}
                        >
                            <PinContainer
                                title={project.title}
                                href={project.href}
                            >
                                <div className="flex basis-full  flex-col p-4  tracking-tight text-slate-100/50 sm:basis-1/2 w-full">
                                    <h3 className="font-bold  text-base text-slate-100">
                                        {project.title}
                                    </h3>
                                    <div className="text-base  font-normal">
                                        <span className="text-slate-500 ">
                                            {project.disc}
                                        </span>
                                    </div>
                                    <div className="w-[300px] relative">
                                        <Image
                                            src={project.image}
                                            width={300}
                                            height={300}
                                            className="rounded-2xl"
                                            alt="project w-full image"
                                        />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between sm:flex-row mt-10 flex-col w-full">
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-row items-center justify-center p-8 w-full">
                        <AnimatedTooltip items={hobbies} />
                    </div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-3 bg-zinc-900">
                        <p className="text-base sm:text-xl  text-neutral-200">
                            My Hobbies
                        </p>
                    </BackgroundGradient>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-row items-center justify-center p-8 w-full">
                        <AnimatedTooltip items={interests} />
                    </div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-3 bg-zinc-900">
                        <p className="text-base sm:text-xl  text-neutral-200">
                            My Interests
                        </p>
                    </BackgroundGradient>
                </div>
            </div>
            <div className="mt-10 rounded-full w-full h-1 bg-gray-600" />
        </div>
    );
};

export default About;
