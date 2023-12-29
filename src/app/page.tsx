import Skill from "../components/Skill";
import Target from "../components/Target";
import NextStep from "../components/NextStep";
import bigData from "@/appData/bigData";
import { BigDataType } from "@/types";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-[60rem] aspect-video">
                {bigData.map(
                    (
                        { applicant, nextStep, skills, finish }: BigDataType,
                        index: number
                    ) => (
                        <div
                            className={`relative flex ${finish ? "" : "pe-28"}`}
                            key={`skills-${index}`}
                            dir={index % 2 == 0 ? "ltr" : "rtl"}
                        >
                            {applicant && (
                                <Target
                                    // @ts-ignore
                                    title={applicant.title}
                                    // @ts-ignore
                                    icon={applicant.icon}
                                />
                            )}

                            {nextStep && (
                                <NextStep
                                    // @ts-ignore
                                    image={nextStep.image}
                                    // @ts-ignore
                                    color={nextStep.color}
                                />
                            )}
                            {skills.map(
                                (
                                    { title, color, iconTitle, icon },
                                    i: number
                                ) => (
                                    <Skill
                                        key={`skill-item-${i}`}
                                        title={title}
                                        color={color}
                                        iconTitle={iconTitle}
                                        icon={icon}
                                    />
                                )
                            )}

                            {finish && (
                                <Target
                                    // @ts-ignore
                                    title={finish.title}
                                    // @ts-ignore
                                    icon={finish.icon}
                                />
                            )}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
