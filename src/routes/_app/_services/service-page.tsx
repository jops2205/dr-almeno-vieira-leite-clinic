import { Link } from "@tanstack/react-router";

type ServicePageProps = {
	eyebrow: string;
	title: string;
	intro: string;
	description: string;
	highlights: string[];
	steps: string[];
	variant?: "split" | "cards" | "timeline" | "editorial" | "featured";
	showClinicalStaffLink?: boolean;
};

export function ServicePage({
	eyebrow,
	title,
	intro,
	description,
	highlights,
	steps,
	variant = "cards",
	showClinicalStaffLink = false,
}: ServicePageProps) {
	return (
		<main>
			<section
				className={`px-4 py-20 text-background md:px-12 lg:px-24 ${variant === "featured" ? "bg-primary" : variant === "editorial" ? "bg-primary/90" : "bg-foreground"}`}>
				<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
					<div>
						<p className="mb-4 font-semibold text-primary text-sm uppercase tracking-[0.2em]">
							{eyebrow}
						</p>
						<h1 className="max-w-3xl font-semibold text-4xl leading-tight md:text-6xl">
							{title}
						</h1>
					</div>
					<p className="max-w-md text-background/70 text-lg leading-relaxed">
						{intro}
					</p>
				</div>
			</section>

			<section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
				<div>
					<p className="mb-3 font-semibold text-primary text-sm uppercase tracking-widest">
						Cuidado que acompanha
					</p>
					<h2 className="max-w-md font-semibold text-3xl text-foreground md:text-4xl">
						Informação clara para decidir com tranquilidade.
					</h2>
				</div>
				<div className="flex flex-col gap-8">
					<p className="text-lg text-muted-foreground leading-relaxed">
						{description}
					</p>
					<div
						className={
							variant === "split"
								? "grid gap-4 sm:grid-cols-2"
								: variant === "editorial"
									? "flex flex-col gap-0 divide-y divide-border border-border border-y"
									: variant === "featured"
										? "grid gap-4 sm:grid-cols-3"
										: "grid gap-4 md:grid-cols-3"
						}>
						{highlights.map((item, index) => (
							<article
								className={`flex min-h-32 flex-col justify-between gap-5 p-5 ${variant === "editorial" ? "bg-transparent" : variant === "featured" ? "surface rounded-2xl shadow-sm" : "surface"}`}
								key={item}>
								<span className="font-mono text-primary text-sm">
									0{index + 1}
								</span>
								<h3 className="font-semibold text-foreground text-lg">
									{item}
								</h3>
							</article>
						))}
					</div>
					{showClinicalStaffLink && (
						<Link
							className="inline-flex w-fit items-center gap-2 font-semibold text-primary text-sm transition-opacity hover:opacity-70"
							to="/medical-staff">
							<span>Estas são apenas algumas das nossas áreas</span>
							<span aria-hidden="true">→</span>
							<span className="sr-only">
								Ver todas as especialidades no corpo clínico
							</span>
						</Link>
					)}
				</div>
			</section>

			<section className="bg-primary/10 px-4 py-16 md:px-8 md:py-20">
				<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
					<div>
						<p className="mb-3 font-semibold text-primary text-sm uppercase tracking-widest">
							Como funciona
						</p>
						<h2 className="font-semibold text-3xl text-foreground">
							Um percurso simples, humano e seguro.
						</h2>
					</div>
					<div
						className={
							variant === "timeline" || variant === "editorial"
								? "flex flex-col gap-0"
								: "grid gap-4 sm:grid-cols-3"
						}>
						{steps.map((step, index) => (
							<div
								className={
									variant === "timeline"
										? "flex gap-5 border-border border-b py-5 first:pt-0"
										: "surface p-5"
								}
								key={step}>
								<span className="font-mono text-primary text-sm">
									{String(index + 1).padStart(2, "0")}
								</span>
								<p className="font-medium text-foreground leading-relaxed">
									{step}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-20">
				<div>
					<p className="font-semibold text-primary text-sm uppercase tracking-widest">
						Próximo passo
					</p>
					<h2 className="mt-2 font-semibold text-3xl text-foreground">
						Agende o seu cuidado.
					</h2>
				</div>
				<div className="flex flex-wrap gap-3">
					{showClinicalStaffLink && (
						<Link
							className="rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
							to="/medical-staff">
							Ver corpo clínico
						</Link>
					)}
					<Link
						className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
						to="/appointments">
						Marcar consulta
					</Link>
				</div>
			</section>
		</main>
	);
}

export const serviceContent = {
	medical: {
		eyebrow: "Especialidades médicas",
		title: "Conhecimento clínico para cuidar de si.",
		intro:
			"Consultas especializadas com escuta atenta, avaliação rigorosa e um plano de cuidado feito à sua medida.",
		description:
			"A nossa equipa médica reúne diferentes áreas de especialização para acompanhar prevenção, diagnóstico e tratamento num só lugar.",
		highlights: ["Medicina geral", "Cardiologia", "Ginecologia"],
		steps: [
			"Conte-nos o motivo da consulta.",
			"Encontre o profissional indicado.",
			"Defina consigo o melhor plano.",
		],
	},
	health: {
		eyebrow: "Especialidades de saúde",
		title: "Bem-estar visto por inteiro.",
		intro:
			"Serviços complementares que apoiam o seu equilíbrio físico, emocional e funcional em todas as fases da vida.",
		description:
			"Da nutrição à psicologia, criamos pontes entre diferentes profissionais para que cada decisão seja acompanhada com contexto e cuidado.",
		highlights: ["Nutrição", "Psicologia", "Fisioterapia"],
		steps: [
			"Identificamos as suas necessidades.",
			"Construímos objetivos possíveis.",
			"Acompanhamos a sua evolução.",
		],
	},
	exams: {
		eyebrow: "Exames médicos",
		title: "Respostas para cuidar melhor.",
		intro:
			"Exames realizados com rigor e orientação, para que os resultados sejam úteis no seu percurso de saúde.",
		description:
			"Antes, durante e depois do exame, a nossa equipa explica cada etapa e ajuda a tornar o processo mais simples, seguro e confortável.",
		highlights: ["Avaliação clínica", "Resultados claros", "Orientação médica"],
		steps: [
			"Receba a indicação adequada.",
			"Realize o exame com tranquilidade.",
			"Reveja os resultados com a equipa.",
		],
	},
	nursing: {
		eyebrow: "Enfermagem",
		title: "Cuidado próximo em cada detalhe.",
		intro:
			"Apoio de enfermagem com competência técnica e uma presença humana que faz diferença.",
		description:
			"Oferecemos cuidados de enfermagem pensados para a sua rotina, com atenção à segurança, à autonomia e às necessidades de cada pessoa.",
		highlights: ["Tratamentos", "Acompanhamento", "Educação em saúde"],
		steps: [
			"Avaliamos o seu caso.",
			"Planeamos o cuidado consigo.",
			"Acompanhamos cada evolução.",
		],
		variant: "timeline" as const,
	},
	dentistry: {
		eyebrow: "Medicina dentária",
		title: "Um sorriso saudável começa aqui.",
		intro:
			"Prevenção, tratamento e estética dentária com uma abordagem cuidadosa e transparente.",
		description:
			"Cuidamos da saúde oral com planos personalizados, tecnologia adequada e explicações simples em todas as consultas.",
		highlights: ["Prevenção", "Restauração", "Estética"],
		steps: [
			"Conheça o estado da sua saúde oral.",
			"Escolha o tratamento informado.",
			"Mantenha resultados duradouros.",
		],
		variant: "split" as const,
	},
	home: {
		eyebrow: "Serviço ao domicílio",
		title: "Cuidado de confiança, onde precisa.",
		intro:
			"Leve o acompanhamento clínico para casa, com conforto, segurança e a atenção da nossa equipa.",
		description:
			"O serviço ao domicílio é indicado para quem precisa de apoio sem deslocação, preservando a qualidade e a continuidade do cuidado.",
		highlights: ["Mais conforto", "Apoio familiar", "Cuidado personalizado"],
		steps: [
			"Falamos sobre a sua necessidade.",
			"Organizamos a visita da equipa.",
			"Acompanhamos o cuidado em casa.",
		],
		variant: "timeline" as const,
	},
} as const;

export type ServiceKey = keyof typeof serviceContent;
