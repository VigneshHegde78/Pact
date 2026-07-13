import { cn } from "@/core/utils/cn";
import { VariantProps } from "class-variance-authority";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { textVariants } from "./textVariants";

type PactTextProps = RNTextProps & VariantProps<typeof textVariants>;

const PactText = ({
	variant,
	className,
	children,
	...props
}: PactTextProps) => {
	return (
		<RNText className={cn(textVariants({ variant }), className)} {...props}>
			{children}
		</RNText>
	);
};

export default PactText;
