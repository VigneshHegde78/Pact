import { Tabs } from "expo-router";
import { House, Receipt, ShoppingBasket, User } from "lucide-react-native";

export default function RootLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
				}}
			/>

			<Tabs.Screen
				name="expenses"
				options={{
					title: "Expenses",
					tabBarIcon: ({ color, size }) => (
						<Receipt color={color} size={size} />
					),
				}}
			/>

			<Tabs.Screen
				name="groceries"
				options={{
					title: "Groceries",
					tabBarIcon: ({ color, size }) => (
						<ShoppingBasket color={color} size={size} />
					),
				}}
			/>

			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
				}}
			/>
		</Tabs>
	);
}
