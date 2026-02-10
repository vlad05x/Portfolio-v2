import {
    Code2,
    Database,
    Smartphone,
    Palette,
    Zap,
    Shield,
    Globe,
    Layout,
    Server,
    Cloud,
    Cpu,
    BarChart,
} from "lucide-react";

export const iconMap = {
    code2: Code2,
    database: Database,
    smartphone: Smartphone,
    palette: Palette,
    zap: Zap,
    shield: Shield,
    globe: Globe,
    layout: Layout,
    server: Server,
    cloud: Cloud,
    cpu: Cpu,
    barchart: BarChart,
} as const;

export type IconName = keyof typeof iconMap;
