import { Link, createFileRoute } from "@tanstack/react-router";
import {
	FiArrowRight,
	FiCheck,
	FiClock,
	FiDownload,
	FiHome,
	FiMail,
	FiMapPin,
	FiPhone,
	FiShield,
} from "react-icons/fi";
import { Button } from "#/components/button";

export const Route = createFileRoute("/_app/_services/clinical-laboratory/")({
	component: ClinicalLaboratory,
	head: () => ({
		meta: [
			{ title: "Análises Clínicas | Clínica Dr. Almeno Vieira Leite" },
			{
				name: "description",
				content:
					"Análises clínicas na Clínica Dr. Almeno Vieira Leite, em parceria com o Grupo UNILABS. Colheitas na clínica e ao domicílio.",
			},
		],
	}),
});

const results = [
	{ icon: FiDownload, title: "App Saúde Unilabs", text: "Consulte os seus resultados de forma rápida e segura." },
	{ icon: FiMail, title: "Por e-mail", text: "Receba os resultados comodamente na sua caixa de correio." },
	{ icon: FiMapPin, title: "Na clínica", text: "Levante os resultados presencialmente, junto da nossa equipa." },
];

const agreements = [
	"SNS, mediante apresentação de requisição P1 prescrita pelo médico de família",
	"ADSE",
	"Seguros de saúde",
	"Subsistemas de saúde",
];

function ClinicalLaboratory() {
	return (
		<div className="overflow-hidden bg-[#f7faf9] text-stone-900">
			<section className="relative isolate bg-[#e7f2ef]">
				<div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-28">
					<div className="max-w-2xl">
						<p className="mb-5 flex items-center gap-2 font-semibold text-primary text-sm uppercase tracking-[0.18em]"><span className="size-2 rounded-full bg-primary" /> Cuide da sua saúde</p>
						<h1 className="max-w-xl font-semibold text-5xl leading-[1.05] tracking-tight sm:text-7xl">Análises clínicas com cuidado e confiança.</h1>
						<p className="mt-7 max-w-lg text-lg text-stone-600 leading-8">Em parceria com o Grupo <strong className="text-stone-900">UNILABS</strong>, disponibilizamos análises clínicas na nossa clínica e colheitas ao domicílio.</p>
						<div className="mt-9 flex flex-wrap gap-4">
							<Link to="/appointments"><Button className="px-6 py-3">Marcar colheita ao domicílio <FiArrowRight className="ml-2 inline" /></Button></Link>
							<a href="#horario" className="rounded-full border border-stone-300 bg-white/70 px-6 py-3 font-medium text-stone-700 transition hover:border-primary hover:text-primary">Ver horário</a>
						</div>
					</div>
					<div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[3rem] bg-white p-8 shadow-[0_24px_70px_rgba(15,118,110,0.12)]">
						<div className="absolute inset-8 rounded-[2.2rem] border border-primary/10" />
						<div className="relative flex size-48 items-center justify-center rounded-full bg-primary/10"><FiShield className="size-24 text-primary" /></div>
						<div className="absolute right-7 top-12 rounded-2xl bg-white px-4 py-3 shadow-lg"><p className="font-semibold text-primary text-sm">Resultados seguros</p><p className="text-stone-500 text-xs">Sempre consigo</p></div>
						<div className="absolute bottom-12 left-7 rounded-2xl bg-primary px-4 py-3 text-white shadow-lg"><p className="font-semibold text-sm">UNILABS</p><p className="text-white/70 text-xs">Parceiro de confiança</p></div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
				<div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
					<div><p className="font-semibold text-primary text-sm uppercase tracking-[0.18em]">O serviço</p><h2 className="mt-4 font-semibold text-4xl tracking-tight">Tudo o que precisa, mais perto de si.</h2></div>
					<div className="max-w-2xl text-stone-600 text-lg leading-8"><p>A nossa equipa assegura um serviço de análises clínicas simples, cuidado e acessível, em parceria com o Grupo UNILABS.</p><p className="mt-5">Para maior comodidade, pode também optar pela colheita ao domicílio, mediante marcação prévia.</p></div>
				</div>

				<div id="horario" className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
					<div className="rounded-[2rem] bg-primary p-8 text-white sm:p-10"><FiClock className="size-8" /><p className="mt-10 text-white/70 text-sm uppercase tracking-[0.15em]">Horário de colheitas</p><p className="mt-3 font-semibold text-3xl">Segunda-feira a sábado</p><p className="mt-2 font-medium text-white/80 text-xl">08:00h – 11:00h</p><p className="mt-8 border-white/20 border-t pt-5 text-white/75 text-sm leading-6">Atendimento por ordem de chegada. Para determinadas análises, poderá ser necessário agendamento.</p></div>
					<div className="rounded-[2rem] border border-stone-200 bg-white p-8 sm:p-10"><p className="font-semibold text-primary text-sm uppercase tracking-[0.15em]">Resultados</p><h3 className="mt-3 font-semibold text-3xl tracking-tight">Escolha como os quer receber.</h3><div className="mt-8 grid gap-4 sm:grid-cols-3">{results.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl bg-[#f1f7f5] p-5"><Icon className="size-6 text-primary" /><h4 className="mt-7 font-semibold text-sm">{title}</h4><p className="mt-2 text-stone-500 text-sm leading-5">{text}</p></div>)}</div></div>
				</div>

				<div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
					<div className="flex flex-col justify-between gap-8 rounded-[2rem] bg-[#dceee9] p-8 sm:p-10"><div><div className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary"><FiHome className="size-6" /></div><h3 className="mt-8 font-semibold text-3xl tracking-tight">Faça as suas análises no conforto da sua casa.</h3><p className="mt-4 max-w-xl text-stone-600 leading-7">As colheitas ao domicílio estão disponíveis mediante marcação prévia, para que evite deslocações e mantenha o acompanhamento de que precisa.</p></div><Link to="/appointments"><Button className="w-fit bg-stone-900 px-6 py-3 hover:bg-stone-800">Marcar colheita ao domicílio <FiArrowRight className="ml-2 inline" /></Button></Link></div>
					<div className="rounded-[2rem] bg-stone-900 p-8 text-white sm:p-10"><p className="font-semibold text-primary-foreground/70 text-sm uppercase tracking-[0.15em]">Acordos e convenções</p><h3 className="mt-3 font-semibold text-3xl tracking-tight">Cuidados acessíveis.</h3><ul className="mt-8 flex flex-col gap-4">{agreements.map((agreement) => <li key={agreement} className="flex gap-3 text-stone-300 text-sm leading-5"><FiCheck className="mt-0.5 size-4 shrink-0 text-teal-300" />{agreement}</li>)}</ul><p className="mt-7 border-stone-700 border-t pt-5 text-stone-400 text-xs leading-5">Análises particulares de acordo com a tabela de preços em vigor.</p></div>
				</div>
			</section>

			<section className="bg-white px-6 py-20 sm:px-10 lg:px-16"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#e7f2ef] p-8 sm:p-12 md:flex-row md:items-center"><div><p className="font-semibold text-primary text-sm uppercase tracking-[0.15em]">Estamos aqui para ajudar</p><h2 className="mt-3 font-semibold text-4xl tracking-tight">Precisa de realizar análises clínicas?</h2><p className="mt-3 text-stone-600">Fale connosco e encontre a opção mais conveniente para si.</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link to="/contacts"><Button className="bg-stone-900 px-6 py-3 hover:bg-stone-800"><FiPhone className="mr-2 inline" /> Contactar</Button></Link><Link to="/appointments"><Button className="px-6 py-3">Marcar colheita</Button></Link></div></div></section>
		</div>
	);
}
