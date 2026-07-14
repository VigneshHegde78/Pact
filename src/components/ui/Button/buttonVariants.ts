import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"items-center justify-center rounded-xl flex-row",
	{
		variants: {
			variant: {
				primary: "bg-indigo-600",
				secondary: "bg-neutral-200",
				outline: "border border-neutral-300, bg-transparent",
				ghost: "bg-transparent",
				danger: "bg-red-500",
			},
			size: {
				sm: "h-10 px-4",
				md: "h-12 px-5",
				lg: "h-14 px-6",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);
