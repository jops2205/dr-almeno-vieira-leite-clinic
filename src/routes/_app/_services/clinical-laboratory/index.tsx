import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../service-page";

export const Route = createFileRoute("/_app/_services/clinical-laboratory/")({
	component: ClinicalLaboratory,
	head: () => ({ meta: [{ title: "Análises Clínicas" }] }),
});

function ClinicalLaboratory() {
	return (
		<ServicePage
			variant="editorial"
			eyebrow="Laboratório clínico"
			title="Resultados que ajudam a decidir melhor."
			intro="Análises clínicas com rigor, clareza e uma experiência simples desde a colheita até à entrega dos resultados."
			description="Preparamos cada etapa com atenção ao conforto e à qualidade técnica, para que a informação do seu exame seja fácil de compreender e útil para a sua equipa de saúde."
			highlights={[
				"Colheitas cuidadas",
				"Resultados seguros",
				"Apoio na interpretação",
			]}
			steps={[
				"Receba as indicações para a colheita.",
				"Faça a análise num ambiente tranquilo.",
				"Consulte os resultados com orientação.",
			]}
		/>
	);
}
