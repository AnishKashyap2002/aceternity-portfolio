import React, { ChangeEvent, FormEvent, useState } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { social_media_links } from "@/utils";
import { Button, MovingBorder } from "./ui/moving-border";
import { LinkPreview } from "./ui/link-preview";
import { SignupFormDemo } from "./ui/signup-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
    return (
        <div
            className="p-4 px-4 flex flex-wrap gap-8  justify-center"
            id="contact"
        >
            <div className="max-w-md">
                <TypewriterEffect
                    words={[
                        { text: "Contact" },
                        { text: "Me", className: "text-pink-700" },
                    ]}
                ></TypewriterEffect>
                <div className="w-full p-8 justify-center flex flex-wrap gap-2 items-center relative">
                    {social_media_links.map((link) => (
                        <div
                            key={link.title}
                            className="bg-neutral-800 rounded-xl gap-2 p-2 text-white flex items-center font-bold"
                        >
                            {<link.icon />}
                            <LinkPreview
                                className="text-white"
                                url={link.url}
                            >
                                {link.title}
                            </LinkPreview>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center sm:w-auto w-full">
                <div className="w-full flex flex-col gap-4 items-center">
                    <TypewriterEffect
                        words={[
                            { text: "Leave" },
                            { text: "A" },
                            { text: "Message", className: "text-orange-700" },
                        ]}
                    ></TypewriterEffect>
                    <SignupFormDemo />
                </div>
            </div>
        </div>
    );
};

export default Contact;
