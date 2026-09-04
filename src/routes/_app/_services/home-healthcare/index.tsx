import { createFileRoute } from "@tanstack/react-router";
import { ServicePageContent } from "../service-page-content";

const homeServices = [
	"Consultas no domicílio",
	"Enfermagem em casa",
	"Colheitas ao domicílio",
	"Acompanhamento de idosos",
	"Cuidados pós-operatórios",
	"Apoio à família",
] as const;

export const Route = createFileRoute("/_app/_services/home-healthcare/")({
	component: HomeHealthcare,
	head: () => ({ meta: [{ title: "Serviço ao Domicílio" }] }),
});

function HomeHealthcare() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">
					Serviço ao Domicílio
				</h1>
			</div>
			<ServicePageContent
				eyebrow="Cuidado onde está"
				title="A sua saúde, no conforto de casa"
				description="Levamos cuidados de saúde até si, com a mesma proximidade, segurança e qualidade da clínica."
				intro="Quando sair de casa não é uma opção, a nossa equipa desloca-se até si para prestar o apoio de que precisa."
				itemLabel="Cuidados no domicílio"
				items={homeServices}
			/>
		</>
	);
}
