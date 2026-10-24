import { createFileRoute } from "@tanstack/react-router";
import { FaClock } from "react-icons/fa6";
import { laboratoryResults } from "#/consts/clinical-laboratory";
import { ServiceAndAgreementsSection } from "./-components/service-and-agreements-section";

export const Route = createFileRoute("/_app/_services/clinical-laboratory/")({
	component: ClinicalLaboratory,
	head: () => ({
		meta: [
			{
				title: "Análises Clínicas",
			},
		],
	}),
});

function ClinicalLaboratory() {
	return (
		<>
			<section className="flex h-80 items-center justify-center bg-stone-950 p-6">
				<h1 className="text-center font-semibold text-3xl text-white sm:text-4xl">
					Análises Clínicas
				</h1>
			</section>
			<ServiceAndAgreementsSection />
			<section className="flex justify-center px-6 pt-6 pb-12 sm:px-12 lg:pt-0 lg:pb-24 xl:pt-12">
				<div className="flex flex-col gap-12 sm:max-w-[667.16px] xl:max-w-[1339.16px] xl:flex-row xl:gap-24">
					<div className="text-balance rounded-2xl bg-primary p-6 text-white xl:w-full xl:max-w-xl">
						<FaClock className="size-6 sm:size-9" />
						<p className="mt-6 text-white/75 text-xs uppercase tracking-widest sm:text-sm">
							Horário de colheitas
						</p>
						<p className="mt-3 font-semibold text-3xl sm:text-4xl">
							Segunda-feira a sábado
						</p>
						<p className="mt-3 font-medium text-lg text-white/75 sm:text-xl">
							08:00h - 11:00h
						</p>
						<p className="mt-6 border-white/20 border-t pt-6 text-white/75 text-xs sm:text-sm">
							Atendimento por ordem de chegada. Para determinadas análises,
							poderá ser necessário agendamento.
						</p>
					</div>
					<div className="rounded-2xl border border-stone-200 bg-white p-6">
						<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
							Resultados
						</h3>
						<h2 className="mt-3 text-balance font-semibold text-3xl sm:text-4xl">
							Escolha como os quer receber
						</h2>
						<div className="mt-6 grid grid-cols-1 gap-3 xl:grid-cols-3">
							{laboratoryResults.map(({ icon: Icon, title, text }) => (
								<div key={title} className="rounded-2xl bg-primary/10 p-6">
									<Icon className="size-6 text-primary" />
									<h4 className="mt-6 font-semibold text-sm sm:text-base">
										{title}
									</h4>
									<p className="mt-1.5 text-balance text-stone-500 text-xs sm:mt-2 sm:text-sm">
										{text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
