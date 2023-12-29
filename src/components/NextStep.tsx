"use client";

type Props = { color: string; image: string };
export default function NextStep(props: Props) {
    const { color, image } = props;
    return (
        <>
            <div className="next-step" style={{ borderColor: color }}>
                <img
                    src={image}
                    alt=""
                    className="absolute w-32 aspect-video block"
                />
            </div>
            <style jsx>{`
                .next-step:after {
                    border-inline-start-color: ${color};
                }
            `}</style>
        </>
    );
}
