"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
    fullWidth?: boolean;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = "",
    fullWidth = false
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const hidden = {
        opacity: 0,
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    };

    const visible = {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.25, 0, 1],
            delay: delay
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={hidden}
            animate={isInView ? visible : hidden}
            className={`${className} ${fullWidth ? "w-full" : ""}`}
        >
            {children}
        </motion.div>
    );
}
