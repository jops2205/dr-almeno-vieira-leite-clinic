import { createFileRoute } from "@tanstack/react-router";
import { healthSpecialties } from "#/consts/specialties";
import { ServicePageContent } from "../service-page-content";

export const Route = createFileRoute("/_app/_services/health-specialties/")({
	component: HealthSpecialties,
	head: () => ({ meta: [{ title: "Especialidades Não Médicas" }] }),
});

function HealthSpecialties() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">
					Especialidades Não Médicas
				</h1>
			</div>
			<ServicePageContent
				eyebrow="Bem-estar integral"
				title="Cuidar da saúde é olhar para a pessoa inteira"
				description="Serviços complementares que apoiam o equilíbrio, a autonomia e a qualidade de vida em todas as idades."
				intro="A nossa equipa multidisciplinar trabalha consigo para encontrar estratégias práticas e sustentáveis para se sentir melhor."
				itemLabel="Serviços disponíveis"
				items={healthSpecialties}
			/>
		</>
	);
}
