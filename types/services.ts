import type { IconName } from "@/lib/icon-map";

export type ServiceItem = {
    _key: string;
    title: string;
    description?: string;
    iconName?: IconName;
};

export type ServiceCard = {
    _key: string;
    categoryTitle: string;
    iconName?: IconName;
    items: ServiceItem[];
};

export type ServicesDocument = {
    title: string;
    subtitle?: string;
    cards: ServiceCard[];
    technologies?: TechnologyGroup[];
};
export type TechnologyItem = {
    _key: string;
    name: string;
    description?: string;
    iconName?: IconName;
};

export type TechnologyGroup = {
    _key: string;
    title: string;
    iconName?: IconName;
    items: TechnologyItem[];
};