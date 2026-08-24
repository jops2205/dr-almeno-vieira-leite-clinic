import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/_services/medical-exams/")({
	component: MedicalExams,
	head: () => ({
		meta: [
			{
				title: "Exames Médicos",
			},
		],
	}),
});

function MedicalExams() {
	return (
		<div className="grid h-80 place-items-center bg-stone-950">
			<h1 className="font-semibold text-4xl text-white">Exames Médicos</h1>
		</div>
	);
}
