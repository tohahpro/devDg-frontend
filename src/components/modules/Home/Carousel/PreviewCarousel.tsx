"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import BeforeAfterSlider from "../BeforeAfter";

type ComparisonItem = {
    before: StaticImageData | string;
    after: StaticImageData | string;
    preview: StaticImageData | string;
    title?: string;
};

type PreviewSliderProps = {
    items: ComparisonItem[];
};

export default function PreviewSlider({
    items,
}: PreviewSliderProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!api) return;

        const updateSelected = () => {
            setSelectedIndex(api.selectedScrollSnap());
        };

        updateSelected();

        api.on("select", updateSelected);

        return () => {
            api.off("select", updateSelected);
        };
    }, [api]);

    const handlePreviewClick = (index: number) => {
        api?.scrollTo(index);
    };

    return (
        <div className="w-full min-w-0">
            {/* MAIN SLIDER */}
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="ml-0">
                    {items.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-0"
                        >
                            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm sm:rounded-2xl sm:p-2">
                                <BeforeAfterSlider
                                    beforeImage={item.before}
                                    afterImage={item.after}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* BOTTOM PREVIEWS */}
            <div className="mt-3 w-full sm:mt-4">
                <div
                    className="
            flex w-full gap-2 overflow-x-auto px-1 pb-2
            sm:gap-3
            md:px-2
            lg:justify-center
            scrollbar-none
            [&::-webkit-scrollbar]:hidden
          "
                >
                    {items.map((item, index) => {
                        const active = selectedIndex === index;

                        return (
                            <button
                                key={index}
                                type="button"
                                onClick={() => handlePreviewClick(index)}
                                aria-label={`View ${item.title || `preview ${index + 1}`}`}
                                className={`
                  group relative shrink-0 overflow-hidden
                  rounded-lg border bg-white
                  transition-all duration-300
                  sm:rounded-xl
                  ${active
                                        ? "border-violet-600 ring-2 ring-violet-100"
                                        : "border-slate-200 hover:border-violet-300"
                                    }
                `}
                            >
                                <div
                                    className="
                    relative aspect-video
                    w-24
                    xs:w-28
                    sm:w-32
                    md:w-36
                    lg:w-40
                    xl:w-44
                  "
                                >
                                    <Image
                                        src={item.preview}
                                        alt={item.title || `Preview ${index + 1}`}
                                        fill
                                        sizes="
                      (max-width: 640px) 96px,
                      (max-width: 768px) 128px,
                      (max-width: 1024px) 144px,
                      (max-width: 1280px) 160px,
                      176px
                    "
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* ACTIVE OVERLAY */}
                                {active && (
                                    <>
                                        <div className="pointer-events-none absolute inset-0 bg-violet-600/5" />

                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-violet-600" />
                                    </>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}