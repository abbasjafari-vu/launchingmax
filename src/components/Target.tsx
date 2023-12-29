import tw from "tailwind-styled-components";

type Props = { title: string; icon: string };
export default function Target(props: Props) {
    const { title, icon } = props;
    return (
        <>
            <Container>
                <Icon>
                    <i className={icon}></i>
                </Icon>
                <Title>{title}</Title>
            </Container>
        </>
    );
}

const Container = tw.div`self-end -mb-7 scale-125 z-20 border-[0.15rem] border-gray-500 rounded-full w-28 aspect-square relative overflow-hidden`;
const Title = tw.div`h-2/3 bg-gray-500 flex items-start justify-center text-white font-bold text-lg leading-10`;
const Icon = tw.div`h-1/3 flex items-center justify-center text-gray-600 text-xl`;
