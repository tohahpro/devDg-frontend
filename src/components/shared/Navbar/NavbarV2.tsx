"use client";

import {
    AnimatePresence,
    motion,
    useScroll,
} from "framer-motion";
import {
    BriefcaseBusiness,
    Code2,
    Cpu,
    Database,
    FolderKanban,
    Home,
    Mail,
    Menu,
    Sparkles,
    UserRound,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import CursorGlow from "../CursorGlow";
import { PublicLogo } from "./PublicLogo";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const mobileMainItems = [
    {
        name: "Home",
        href: "#home",
        icon: Home,
    },
    {
        name: "Skills",
        href: "#skills",
        icon: Cpu,
    },
    {
        name: "Projects",
        href: "#projects",
        icon: FolderKanban,
    },
];

const mobileExtraItems = [
    {
        name: "About",
        description: "Learn more about me and my journey",
        href: "#about",
        icon: UserRound,
    },
    {
        name: "Contact",
        description: "Start your next project with me",
        href: "#contact",
        icon: Mail,
    },
];

export function NavbarV2() {
    const [activeSection, setActiveSection] = useState("home");

    const [isOpen, setIsOpen] = useState(false);

    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition =
                window.scrollY + window.innerHeight / 3;

            let currentActive = "home";

            for (
                let index = navItems.length - 1;
                index >= 0;
                index--
            ) {
                const section = document.querySelector(
                    navItems[index].href
                ) as HTMLElement | null;

                if (
                    section &&
                    section.offsetTop <= scrollPosition
                ) {
                    currentActive =
                        navItems[index].href.substring(1);

                    break;
                }
            }

            setActiveSection(currentActive);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    const scrollTo = (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        event.preventDefault();

        const element = document.querySelector(href);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });

            setIsOpen(false);
        }
    };

    const isActiveItem = (href: string) => {
        return activeSection === href.substring(1);
    };

    return (
        <>
            {/* Scroll progress */}
            <motion.div
                className="fixed bottom-0 left-0 right-0 z-70 h-0.5 md:h-1.5 origin-left bg-muted-foreground"
                style={{
                    scaleX: scrollYProgress,
                }}
            />

            <CursorGlow />

            {/* Desktop Navbar */}
            <div className="container fixed left-1/2 top-2.5 z-50 mx-auto hidden w-[95%] -translate-x-1/2 md:block">
                <div className="relative flex items-center justify-between overflow-hidden rounded-lg border border-black/10 bg-white/70 px-6 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-black/40">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(event) =>
                            scrollTo(event, "#home")
                        }
                        className="relative z-10 text-xl font-bold text-black dark:text-white"
                    >
                        <PublicLogo />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="relative z-10 flex gap-2">
                        {navItems.map((item) => {
                            const isActive = isActiveItem(
                                item.href
                            );

                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(event) => scrollTo(event, item.href)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="relative flex items-center justify-center px-4 pt-4"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="limelight"
                                            transition={{
                                                type: "spring",
                                                stiffness: 290,
                                                damping: 28,
                                            }}
                                            className="absolute inset-x-3 top-0 z-0 h-0.5 rounded-full bg-primary"
                                        >
                                            <div className="absolute left-0 top-1 h-2.5 w-full rounded-full bg-primary opacity-100 blur-md" />

                                            <div className="absolute left-[-15%] top-0 h-10 w-[130%] rounded-full bg-primary/60 blur-3xl" />

                                            <div className="absolute left-[-59%] top-0.5 h-10 w-[219%] bg-linear-to-b from-primary/30 via-primary/10 to-transparent [clip-path:polygon(10%_100%,30%_0,70%_0,90%_100%)]" />
                                        </motion.div>
                                    )}

                                    <span
                                        className={cn(
                                            "relative z-10 text-base font-medium transition-all duration-300",
                                            isActive
                                                ? "bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                                                : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                                        )}
                                    >
                                        {item.name}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </nav>

                    <div className="relative z-10">
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile floating menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            y: "100%",
                            opacity: 0,
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className="fixed bottom-28 left-1/2 z-50 w-[95%] -translate-x-1/2 overflow-hidden rounded-2xl border border-black/10 bg-white/90 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/85 md:hidden"
                    >
                        {/* Menu header */}
                        {/* <div className="mb-2 flex items-center justify-between border-b border-border pb-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Navigation
                                </p>

                                <h3 className="mt-1 text-xl font-bold">
                                    Explore more
                                </h3>
                            </div>

                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={() =>
                                    setIsOpen(false)
                                }
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-muted/60 transition-colors hover:bg-muted"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div> */}

                        <div className="flex flex-col">
                            {mobileExtraItems.map(
                                (item, index) => {
                                    const Icon = item.icon;

                                    const isActive =
                                        isActiveItem(
                                            item.href
                                        );

                                    return (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(event) =>
                                                scrollTo(
                                                    event,
                                                    item.href
                                                )
                                            }
                                            initial={{
                                                opacity: 0,
                                                y: 20,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay:
                                                    index *
                                                    0.06,
                                            }}
                                            className="group flex items-center gap-4 border-b border-border py-5 last:border-b-0"
                                        >
                                            <div
                                                className={cn(
                                                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                                                    isActive
                                                        ? "border-primary/30 bg-primary/10 text-primary"
                                                        : "border-border bg-muted/50 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary"
                                                )}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div className="flex-1">
                                                <p
                                                    className={cn(
                                                        "font-semibold transition-colors",
                                                        isActive
                                                            ? "text-primary"
                                                            : "text-foreground"
                                                    )}
                                                >
                                                    {
                                                        item.name
                                                    }
                                                </p>

                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    {
                                                        item.description
                                                    }
                                                </p>
                                            </div>

                                            {/* <span className="text-xl text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                                                →
                                            </span> */}
                                        </motion.a>
                                    );
                                }
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Bottom Navigation */}
            <div className="fixed inset-x-0 bottom-0 z-60 md:hidden">
                <div className="relative h-[calc(76px+env(safe-area-inset-bottom))] w-full text-white sm:h-[calc(84px+env(safe-area-inset-bottom))]">
                    {/* Navbar Background with Center Notch */}
                    <svg
                        viewBox="0 0 500 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_-8px_25px_rgba(0,0,0,0.35)]"
                    >
                        <path
                            d="M 0 12 H 190 C 202 12 208 20 208 32 V 43 C 208 60 220 72 237 72 H 263 C 280 72 292 60 292 43 V 32 C 292 20 298 12 310 12 H 500 V 100 H 0 V 12 Z"
                            className="fill-neutral-950 stroke-primary/40"
                            strokeWidth="1.5"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    {/* Navbar Items */}
                    <div className="relative z-10 grid h-full grid-cols-5 items-start px-0.5 pt-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-1 sm:pt-3.5">
                        <MobileNavItem
                            item={mobileMainItems[0]}
                            isActive={isActiveItem(
                                mobileMainItems[0].href
                            )}
                            onClick={scrollTo}
                        />

                        <MobileNavItem
                            item={mobileMainItems[1]}
                            isActive={isActiveItem(
                                mobileMainItems[1].href
                            )}
                            onClick={scrollTo}
                        />

                        {/* Middle Floating Logo */}
                        <div className="relative flex h-full items-start justify-center">
                            <a
                                href="#home"
                                onClick={(event) =>
                                    scrollTo(event, "#home")
                                }
                                aria-label="Go to home"
                                className="absolute -top-5 z-20 flex h-[54px] w-[54px] items-center justify-center rounded-[18px] border border-primary/50 bg-neutral-950 p-1.5 shadow-[0_5px_18px_rgba(0,0,0,0.55),0_0_12px_rgba(34,197,94,0.25)] min-[390px]:h-[58px] min-[390px]:w-[58px] min-[390px]:rounded-[20px] min-[390px]:p-2 sm:-top-6 sm:h-16 sm:w-16 sm:rounded-[21px]"
                            >
                                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[13px] bg-background min-[390px]:rounded-[15px] dark:bg-neutral-950">
                                    <PublicLogo />
                                </div>
                            </a>
                        </div>

                        <MobileNavItem
                            item={mobileMainItems[2]}
                            isActive={isActiveItem(
                                mobileMainItems[2].href
                            )}
                            onClick={scrollTo}
                        />

                        {/* More */}
                        <button
                            type="button"
                            aria-label={
                                isOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            onClick={() =>
                                setIsOpen(
                                    (previous) => !previous
                                )
                            }
                            className={cn(
                                "flex min-w-0 cursor-pointer flex-col items-center justify-center gap-1 px-0.5 py-1.5 text-[9px] font-medium transition-colors min-[360px]:gap-1.5 min-[360px]:text-[10px] min-[390px]:text-[11px]",
                                isOpen
                                    ? "text-primary"
                                    : "text-white/70 hover:text-white"
                            )}
                        >
                            <motion.div
                                animate={{
                                    rotate: isOpen ? 90 : 0,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                            >
                                {isOpen ? (
                                    <X className="h-[18px] w-[18px] min-[390px]:h-5 min-[390px]:w-5" />
                                ) : (
                                    <Menu className="h-[18px] w-[18px] min-[390px]:h-5 min-[390px]:w-5" />
                                )}
                            </motion.div>

                            <span className="leading-none">
                                More
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

interface MobileNavItemProps {
    item: {
        name: string;
        href: string;
        icon: React.ElementType;
    };
    isActive: boolean;
    onClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => void;
}

function MobileNavItem({
    item,
    isActive,
    onClick,
}: MobileNavItemProps) {
    const Icon = item.icon;

    return (
        <a
            href={item.href}
            onClick={(event) =>
                onClick(event, item.href)
            }
            className={cn(
                "relative flex flex-col items-center justify-center gap-1.5 rounded-xl px-1 py-2 text-[11px] font-medium transition-colors",
                isActive
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
            )}
        >
            {isActive && (
                <motion.span
                    layoutId="mobile-active-indicator"
                    transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 28,
                    }}
                    className="absolute -top-3 h-0.5 w-8 rounded-full bg-primary shadow-[0_0_12px_rgba(124,58,237,0.9)]"
                />
            )}

            <Icon className="h-5 w-5" />

            <span>{item.name}</span>
        </a>
    );
}