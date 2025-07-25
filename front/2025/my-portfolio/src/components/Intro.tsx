"use client";

import { useEffect, useRef } from "react";
import { galleryList } from "@/store/store";
import styles from "@/app/page.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = gsap.utils.toArray(`.${styles.galleryimg}`) as HTMLElement[];
    targets.forEach((el) => {
      gsap.fromTo(
        el.querySelector("img"),
        { opacity: 0, scale: 1 },
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
    <div ref={containerRef}>
      <div className="relative gallery z-1">
        {galleryList.map((item, i) => (
          <div className={`${styles.galleryimg} overflow-hidden`} key={i}>
            <img src={item.src} alt={item.alt} className="block filter grayscale" />
          </div>
        ))}
      </div>
    </div>
  );
}
