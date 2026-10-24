import { createFileRoute, Link } from "@tanstack/react-router";
import { FaHeartPulse } from "react-icons/fa6";
import { Button } from "#/components/button";
import { AboutSection } from "./-components/about-section";
import { AgreementSection } from "./-components/agreement-section";
import { ContactSection } from "./-components/contact-section";
import { MedicalStaffSection } from "./-components/medical-staff-section";

export const Route = createFileRoute("/_app/_home/")({
	component: Home,
	head: () => ({
		meta: [
			{
				title: "A Clínica",
			},
		],
	}),
});

function Home() {
	return (
		<>
			<section className="flex h-120 flex-col justify-center gap-12 bg-stone-950 px-6 py-12 sm:px-12 lg:px-24 xl:px-42 2xl:px-64">
				<h1 className="max-w-xl text-balance font-semibold text-3xl text-white sm:text-4xl">
					Vários serviços, um só compromisso: a sua saúde!
				</h1>
				<Link to="/appointments" className="w-fit outline-none">
					<Button>Marcar Consulta</Button>
				</Link>
			</section>
			<section className="flex justify-center px-6 py-12 sm:px-12 lg:py-24">
				<div className="flex flex-col gap-12 xl:flex-row xl:gap-24">
					<div className="space-y-6">
						<div className="max-w-xl space-y-3">
							<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
								A Clínica
							</h3>
							<h2 className="text-balance font-semibold text-3xl sm:text-4xl">
								Um cuidado especializado de proximidade
							</h2>
							<p className="text-balance text-sm text-stone-500 sm:text-base">
								Na Clínica Dr. Almeno Vieira Leite, a qualidade dos cuidados de
								saúde é a nossa prioridade. Aliamos a experiência e a
								especialização clínica a uma abordagem humana, próxima e atenta
								às necessidades individuais.
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center gap-3 border-l-4 border-l-primary bg-white p-6 sm:gap-4.5">
						<FaHeartPulse className="size-7 text-primary" />
						<p className="max-w-md text-balance font-medium sm:text-lg">
							“A sua saúde merece um lugar onde se sinta verdadeiramente
							acompanhado.”
						</p>
						<p className="max-w-xs text-balance text-sm text-stone-500 sm:text-base">
							Cuidamos de si com proximidade, atenção e confiança, em cada
							consulta.
						</p>
					</div>
				</div>
			</section>
			<AboutSection />
			<MedicalStaffSection />
			<AgreementSection />
			<ContactSection />
		</>
	);
}
