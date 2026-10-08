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
			<section className="flex min-h-96 flex-col justify-center gap-8 bg-stone-950 px-4 py-16 sm:px-6 md:gap-12 lg:h-120 lg:px-20 lg:py-24 xl:px-80">
				<h1 className="max-w-md text-balance font-semibold text-4xl text-white">
					Várias especialidades, um só compromisso: a sua saúde
				</h1>
				<Link to="/appointments" className="outline-none">
					<Button className="w-fit">Marcar a Sua Consulta</Button>
				</Link>
			</section>
			<section className="flex flex-col gap-10 px-4 py-16 sm:px-6 md:gap-12 lg:flex-row lg:px-20 lg:py-24 xl:px-80">
				<div className="space-y-6">
					<div className="space-y-3">
						<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
							A Clínica
						</h3>
						<h2 className="max-w-md font-semibold text-4xl">
							Um cuidado próximo, pensado para si
						</h2>
						<p className="max-w-xl text-balance text-stone-500">
							Na Clínica Dr. Almeno Vieira Leite, colocamos cada pessoa no
							centro. Reunimos várias especialidades num espaço de confiança,
							com acompanhamento próximo e cuidados pensados para si.
						</p>
					</div>
					<div className="flex flex-col gap-6 sm:flex-row">
						<div className="space-y-0.5">
							<h4 className="font-medium">Equipa Especializada</h4>
							<p className="max-w-80 text-sm text-stone-500">
								Profissionais experientes, dedicados e atentos às suas
								necessidades.
							</p>
						</div>
						<div className="space-y-0.5">
							<h4 className="font-medium">Cuidado Personalizado</h4>
							<p className="max-w-80 text-sm text-stone-500">
								Cada pessoa é única. Por isso, prestamos um cuidado próximo e
								individualizado.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center gap-6 border-l-4 border-l-primary bg-white p-6">
					<FaHeartPulse className="size-7 text-primary" />
					<p className="max-w-md font-medium text-xl">
						“A sua saúde merece um lugar onde se sinta verdadeiramente
						acompanhado.”
					</p>
					<p className="max-w-96 text-stone-500">
						Cuidamos de si com proximidade, atenção e confiança, em cada
						consulta.
					</p>
				</div>
			</section>
			<AboutSection />
			<MedicalStaffSection />
			<AgreementSection />
			<ContactSection />
		</>
	);
}
