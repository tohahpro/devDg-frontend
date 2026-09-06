"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

type BeforeAfterSliderProps = {
    beforeImage: StaticImageData | string;
    afterImage: StaticImageData | string;
};

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
}: BeforeAfterSliderProps) {
    const [position, setPosition] = useState(50);

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
            {/* AFTER */}
            <Image
                src={afterImage}
                alt="After"
                fill
                className="object-cover"
            />

            {/* BEFORE */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
            >
                <Image
                    src={beforeImage}
                    alt="Before"
                    fill
                    className="object-cover"
                />
            </div>

            {/* LABELS */}
            <span className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                Before
            </span>

            <span className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#111140] shadow-sm backdrop-blur">
                After
            </span>

            {/* DIVIDER */}
            <div
                className="pointer-events-none absolute inset-y-0 z-20 w-0.5 -translate-x-1/2 bg-white"
                style={{
                    left: `${position}%`,
                }}
            />

            {/* HANDLE */}
            <div
                className="pointer-events-none absolute top-1/2 z-30 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-violet-600 text-white shadow-xl"
                style={{
                    left: `${position}%`,
                }}
            >
                <ChevronsLeftRight className="size-5" />
            </div>

            {/* RANGE */}
            <input
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                className="absolute inset-0 z-40 h-full w-full cursor-ew-resize opacity-0"
                aria-label="Compare before and after images"
            />
        </div>
    );
}