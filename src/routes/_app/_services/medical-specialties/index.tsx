import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_services/medical-specialties/")({
	component: MedicalSpecialties,
	head: () => ({
		meta: [
			{
				title: "Especialidades Médicas",
			},
		],
	}),
});

function MedicalSpecialties() {
	return (
		<div className="grid h-80 place-items-center bg-stone-950">
			<h1 className="font-semibold text-4xl text-white">
				Especialidades Médicas
			</h1>
		</div>
	);
}
