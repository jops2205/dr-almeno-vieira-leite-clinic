import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/privacy-policy/")({
	component: PrivacyPolicy,
	head: () => ({
		meta: [
			{
				title: "Política de Privacidade",
			},
		],
	}),
});

function PrivacyPolicy() {
	return <div />;
}
