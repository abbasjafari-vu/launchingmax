export default [
    {
        applicant: { title: "Applicant", icon: "fa-solid fa-user" },
        skills: [
            {
                title: "Idea",
                iconTitle: "fa-solid fa-brain",
                icon: "fa-solid fa-brain",
                color: "#18502C",
            },
            {
                title: "Visual Brand Identity",
                iconTitle: "fa-solid fa-eye",
                icon: "fa-solid fa-eye",
                color: "#3E4243",
            },
            {
                title: "Social Media",
                iconTitle: "fa-solid fa-people-arrows",
                icon: "fa-solid fa-people-arrows",
                color: "#AA3F2B",
            },
            {
                title: "Website",
                iconTitle: "fa-solid fa-blog",
                icon: "fa-solid fa-blog",
                color: "#3E4243",
            },
            {
                title: "PCT",
                iconTitle: "fa-regular fa-rectangle-list",
                icon: "fa-regular fa-rectangle-list",
                color: "#114B94",
            },
        ],
        nextStep: false,
        finish: false,
    },
    {
        applicant: false,
        skills: [
            {
                title: "Completion",
                iconTitle: "fa-solid fa-clipboard-list",
                icon: "fa-solid fa-clipboard-list",
                color: "#3E4243",
            },
            {
                title: "Pitch Deck",
                iconTitle: "fa-brands fa-youtube",
                icon: "fa-brands fa-youtube",
                color: "#18502C",
            },
            {
                title: "Introduction",
                iconTitle: "fa-solid fa-network-wired",
                icon: "fa-solid fa-network-wired",
                color: "#AA3F2B",
            },
            {
                title: "Business",
                iconTitle: "fa-solid fa-briefcase",
                icon: "fa-solid fa-briefcase",
                color: "#3E4243",
            },
            {
                title: "Business plan",
                iconTitle: "fa-solid fa-user-tie",
                icon: "fa-solid fa-user-tie",
                color: "#114B94",
            },
        ],
        nextStep: { image: "./images/map.png", color: "#114B94" },
        finish: false,
    },
    {
        applicant: false,
        skills: [
            {
                title: "CV",
                iconTitle: "fa-solid fa-brain",
                icon: "fa-solid fa-brain",
                color: "#18502C",
            },
            {
                title: "R&D",
                iconTitle: "fa-solid fa-eye",
                icon: "fa-solid fa-eye",
                color: "#3E4243",
            },
            {
                title: "Apply",
                iconTitle: "fa-solid fa-people-arrows",
                icon: "fa-solid fa-people-arrows",
                color: "#3E4243",
            },
            {
                title: "Education",
                iconTitle: "fa-solid fa-blog",
                icon: "fa-solid fa-blog",
                color: "#AA3F2B",
            },
            {
                title: "Letter of Support",
                iconTitle: "fa-regular fa-rectangle-list",
                icon: "fa-regular fa-rectangle-list",
                color: "#3E4243",
            },
        ],
        nextStep: { image: "./images/map.png", color: "#114B94" },
        finish: { title: "Finish", icon: "fa-solid fa-earth-americas" },
    },
];
