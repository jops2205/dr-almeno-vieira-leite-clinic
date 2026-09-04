import { createFileRoute } from "@tanstack/react-router";
import { medicalSpecialties } from "#/consts/specialties";
import { ServicePageContent } from "../service-page-content";

export const Route = createFileRoute("/_app/_services/medical-specialties/")({
	component: MedicalSpecialties,
	head: () => ({ meta: [{ title: "Especialidades Médicas" }] }),
});

function MedicalSpecialties() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">
					Especialidades Médicas
				</h1>
			</div>
			<ServicePageContent
				eyebrow="Cuidados especializados"
				title="Acompanhamento médico próximo e personalizado"
				description="Conte com uma equipa clínica experiente para avaliar, acompanhar e tratar cada fase da sua saúde."
				intro="Na Clínica Dr. Almeno Vieira Leite, reunimos diferentes áreas médicas para garantir uma resposta completa, humana e coordenada."
				itemLabel="Áreas médicas"
				items={medicalSpecialties}
			/>
		</>
	);
}
