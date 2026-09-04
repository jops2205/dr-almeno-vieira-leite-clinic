import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_services/clinical-laboratory/")({
	component: ClinicalLaboratory,
	head: () => ({
		meta: [
			{
				title: "Análises Clínicas",
			},
		],
	}),
});

function ClinicalLaboratory() {
	return (
		<div className="grid h-80 place-items-center bg-stone-950">
			<h1 className="font-semibold text-4xl text-white">Análises Clínicas</h1>
		</div>
	);
}
