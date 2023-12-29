"use client";
import { ServicesParams } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: ServicesParams) {
    const color = useSearchParams().get("color");
    const title = params.slug.replaceAll("-", " ");
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <img
                src="../images/logo.svg"
                alt="Launching Max"
                className="w-52"
            />
            <div
                className="aspect-video min-w-96 px-10 capitalize text-stone-100 flex items-center justify-center text-4xl shadow-2xl rounded-xl"
                style={{ backgroundColor: `#${color}` }}
            >
                {title}
            </div>
            <Link
                href={"/"}
                className="mt-10 hover:scale-105 duration-100"
                style={{ color: "#" + color }}
            >
                Back to home page
            </Link>
        </div>
    );
}
