import { ReactNode } from "react";

export type Children = { children: ReactNode };

export type ServicesParams = {
    params: {
        slug: string;
    };
};

export type BigDataType = {
    applicant: { title: string; icon: string } | boolean;
    skills: { title: string; iconTitle: string; icon: string; color: string }[];
    nextStep: { image: string; color: string } | boolean;
    finish: { title: string; icon: string } | boolean;
};
