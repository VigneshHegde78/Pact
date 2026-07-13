import { cva } from "class-variance-authority";
export const textVariants = cva("", {
	variants: {
		variant: {
			display: "text-4xl font-bold text-neutral-900",
			heading: "text-3xl font-bold text-neutral-900",
			title: "text-2xl font-semibold text-neutral-900",
			subtitle: "text-lg font-medium text-neutral-700",
			body: "text-base text-neutral-800",
			caption: "text-sm text-neutral-500",
			label: "text-xs font-medium uppercase text-neutral-500",
		},
	},

	defaultVariants: {
		variant: "body",
	},
});
