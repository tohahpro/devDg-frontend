export type Category =
    | "All"
    | "Web Development"
    | "SEO"
    | "Product Photo Editing";


export interface IProject {
    title: string;
    description: string;
    image: string;
    categories: string[];
    features: string[];
    type: Category;
};