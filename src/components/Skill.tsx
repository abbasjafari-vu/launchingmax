"use client";
import slugify from "@/libs/slugify";
import Link from "next/link";
import { useState } from "react";
type Props = {
    color: string;
    iconTitle: string;
    title: string;
    icon: string;
};
export default function Skill(props: Props) {
    const { color, iconTitle, title, icon } = props;
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className="skill group" style={{ borderColor: color }}>
                <div
                    className={`skill-link duration-300 ${
                        hover ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="skill-icon-title" style={{ color }}>
                        <i className={iconTitle}></i>
                    </div>
                    <div
                        className="skill-border"
                        style={{ backgroundColor: color }}
                    />
                    <div className={`skill-title`} dir="ltr">
                        {title}
                    </div>
                </div>

                <Link
                    href={`/services/${slugify(title)}?color=${slugify(color)}`}
                    className="flex w-full items-center"
                    style={{ backgroundColor: color }}
                    onMouseOver={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <div className="skill-icon-circle">
                        <i className={icon}></i>
                    </div>
                    <p className="text-xs text-stone-100 flex-1 text-center z-20 ps-2 pe-5 text-nowrap">
                        {title}
                    </p>
                </Link>
            </div>

            <style jsx>
                {`
                    .skill:after {
                        border-inline-start-color: ${color};
                    }
                    .skill-title {
                        color: ${color};
                    }
                `}
            </style>
        </>
    );
}
