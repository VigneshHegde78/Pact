import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { cn } from "@/core/utils/cn";

type ScreenProps = {
	children: ReactNode;
	scroll?: boolean;
	keyboard?: boolean;
	padded?: boolean;
	className?: string;
	contentContainerStyle?: any;
};

const Screen = ({
	children,
	scroll = false,
	keyboard = false,
	padded = true,
	className,
	contentContainerStyle,
}: ScreenProps) => {
	const content = scroll ? (
		<ScrollView
			className="flex-1"
			contentContainerStyle={[padded && { padding: 16 }, contentContainerStyle]}
			keyboardShouldPersistTaps="handled"
			showsVerticalScrollIndicator={false}
		>
			{children}
		</ScrollView>
	) : (
		children
	);

	return (
		<SafeAreaView
			className={cn("flex-1 bg-black", padded && !scroll && "p-4", className)}
		>
			{keyboard ? (
				<KeyboardAvoidingView
					className="flex-1"
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					{content}
				</KeyboardAvoidingView>
			) : (
				content
			)}
		</SafeAreaView>
	);
};

export default Screen;
