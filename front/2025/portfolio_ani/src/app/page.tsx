"use client";

import { useEffect, useRef } from "react";
import { galleryList } from "@/store/store";
import styles from "./page.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const targets = gsap.utils.toArray(`.${styles.galleryimg}`) as HTMLElement[];
        targets.forEach((el) => {
            gsap.fromTo(
                el.querySelector("img"),
                {
                    opacity: 0,
                    scale: 1,
                },
                {
                    opacity: 1,
                    scale: 1.05,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 10%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gray-100 dark:bg-black" ref={containerRef}>
            {/* introduction */}
            <div className={`${styles.filter} intro inner sticky left-0 top-0 flex items-center text-center z-[2] min-h-[100vh]`}>
                <div className="mx-auto w-4/5">
                    {/* <h1 className="mb-20 text-2xl md:text-3xl lg:text-5xl  text-point">Hello, I am Ahram Kim 👋</h1> */}

                    <div className="introduction  text-gray-700 dark:text-gray-300 text-1xl 2xl:text-2xl">
                        <p className="break-words whitespace-pre-line leading-relaxed mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p className="break-words whitespace-pre-line leading-relaxed mt-5">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className="break-words whitespace-pre-line leading-relaxed mt-5">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className="break-words whitespace-pre-line leading-relaxed mt-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.</p>
                    </div>
                </div>
            </div>
            <div className="gallery relative z-1">
                {galleryList.map((item, i) => (
                    <div className={`${styles.galleryimg} overflow-hidden`} key={i}>
                        <img src={item.src} alt={item.alt} className="block filter grayscale" />
                    </div>
                ))}
            </div>
        </div>
    );
}
