import { createFileRoute } from "@tanstack/react-router";
import { ServicePageContent } from "../service-page-content";

const nursingServices = [
	"Tratamentos e pensos",
	"Administração de terapêutica",
	"Avaliação de sinais vitais",
	"Acompanhamento pós-operatório",
	"Educação para a saúde",
	"Cuidados continuados",
] as const;

export const Route = createFileRoute("/_app/_services/nursing/")({
	component: Nursing,
	head: () => ({ meta: [{ title: "Enfermagem" }] }),
});

function Nursing() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Enfermagem</h1>
			</div>
			<ServicePageContent
				eyebrow="Cuidado próximo"
				title="Apoio clínico com experiência e humanidade"
				description="Serviços de enfermagem pensados para responder às suas necessidades com segurança e tranquilidade."
				intro="A nossa equipa de enfermagem está disponível para acompanhar tratamentos, esclarecer dúvidas e apoiar a sua recuperação."
				itemLabel="Cuidados de enfermagem"
				items={nursingServices}
			/>
		</>
	);
}
