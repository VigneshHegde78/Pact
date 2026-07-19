import { cn } from "@/core/utils/cn";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { ActivityIndicator, Pressable } from "react-native";
import PactText from "../Text/Text";
import { buttonVariants } from "./buttonVariants";

type ButtonProps = ComponentProps<typeof Pressable> &
	VariantProps<typeof buttonVariants> & {
		title: string;
		loading?: boolean;
		leftIcon?: ReactNode;
		rightIcon?: ReactNode;
	};

const Button = ({
	title,
	loading = false,
	leftIcon,
	rightIcon,
	variant,
	size,
	className,
	disabled,
	...props
}: ButtonProps) => {
	return (
		<Pressable
			disabled={disabled || loading}
			className={cn(
				buttonVariants({ variant, size }),
				(disabled || loading) && "opacity-50",
				className,
			)}
			{...props}
		>
			{loading ? (
				<ActivityIndicator color="white" />
			) : (
				<>
					{leftIcon}
					<PactText
						className={cn(
							"mx-2 font-semibold",
							variant === "primary" || variant === "danger"
								? "text-white"
								: "text-neutral-900",
						)}
					>
						{title}
					</PactText>
					{rightIcon}
				</>
			)}
		</Pressable>
	);
};

export default Button;
