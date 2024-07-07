import Image from "next/image";
import { FloatingNavDemo } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Toaster } from "react-hot-toast";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
    return (
        <main className="bg-neutral-950">
            <FloatingNavDemo />
            <Hero />
            <About />
            <Contact />
            <Toaster />
            {/* <BackgroundBeams /> */}
            <Meteors
                number={50}
                className="fixed"
            />
        </main>
    );
}
