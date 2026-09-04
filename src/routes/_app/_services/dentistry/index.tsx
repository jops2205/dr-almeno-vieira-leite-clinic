import { createFileRoute } from "@tanstack/react-router";
import { dentistrySpecialties } from "#/consts/specialties";
import { ServicePageContent } from "../service-page-content";

export const Route = createFileRoute("/_app/_services/dentistry/")({
	component: Dentistry,
	head: () => ({ meta: [{ title: "Medicina Dentária" }] }),
});

function Dentistry() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Medicina Dentária</h1>
			</div>
			<ServicePageContent
				eyebrow="Saúde oral"
				title="Um sorriso saudável começa com prevenção"
				description="Tratamos a sua saúde oral com planos personalizados, tecnologia e uma relação de confiança."
				intro="Da prevenção aos tratamentos especializados, cuidamos do seu sorriso com atenção aos detalhes e às suas necessidades."
				itemLabel="Tratamentos dentários"
				items={dentistrySpecialties}
			/>
		</>
	);
}
