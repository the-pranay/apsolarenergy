import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  Factory,
  Home,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export type IconCard = {
  icon: LucideIcon;
  image?: string;
  title: string;
  text: string;
};

export const offerings: IconCard[] = [
  {
    icon: Home,
    image: "/images/offering-home.png",
    title: "Homes",
    text: "Save up to 80% on your home electricity bills.",
  },
  {
    icon: Building2,
    image: "/images/offering-society.png",
    title: "Housing Societies",
    text: "Reduce common-area power costs and add long-term value.",
  },
  {
    icon: Factory,
    image: "/images/offering-commercial.png",
    title: "Commercial",
    text: "Power your business with green energy and save on costs.",
  },
];

export const trustPoints: IconCard[] = [
  {
    icon: BadgeCheck,
    image: "/images/subsidy_real.png",
    title: "Subsidy Guidance",
    text: "We help with documentation and guidance for eligible government solar subsidy.",
  },
  {
    icon: ShieldCheck,
    image: "/images/structure_real.png",
    title: "Strong Structure",
    text: "Wind-ready mounting structures planned for Maharashtra weather conditions.",
  },
  {
    icon: Sparkles,
    image: "/images/installation_real.png",
    title: "Clean Installation",
    text: "Neat wiring, safe earthing and professional finishing on every rooftop.",
  },
  {
    icon: Phone,
    image: "/images/support_real.png",
    title: "Local Support",
    text: "Nagpur-based service assistance after installation, inspection and cleaning.",
  },
];

export const processSteps = [
  {
    title: "Free Site Visit",
    text: "We inspect your rooftop, shadow area, sanctioned load and current electricity bill.",
  },
  {
    title: "Solar Design & Quote",
    text: "You get the right system size, savings estimate, product details and timeline.",
  },
  {
    title: "Installation & Paperwork",
    text: "Our team handles installation, net-metering guidance and subsidy support.",
  },
  {
    title: "Power On & Maintain",
    text: "We commission the system and keep it performing with maintenance support.",
  },
];

export const stats = [
  ["Nagpur", "Primary Service City"],
  ["Maharashtra", "Coverage Area"],
  ["25 Years", "Panel Performance"],
  ["0 Hassle", "End-to-end Support"],
] as const;
