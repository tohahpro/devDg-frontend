

import { ArrowRight, ArrowUpRight, BarChart3, Check, Grid2X2, ImageIcon, Menu, Monitor, Search, Target, X, Zap } from "lucide-react";
import Link from "next/link";



const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Fast, scalable websites built around your business.",
    items: [
      "Business Websites",
      "E-commerce",
      "WordPress",
      "Custom Development",
      "Landing Pages",
      "Website Redesign",
    ],
    link: "Explore Web Development",
    dark: false,
    accent: "purple",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Search strategies designed to increase visibility and sustainable growth.",
    items: [
      "Technical SEO",
      "On-page SEO",
      "Local SEO",
      "Content Strategy",
      "SEO Audits",
      "Keyword Research",
    ],
    link: "Explore SEO",
    dark: true,
    accent: "purple",
  },
  {
    icon: ImageIcon,
    title: "Product Photo Editing",
    description:
      "Clean, professional product images that look ready to sell.",
    items: [
      "Background Removal",
      "Retouching",
      "Ghost Mannequin",
      "Shadow Creation",
      "Color Correction",
      "E-commerce Images",
    ],
    link: "Explore Photo Editing",
    dark: false,
    accent: "coral",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We learn about your goals and challenges.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "We turn requirements into a clear plan.",
  },
  {
    number: "03",
    title: "Design",
    text: "Create engaging and user-focused designs.",
  },
  {
    number: "04",
    title: "Build",
    text: "Develop, test and refine every detail.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Get your project live with confidence.",
  },
  {
    number: "06",
    title: "Grow",
    text: "Ongoing support and optimization.",
  },
];

export default function HomePage() {

  return (
    <main className="overflow-hidden bg-white text-[#17163d]">

      {/* Hero */}
      <section className="relative min-h-190 overflow-hidden bg-[radial-linear(circle_at_72%_30%,rgba(123,96,255,.16),transparent_32%),radial-linear(circle_at_95%_18%,rgba(236,117,105,.09),transparent_22%),linear-linear(180deg,#fff,#fbfaff)] pt-38.75">
        <div className="absolute -right-32.5 top-25 h-130 w-162.5 rounded-[48%] bg-[#ede9ff] opacity-80 blur-[1px]" />

        <div className="relative mx-auto grid container items-center gap-12 px-5 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
          <div>
            <p className="mb-5 text-[12px] font-extrabold uppercase tracking-[.16em] text-[#6d5af6]">
              ✦ Digital growth, built with depth.
            </p>

            <h1 className="max-w-147.5 text-[54px] font-black leading-[.97] tracking-[-3.5px] sm:text-[68px] lg:text-[79px]">
              <span className="block text-[#202051]">Build Better.</span>
              <span className="block text-[#6559f6]">Rank Higher.</span>
              <span className="block text-[#ef7969]">Sell More.</span>
            </h1>

            <p className="mt-6 max-w-147.5 text-[16px] leading-7 text-[#66647d]">
              We build high-performing websites, grow search visibility,
              and create product visuals that turn attention into action.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-[#6655f6] px-6 py-3.5 text-[13px] font-semibold text-white shadow-lg shadow-[#6655f6]/20"
              >
                Start a Project
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/work"
                className="rounded-xl border border-[#e5e3ed] bg-white px-6 py-3.5 text-[13px] font-semibold text-[#24234e]"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[12px] font-semibold text-[#575574]">
              <span className="flex items-center gap-2">
                <Monitor size={15} />
                Web Development
              </span>
              <span className="flex items-center gap-2">
                <Search size={15} />
                SEO
              </span>
              <span className="flex items-center gap-2">
                <ImageIcon size={15} />
                Product Photo Editing
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto h-125 w-full max-w-165">
            <div className="absolute left-[11%] top-20 h-82.5 w-110 -rotate-2 rounded-[20px] border border-white/60 bg-white p-5 shadow-[0_30px_60px_rgba(63,51,140,.16)]">
              <div className="mb-6 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff756f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffcf55]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#66d58c]" />
              </div>

              <div className="grid grid-cols-[1.2fr_.8fr] gap-5">
                <div>
                  <p className="mt-3 text-[23px] font-extrabold leading-[1.05] text-[#1c1d45]">
                    Modern websites
                    <br />
                    for modern brands.
                  </p>

                  <div className="mt-8 flex gap-2">
                    <span className="rounded-md bg-[#ed796b] px-4 py-2 text-[10px] font-bold text-white">
                      Get Started
                    </span>
                    <span className="rounded-md bg-[#f7f6fa] px-4 py-2 text-[10px] font-semibold">
                      Learn More
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#f5f4fb]" />
              </div>

              <div className="mt-8 h-18.75 rounded-xl bg-linear-to-r from-[#f5f3fb] to-[#ece9ff]" />
            </div>

            <div className="absolute right-[5%] top-17.5 z-20 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_45px_rgba(47,37,100,.16)]">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
                  <span className="text-lg font-black text-[#4285f4]">G</span>
                </div>
                <div>
                  <p className="text-[10px] text-[#86839a]">Search</p>
                  <p className="text-[12px] font-extrabold text-[#29284d]">
                    Your brand on top
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16.25 left-[1%] z-30 flex items-end gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_rgba(56,48,112,.16)]">
              <div className="flex h-12 items-end gap-1">
                {[18, 27, 35, 45, 58].map((h) => (
                  <span
                    key={h}
                    className="w-1.75 rounded-sm bg-[#735eff]"
                    style={{ height: h }}
                  />
                ))}
              </div>
              <div>
                <p className="text-[22px] font-black text-[#22214d]">
                  +128%
                </p>
                <p className="text-[10px] text-[#7a7890]">
                  Organic Traffic
                </p>
              </div>
            </div>

            <div className="absolute bottom-2.5 right-[14%] z-40 h-70 w-36.25 rotate-[4deg] rounded-[30px] border-[6px] border-[#111827] bg-white p-2 shadow-[0_25px_50px_rgba(33,29,74,.22)]">
              <div className="mx-auto mb-2 h-3 w-14 rounded-full bg-[#101217]" />

              <div className="rounded-[20px] bg-[#f8f7fb] p-3">
                <p className="text-[6px] font-semibold text-[#88869a]">
                  Summer Collection
                </p>
                <div className="mt-3 h-30 rounded-xl bg-linear-to-b from-[#dedbf5] to-[#aaa3d3]" />
                <p className="mt-3 text-[8px] font-bold">Performance Shoe</p>
                <p className="text-[7px] text-[#7b7990]">$129.00</p>
              </div>
            </div>

            <div className="absolute right-[-3%] top-37.5 rotate-12 text-[#ef7969]">
              <ArrowUpRight size={110} strokeWidth={5} />
            </div>

            <p className="absolute right-[0%] top-75 rotate-[-9deg] text-[25px] font-semibold italic text-[#443d8e]">
              Growth
              <br />
              Starts Here
            </p>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-b border-[#eeeeF4] py-10">
        <div className="mx-auto container px-5 lg:px-8">
          <p className="mb-7 text-center text-[9px] font-bold uppercase tracking-[.12em] text-[#9a98ae]">
            Trusted by businesses building what&apos;s next.
          </p>

          <div className="grid grid-cols-2 items-center gap-8 text-center text-[20px] font-bold text-[#87849e] sm:grid-cols-5">
            <span>shopify</span>
            <span>WordPress</span>
            <span>WooCommerce</span>
            <span>webflow</span>
            <span>Google</span>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section
        className="bg-[linear-linear(180deg,#fff,#fbfaff)] py-24"
      >
        <div className="mx-auto container px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[.15em] text-[#6d5af6]">
                ✦ What we do
              </p>

              <h2 className="max-w-187.5 text-[42px] font-black leading-[1.02] tracking-[-2px] text-[#1c1c46] md:text-[54px]">
                Three capabilities.
                <br />
                One growth-focused partner.
              </h2>

              <p className="mt-5 max-w-160 text-[16px] leading-7 text-[#747188]">
                A great website should do more than look good. It should
                perform, get discovered and communicate your brand clearly.
              </p>
            </div>

            <div className="rounded-2xl border border-[#f0eef5] bg-white p-7 shadow-[0_14px_45px_rgba(52,44,105,.05)]">
              <div className="flex justify-between">
                <div className="space-y-1 text-[14px]">
                  <p className="font-semibold">Strategy</p>
                  <p className="text-[#7c7990]">Design</p>
                  <p className="text-[#7c7990]">Technology</p>
                  <p className="text-[#7c7990]">Growth</p>
                </div>
                <ArrowUpRight className="text-[#ef7969]" />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`rounded-[18px] border p-8 ${service.dark
                    ? "border-[#343080] bg-linear-to-br from-[#373382] to-[#262362] text-white shadow-[0_25px_60px_rgba(38,35,98,.2)]"
                    : "border-[#eeedf4] bg-white text-[#22214a] shadow-[0_15px_45px_rgba(34,31,75,.05)]"
                    }`}
                >
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${service.accent === "coral"
                      ? "bg-[#ff7669] text-white"
                      : "bg-[#6d5cf6] text-white"
                      }`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-[25px] font-extrabold tracking-[-.8px]">
                    {service.title}
                  </h3>

                  <p
                    className={`mt-2 text-[14px] leading-6 ${service.dark ? "text-[#d9d7ef]" : "text-[#77748c]"
                      }`}
                  >
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[13px]"
                      >
                        <Check size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* <Link
                    href=""
                    className={`mt-7 flex items-center gap-2 text-[13px] font-bold ${service.dark ? "text-white" : "text-[#6d5af6]"
                      }`}
                  >
                    {service.link}
                    <ArrowRight size={14} />
                  </Link> */}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24">
        <div className="mx-auto container px-5 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[.15em] text-[#6e6b85]">
                Selected work
              </p>
              <h2 className="text-[42px] font-black leading-[1.02] tracking-[-2px] md:text-[54px]">
                Work that solves more
                <br />
                than a design problem.
              </h2>
            </div>

            <Link
              href="#"
              className="hidden rounded-full border px-5 py-3 text-[12px] font-semibold md:flex"
            >
              View All Work
              <ArrowRight className="ml-2" size={14} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <WorkCard
              title="Nessa Foundation"
              subtitle="Website Redesign & Donation Experience"
              tags={["Web Development", "UX/UI"]}
              variant="charity"
            />

            <WorkCard
              title="E-commerce Brand"
              subtitle="Storefront & Conversion Experience"
              tags={["Web Development", "E-commerce"]}
              variant="store"
            />

            <WorkCard
              title="Product Imaging Project"
              subtitle="5,000+ Images Optimized"
              tags={["Photo Editing", "E-commerce"]}
              variant="product"
            />
          </div>
        </div>
      </section>

      {/* Why Depth Digi */}
      <section
        className="bg-[#151528] py-20 text-white"
      >
        <div className="mx-auto container px-5 lg:px-8">
          <div className="mb-8 flex justify-between">
            <h2 className="text-[34px] font-bold">Why Depth Digi</h2>
            <p className="hidden text-[13px] text-[#a9a7bb] md:block">
              We go deeper than the deliverable.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DarkFeature
              icon={Target}
              title="Strategy"
              text="before execution."
            />
            <DarkFeature
              icon={Zap}
              title="Performance"
              text="by default."
            />
            <DarkFeature
              icon={BarChart3}
              title="Built for"
              text="growth."
            />
            <DarkFeature
              icon={Grid2X2}
              title="Details"
              text="matter."
            />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24">
        <div className="mx-auto container px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div>
              <p className="text-[14px] text-[#66647b]">How We Work</p>
              <h2 className="mt-1 text-[40px] font-black tracking-[-1.5px]">
                From idea to impact.
              </h2>
            </div>

            <p className="max-w-87.5 text-[13px] leading-6 text-[#747188]">
              A clear process, thoughtful execution,
              <br />
              and a focus on long-term results.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {process.map((item, index) => (
              <div key={item.number} className="relative">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#7460f7] text-[10px] font-bold text-[#6654f6]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-[15px] font-bold">{item.title}</h3>

                <p className="mt-2 text-[11px] leading-5 text-[#77758b]">
                  {item.text}
                </p>

                {index < process.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute -right-5 top-2 hidden text-[#555273] lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-24">
        <div className="mx-auto container px-5 lg:px-8">
          <div className="mb-8 flex justify-between">
            <h2 className="text-[35px] font-black tracking-[-1px]">
              What Our Clients Say
            </h2>

            <Link
              href="#"
              className="hidden items-center text-[12px] font-semibold text-[#6757f6] md:flex"
            >
              View All Testimonials
              <ArrowRight className="ml-2" size={14} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Testimonial
              quote="Depth Digi understood both the business problem and the technical solution. The result was a website that truly represents our mission."
              name="Aminul Haque"
              role="Founder, Nessa Foundation"
            />

            <Testimonial
              quote="The product images were clean, consistent and delivered on time. It made a huge difference to our online store."
              name="Sara Khan"
              role="Owner, StyleCart"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden bg-linear-to-r from-[#5445ec] via-[#684cf3] to-[#513be4] py-16 text-white"
      >
        <div className="absolute -right-5 -top-7.5 h-52.5 w-52.5 rounded-full border-35 border-[#e57983]/80" />

        <div className="mx-auto grid container gap-8 px-5 md:grid-cols-[1fr_.9fr] md:items-center lg:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.15em]">
              Have a project in mind?
            </p>
            <h2 className="mt-3 max-w-160 text-[42px] font-black leading-[1.02] tracking-[-2px] md:text-[55px]">
              Let&apos;s build something
              <br />
              worth growing.
            </h2>
          </div>

          <div className="relative z-10">
            <p className="max-w-97.5 text-[14px] leading-6 text-white/80">
              Tell us where you are now and where you want to go.
              We&apos;ll help you find the right next step.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[12px] font-bold text-[#5547e9]"
              >
                Start a Project
                <ArrowRight size={14} />
              </Link>

              <a
                href="mailto:hello@depthdigi.com"
                className="text-[12px] font-semibold underline"
              >
                hello@depthdigi.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkCard({
  title,
  subtitle,
  tags,
  variant,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  variant: "charity" | "store" | "product";
}) {
  return (
    <article>
      <div className="relative h-61.25 overflow-hidden rounded-[18px] bg-[#f2f0f7]">
        {variant === "charity" && (
          <div className="absolute inset-5 rotate-[-5deg] rounded-xl bg-white p-4 shadow-lg">
            <div className="h-full rounded-lg bg-linear-to-br from-[#111225] via-[#ef8676] to-[#f5ddd9] p-5">
              <p className="max-w-40 text-[20px] font-black text-white">
                Together for a better tomorrow.
              </p>
            </div>
          </div>
        )}

        {variant === "store" && (
          <div className="absolute inset-5 rounded-xl bg-white p-4 shadow-lg">
            <p className="text-[22px] font-black">Elevate</p>
            <p className="text-[12px] text-[#757286]">Your Everyday</p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="h-14 rounded-md bg-[#eeedf3]"
                />
              ))}
            </div>
          </div>
        )}

        {variant === "product" && (
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="relative flex items-center justify-center bg-[#e7e3de]">
              <span className="absolute left-3 top-3 rounded-md bg-white px-2 py-1 text-[9px]">
                Before
              </span>
              <div className="h-28 w-16 rounded-[40%_40%_25%_25%] bg-[#a87563]" />
            </div>

            <div className="relative flex items-center justify-center bg-white">
              <span className="absolute right-3 top-3 rounded-md bg-white px-2 py-1 text-[9px]">
                After
              </span>
              <div className="h-28 w-16 rounded-[40%_40%_25%_25%] bg-[#b77459] shadow-xl" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-[16px] font-bold">{title}</h3>
          <p className="mt-1 text-[11px] text-[#77758b]">{subtitle}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f3f0ff] px-3 py-1 text-[9px] font-semibold text-[#7562f7]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <ArrowUpRight className="mt-8 text-[#ef7969]" size={17} />
      </div>
    </article>
  );
}

function DarkFeature({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-[#202036] p-7">
      <Icon size={31} className="mb-7 text-[#8d7cff]" />
      <p className="text-[18px] font-bold">{title}</p>
      <p className="text-[16px] text-[#d2d0dd]">{text}</p>
    </div>
  );
}

function Testimonial({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <article className="relative rounded-[18px] border border-[#efedf4] bg-white p-8 shadow-[0_15px_45px_rgba(38,34,81,.05)]">
      <p className="max-w-117.5 text-[17px] leading-6 text-[#555269]">
        “{quote}”
      </p>

      <div className="mt-8 flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-linear-to-br from-[#d9d5c9] to-[#767078]" />

        <div>
          <p className="text-[12px] font-bold">{name}</p>
          <p className="text-[10px] text-[#7c798e]">{role}</p>
        </div>
      </div>

      <span className="absolute bottom-4 right-7 text-17.5 font-black leading-none text-[#f1efff]">
        ”
      </span>
    </article>
  );
}