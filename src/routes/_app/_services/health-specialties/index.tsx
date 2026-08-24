import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_services/health-specialties/")({
	component: HealthSpecialties,
	head: () => ({
		meta: [
			{
				title: "Especialidades Não Médicas",
			},
		],
	}),
});

function HealthSpecialties() {
	return (
		<div className="grid h-80 place-items-center bg-stone-950">
			<h1 className="font-semibold text-4xl text-white">
				Especialidades Não Médicas
			</h1>
		</div>
	);
}
