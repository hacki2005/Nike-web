import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '2k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '1250k+', label: 'Customers' },
];

export const products = [
    {
        id: 1,
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        type: "Running",
        description: "Engineered for speed and comfort, the Air Jordan-01 features breathable mesh and responsive cushioning — perfect for daily runs and light jogging.",
    },
    {
        id: 2,
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        type: "Basketball",
        description: "Built with reinforced ankle support and impact-absorbing soles, the Air Jordan-10 is designed for explosive movement on the court.",
    },
    {
        id: 3,
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        type: "Training",
        description: "A versatile training shoe with a sturdy grip and flexible build, ideal for gym sessions, cross-training, and everyday workouts.",
    },
    {
        id: 4,
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        type: "Lifestyle",
        description: "Combining sleek style with all-day comfort, the Air Jordan-001 is made for casual wear and everyday confidence.",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];