import { Screen } from "@/components/layout/Screen";
import { Button } from "@/components/ui/Button";

<Screen className="justify-center gap-4">
	<Button title="Primary" onPress={() => {}} />

	<Button title="Secondary" variant="secondary" />

	<Button title="Outline" variant="outline" />

	<Button title="Ghost" variant="ghost" />

	<Button title="Delete" variant="danger" />

	<Button title="Loading..." loading />
</Screen>;
