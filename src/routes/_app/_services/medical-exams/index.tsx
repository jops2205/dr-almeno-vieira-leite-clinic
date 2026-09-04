import { createFileRoute } from "@tanstack/react-router";
import { ServicePageContent } from "../service-page-content";

const exams = [
	"Eletrocardiograma",
	"Ecografia",
	"Espirometria",
	"Audiometria",
	"Holter",
	"MAPA",
] as const;

export const Route = createFileRoute("/_app/_services/medical-exams/")({
	component: MedicalExams,
	head: () => ({ meta: [{ title: "Exames Médicos" }] }),
});

function MedicalExams() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Exames Médicos</h1>
			</div>
			<ServicePageContent
				eyebrow="Avaliação clínica"
				title="Tecnologia para decisões mais informadas"
				description="Exames realizados com precisão e conforto, integrados no acompanhamento da sua saúde."
				intro="Fazemos do diagnóstico uma etapa clara e tranquila, com profissionais que explicam cada passo do processo."
				itemLabel="Exames disponíveis"
				items={exams}
			/>
		</>
	);
}
