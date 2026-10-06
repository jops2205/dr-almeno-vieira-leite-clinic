import { createFileRoute } from "@tanstack/react-router";
import {
	FaCheck,
	FaClock,
	FaDownload,
	FaEnvelope,
	FaMapPin,
} from "react-icons/fa6";

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

const agreements = [
	"SNS, mediante apresentação de requisição P1 prescrita pelo médico de família",
	"ADSE",
	"Seguros de Saúde",
	"Subsistemas de Saúde",
];

const results = [
	{
		icon: FaDownload,
		title: "App Saúde UNILABS",
		text: "Consulte os seus resultados de forma rápida e segura.",
	},
	{
		icon: FaEnvelope,
		title: "Por e-mail",
		text: "Receba os resultados comodamente na sua caixa de correio.",
	},
	{
		icon: FaMapPin,
		title: "Na clínica",
		text: "Levante os resultados presencialmente, junto da nossa equipa.",
	},
];

function ClinicalLaboratory() {
	return (
		<>
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Análises Clínicas</h1>
			</div>
			<section className="flex gap-12 px-80 pt-24 pb-12">
				<div className="space-y-6">
					<div className="space-y-3">
						<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
							O serviço
						</h3>
						<h2 className="max-w-md font-semibold text-4xl">
							Tudo o que precisa, mais perto de si.
						</h2>
					</div>
					<div className="space-y-1.5 text-sm">
						<p className="max-w-xl text-stone-500">
							A nossa equipa assegura um serviço de análises clínicas simples,
							cuidado e acessível, em parceria com o Grupo UNILABS.
						</p>
						<p className="max-w-xl text-stone-500">
							Para maior comodidade, pode também optar pela colheita ao
							domicílio, mediante marcação prévia.
						</p>
					</div>
				</div>
				<div className="rounded-2xl bg-primary/10 p-6">
					<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
						Acordos e convenções
					</h3>
					<h2 className="mt-3 font-semibold text-3xl tracking-tight">
						Cuidados acessíveis.
					</h2>
					<div className="mt-6 flex flex-col gap-4">
						{agreements.map((agreement) => (
							<div key={agreement} className="flex items-center gap-2">
								<div className="w-fit rounded-full bg-primary p-1 text-white">
									<FaCheck className="size-2.5" />
								</div>
								<span className="text-sm text-stone-500">{agreement}</span>
							</div>
						))}
					</div>
					<p className="mt-6 text-primary text-xs leading-5">
						Análises particulares de acordo com a tabela de preços em vigor.
					</p>
				</div>
			</section>
			<section>
				<div className="flex gap-12 px-80 pb-24">
					<div className="rounded-2xl bg-primary p-6 text-white">
						<FaClock className="size-8" />
						<p className="mt-10 text-sm text-white/75 uppercase tracking-widest">
							Horário de colheitas
						</p>
						<p className="mt-3 font-semibold text-3xl">
							Segunda-feira a sábado
						</p>
						<p className="mt-2 font-medium text-white/75 text-xl">
							08:00h - 11:00h
						</p>
						<p className="mt-8 border-white/20 border-t pt-5 text-sm text-white/75">
							Atendimento por ordem de chegada. Para determinadas análises,
							poderá ser necessário agendamento.
						</p>
					</div>
					<div className="rounded-2xl border border-stone-200 bg-white p-6">
						<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
							Resultados
						</h3>
						<h2 className="mt-3 font-semibold text-3xl">
							Escolha como os quer receber.
						</h2>
						<div className="mt-8 grid grid-cols-3 gap-4">
							{results.map(({ icon: Icon, title, text }) => (
								<div key={title} className="rounded-2xl bg-[#f1f7f5] p-5">
									<Icon className="size-6 text-primary" />
									<h4 className="mt-7 font-semibold text-sm">{title}</h4>
									<p className="mt-2 text-sm text-stone-500 leading-5">
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
