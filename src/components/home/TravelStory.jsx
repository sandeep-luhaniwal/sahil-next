import React from "react";
import Image from "next/image";

const travelStories = [
    {
        image: "/assets/images/webp/travel-one.webp",
        username: "skylinehunter",
        label: "Instagrammable Spot",
        desc: "Witness the golden hour like never before world’s tallest building",
        distance: "",
    },
    {
        image: "/assets/images/webp/travel-two.webp",
        username: "skylinehunter",
        label: "Instagrammable Spot",
        desc: "Witness the golden hour like never before world’s tallest building",
        distance: "2.5 km away",
    },
    {
        image: "/assets/images/webp/travel-three.webp",
        username: "skylinehunter",
        label: "Instagrammable Spot",
        desc: "Witness the golden hour like never before world’s tallest building",
        distance: "",
    },
    {
        image: "/assets/images/webp/travel-four.webp",
        username: "skylinehunter",
        label: "Instagrammable Spot",
        desc: "Witness the golden hour like never before world’s tallest building",
        distance: "",
    },
];

const TravelStory = ({ engShow }) => {
    return (
        <div className="max-w-[1240px] px-4 mx-auto xl:px-0 relative z-10 py-14 md:py-16 lg:py-20">
            <div
                className={`flex flex-col gap-8 justify-between items-end pb-10 md:pb-12 lg:pb-[50px] 
                    ${engShow ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
                <div className="w-full">
                    <h2 className="text-3xl leading-[1.25] lg:text-4xl xl:text-[45px] font-medium text-center text-black pt-5">
                        {engShow
                            ? "مصمم لسهولة الاستخدام، مبني خصيصًا لك"
                            : "Vloggers & Travel Stories"}
                    </h2>
                    <p className="text-black/65 text-base font-normal pt-2.5 text-center leading-[1.56]">
                        {engShow
                            ? "استكشف المعالم والكنوز المخفية والنكهات المحلية باستخدام تطبيق ذكي..."
                            : "Explore Saudi Arabia through the eyes of passionate travellers and discover hidden gems in Riyadh, Jeddah, and AlUlA."}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] auto-rows-[1fr]">
                <div className="lg:row-span-1">
                    <div className="group relative">
                        <Image
                            src={travelStories[0].image}
                            alt="img"
                            width={393}
                            height={551}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute hidden bottom-0 z-30 p-[15px] group-hover:flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Image src="/assets/images/webp/blog.webp" width={36} height={36} className="rounded-full" alt="blog" />
                                    <span className="font-medium text-white text-base">skylinehunter</span>
                                </div>
                                <p className="text-[#FA9F54] text-sm font-medium">2.5 km away</p>
                            </div>
                            <p className="px-2.5 py-1 text-base font-medium bg-dark-pink max-w-max rounded-lg text-white">Instagrammable Spot</p>
                            <p className="text-sm text-white/80">Witness the golden hour like never before world’s tallest building.</p>
                        </div>
                    </div>

                </div>
                <div className="lg:row-span-1">
                    <div className="group relative">
                        <Image
                            src={travelStories[1].image}
                            alt="img"
                            width={393}
                            height={551}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute hidden bottom-0 z-30 p-[15px] group-hover:flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Image src="/assets/images/webp/blog.webp" width={36} height={36} className="rounded-full" alt="blog" />
                                    <span className="font-medium text-white text-base">skylinehunter</span>
                                </div>
                                <p className="text-[#FA9F54] text-sm font-medium">2.5 km away</p>
                            </div>
                            <p className="px-2.5 py-1 text-base font-medium bg-dark-pink max-w-max rounded-lg text-white">Instagrammable Spot</p>
                            <p className="text-sm text-white/80">Witness the golden hour like never before world’s tallest building.</p>
                        </div>
                    </div>

                </div>
                <div className="grid gap-[30px]">
                    {travelStories.slice(2).map((obj, i) => (
                        <div key={i}>
                            <div className="group relative">
                                <Image
                                    src={obj.image}
                                    alt="img"
                                    width={393}
                                    height={275}
                                    className="w-full group h-auto object-cover"
                                />
                                <div className="absolute hidden bottom-0 z-30 p-[15px] group-hover:flex flex-col gap-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Image src="/assets/images/webp/blog.webp" width={36} height={36} className="rounded-full" alt="blog" />
                                            <span className="font-medium text-white text-base">skylinehunter</span>
                                        </div>
                                        <p className="text-[#FA9F54] text-sm font-medium">2.5 km away</p>
                                    </div>
                                    <p className="px-2.5 py-1 text-base font-medium bg-dark-pink max-w-max rounded-lg text-white">Instagrammable Spot</p>
                                    <p className="text-sm text-white/80">Witness the golden hour like never before world’s tallest building.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TravelStory;
