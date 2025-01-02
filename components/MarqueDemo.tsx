'use client'

import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image from "next/image";

const reviews = [
    {
        name: "Jack",
        bg: "#2E150A",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "/images/nutella/logo.png",
    },
    {
        name: "Jill",
        bg: "#3d993d",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "/images/pringles/logo.png",
    },
    {
        name: "John",
        bg: "#0455fb",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/images/oreo/logo.png",
    },
    {
        name: "Jane",
        bg: "#CE1907",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/images/kinder/logo.png",
    },
    {
        name: "Jenny",
        bg: "#013fa1",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/images/haribo/logo.png",
    },
    {
        name: "James",
        bg: "#826eaf",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/images/milka/logo.webp",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    bg,
    body,
}: {
    img: string;
    name: string;
    bg: string;
    body: string;
}) => {
    return (
        <figure
            style={{ background: bg }}
            className={cn(
                "relative flex max-h-28 md:max-h-36 w-56 md:w-64 cursor-pointer items-center justify-center overflow-hidden rounded-xl border p-3 shadow-xl",
                // light styles
                "border-gray-950/[.1]",
                // dark styles
                "dark:border-gray-50/[.1]",
            )}
        >
            <Image
                src={img}
                alt={name}
                width={300}
                height={100}
            />
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative mb-20 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <Marquee className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
