import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
	return React.createElement(Stack, { screenOptions: { headerShown: false } });
}
