import bigData from "@/appData/bigData";
import slugify from "@/libs/slugify";
import { Children, ServicesParams } from "@/types";

export async function generateStaticParams() {
    let arr = [];
    for (let i = 0; i < bigData.length; i++) {
        for (let j = 0; j < bigData[i].skills.length; j++) {
            const title = bigData[i].skills[j].title;

            arr.push(slugify(title));
        }
    }

    return arr.map((item) => ({ slug: item }));
}
export async function generateMetadata({ params }: ServicesParams) {
    const title = params.slug.replaceAll("-", " ");

    return { title };
}

export default function slugLayout(props: Children) {
    const { children } = props;

    return children;
}
