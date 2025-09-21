"use client";

import { galleryList } from "@/store/store";
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BioImg = ({ styles, onLoad }: any) => {
    useEffect(() => {
        onLoad?.();
    }, []);
    useEffect(() => {
        const targets = gsap.utils.toArray(`.${styles.galleryimg}`) as HTMLElement[];
        targets.forEach((el) => {
            gsap.fromTo(
                el.querySelector("img"),
                { opacity: 0, scale: 1 },
                {
                    opacity: 1,
                    scale: 0.95,
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
        <div className="relative gallery zIndex">
            {galleryList.map((item, i) => (
                <div className={`${styles.galleryimg} overflow-hidden`} key={i}>
                    <img src={item.src} alt={item.alt} className="block filter grayscale" />
                </div>
            ))}
        </div>
    );
};

export default BioImg;
