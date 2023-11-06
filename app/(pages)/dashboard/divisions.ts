import { Code, CodeIcon, ImageIcon, ImagePlus, LucideIcon, LucideImagePlus, MessagesSquare, Monitor, MonitorCheck, Music, Music3, Settings, SettingsIcon, Video, VideoIcon } from "lucide-react"

export type Division={
    label: String,
    href: String,
    color?:String,
    icon?: LucideIcon,
}

export const pageDivisions: Division[]=[
    {
       label: "Dashboard",
       href: "/dashboard",
       color: '#2c171e',
       icon: MonitorCheck
    },
    {
       label: "Conversation",
       href: "/conversation",
       color: "#572a2f",
       icon: MessagesSquare
    },
    {
       label: "Image Generation",
       href: "/imagegen",
       color: "#6e3e44",
       icon: LucideImagePlus
    },
    {
       label: "Video Generation",
       href: "/",
       color: "#295b13",
       icon: VideoIcon
    },
    {
       label: "Music Generation",
       href: "/videogen",
       color: "#497735",
       icon: Music3
    },
    {
       label: "Code Generation",
       href: "/codegen",
       color: "#572a2f",
       icon: CodeIcon
    },
    {
       label: "Settings",
       href: "/settings",
       color: "#2c171e",
       icon: SettingsIcon
    },

]