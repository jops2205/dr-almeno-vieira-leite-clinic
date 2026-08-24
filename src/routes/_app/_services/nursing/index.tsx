import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_services/nursing/")({
	component: Nursing,
	head: () => ({
		meta: [
			{
				title: "Enfermagem",
			},
		],
	}),
});

function Nursing() {
	return (
		<div className="grid h-80 place-items-center bg-stone-950">
			<h1 className="font-semibold text-4xl text-white">Enfermagem</h1>
		</div>
	);
}
