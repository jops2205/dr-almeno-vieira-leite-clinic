import { createFileRoute } from "@tanstack/react-router";
import { ServicePageContent } from "../service-page-content";

const analyses = [
	"Análises de rotina",
	"Hematologia",
	"Bioquímica",
	"Imunologia",
	"Microbiologia",
	"Colheitas",
] as const;

export const Route = createFileRoute("/_app/_services/clinical-laboratory/")({
	component: ClinicalLaboratory,
	head: () => ({ meta: [{ title: "Análises Clínicas" }] }),
});

function ClinicalLaboratory() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Análises Clínicas</h1>
			</div>
			<ServicePageContent
				eyebrow="Diagnóstico seguro"
				title="Resultados que ajudam a cuidar melhor"
				description="Realizamos análises clínicas com rigor, conforto e o acompanhamento necessário em cada momento."
				intro="A qualidade de um diagnóstico começa numa colheita cuidada. Conte com uma equipa preparada e um processo simples."
				itemLabel="Análises e colheitas"
				items={analyses}
			/>
		</>
	);
}
