"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PreviewImage {
    id: string;
    url: string;
    order?: string | null;
}

interface ProjectGalleryCarouselProps {
    images: PreviewImage[];
    projectTitle: string;
}

const ProjectGalleryCarousel = ({
    images,
    projectTitle,
}: ProjectGalleryCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const totalImages = images.length;

    const handlePrevious = () => {
        setActiveIndex((currentIndex) => currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setActiveIndex((currentIndex) => currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
    };

    const getPreviewImages = () => {
        if (totalImages <= 1) {
            return [];
        }

        const previewItems = [];

        for (let offset = 1; offset <= Math.min(2, totalImages - 1); offset++) {
            const imageIndex = (activeIndex + offset) % totalImages;

            previewItems.push({
                ...images[imageIndex],
                imageIndex,
            });
        }

        return previewItems;
    };

    const previewImages = getPreviewImages();
    const activeImage = images[activeIndex];

    if (!activeImage) {
        return null;
    }

    return (
        <div className="space-y-5">
            {/* Main carousel */}
            <div className="grid items-stretch gap-5 lg:grid-cols-[0.34fr_1fr]">
                {/* Left Preview Images */}
                <div className="order-2 h-full lg:order-1">
                    {previewImages.length > 0 && (
                        <div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-1 lg:grid-rows-2">
                            {previewImages.map((image) => (
                                <button
                                    key={image.id}
                                    type="button"
                                    onClick={() => setActiveIndex(image.imageIndex)}
                                    className="group relative h-full min-h-0 overflow-hidden rounded-xl border border-border/70 bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                                >
                                    <div className="relative h-full min-h-40 overflow-hidden">
                                        <Image
                                            src={image.url}
                                            alt={`${projectTitle} preview ${image.imageIndex + 1}`}
                                            fill
                                            sizes="(max-width: 1024px) 50vw, 30vw"
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
                                        <div className="absolute bottom-3 right-3 rounded bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                            Image {image.imageIndex + 1}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Main Image */}
                <div className="order-1 h-full lg:order-2">
                    <div className="group relative h-full overflow-hidden rounded-xl border border-border/70 bg-card shadow-xl">
                        <div className="relative aspect-video h-full w-full overflow-hidden bg-muted">
                            {images.map((image, index) => (
                                <Image
                                    key={image.id}
                                    src={image.url}
                                    alt={`${projectTitle} preview ${index + 1}`}
                                    fill
                                    priority={index === 0}
                                    sizes="(max-width: 1024px) 100vw, 75vw"
                                    className={`object-cover transition-all duration-700 ease-in-out ${index === activeIndex
                                        ? "scale-100 opacity-100"
                                        : "scale-[1.02] opacity-0"
                                        }`}
                                />
                            ))}

                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

                            <div className="absolute bottom-4 right-4 z-10 rounded-md border border-white/20 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                                {activeIndex + 1} / {totalImages}
                            </div>

                            {totalImages > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={handlePrevious}
                                        aria-label="Previous project image"
                                        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/70 group-hover:opacity-100"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        aria-label="Next project image"
                                        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/70 group-hover:opacity-100"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Indicator */}
            <div>
                {totalImages > 1 && (
                    <div className="flex justify-center pt-2">
                        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 shadow-sm">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? "w-8 bg-primary"
                                        : "w-2 bg-muted-foreground/40 hover:bg-primary/60"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectGalleryCarousel;