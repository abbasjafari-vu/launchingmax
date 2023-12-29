"use client";
import slugify from "@/libs/slugify";
import Link from "next/link";
type Props = {
    color: string;
    iconTitle: string;
    title: string;
    icon: string;
};
export default function Skill(props: Props) {
    const { color, iconTitle, title, icon } = props;

    return (
        <>
            <div className="skill" style={{ borderColor: color }}>
                <Link
                    href={`/services/${slugify(title)}?color=${slugify(color)}`}
                    className="skill-link"
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
                </Link>
                <div className="skill-icon-circle">
                    <i className={icon}></i>
                </div>
            </div>

            <style jsx>
                {`
                    .skill:after {
                        border-inline-start-color: ${color};
                    }
                    .skill-title:hover {
                        color: ${color};
                    }
                `}
            </style>
        </>
    );
}
