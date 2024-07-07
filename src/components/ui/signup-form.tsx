"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Meteors } from "./meteors";

export function SignupFormDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                "service_hxknzv4",
                "template_kau8wsg",
                {
                    from_name: form.name,
                    to_name: "Anish Kashyap",
                    from_email: form.email,
                    to_email: "anishkashyap311@gmail.com",
                    message: form.message,
                },
                "W8j_Ep0Zre9voDIz9"
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Message sent :)");
                    setForm({ name: "", email: "", message: "" });
                },
                (error: any) => {
                    setLoading(false);
                    console.log(error);
                    toast.error("Something went Wrong :(");
                }
            );
    };

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div className="sm:w-[700px] relative  w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
            {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to Aceternity
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to aceternity if you can because we don&apos;t have a
                login flow yet
            </p> */}

            <form
                className="my-8"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input
                            id="firstname"
                            name="name"
                            value={form.name}
                            required
                            onChange={handleChange}
                            placeholder="Tyler"
                            type="text"
                        />
                    </LabelInputContainer>
                    {/* <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input
                            id="lastname"
                            placeholder="Durden"
                            type="text"
                        />
                    </LabelInputContainer> */}
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        onChange={handleChange}
                        value={form.email}
                        name="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Share your message</Label>
                    <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                        }
                        id=""
                        rows={4}
                        className={`flex w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
            transition duration-400
           `}
                    ></textarea>
                </LabelInputContainer>

                <button
                    disabled={loading}
                    className={`bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 block  ${
                        loading ? "bg-zinc-600" : "bg-zinc-800"
                    } w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]`}
                    type="submit"
                >
                    Done
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
