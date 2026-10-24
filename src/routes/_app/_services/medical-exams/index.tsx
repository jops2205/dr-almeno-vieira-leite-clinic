import { createFileRoute, Link } from "@tanstack/react-router";
import { FaCheck } from "react-icons/fa6";
import { Button } from "#/components/button";
import { medicalExams } from "#/consts/medical-exams";

export const Route = createFileRoute("/_app/_services/medical-exams/")({
	component: MedicalExams,
	head: () => ({
		meta: [
			{
				title: "Exames Médicos",
			},
		],
	}),
});

function MedicalExams() {
	return (
		<>
			<section className="flex h-80 items-center justify-center bg-stone-950 p-6">
				<h1 className="text-center font-semibold text-3xl text-white sm:text-4xl">
					Exames Médicos
				</h1>
			</section>
			<section className="flex justify-center px-6 py-12 sm:px-12 lg:py-24">
				<div className="flex flex-col gap-12 xl:flex-row xl:gap-24">
					<div className="max-w-xl space-y-3">
						<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
							Diagnóstico com confiança
						</h3>
						<h2 className="text-balance font-semibold text-3xl sm:text-4xl">
							Avaliação médica com rigor e confiança
						</h2>
						<p className="text-balance text-sm text-stone-500 sm:text-base">
							Disponibilizamos exames médicos realizados por profissionais
							especializados, com rigor e atenção às necessidades de cada
							pessoa, contribuindo para uma avaliação adequada do seu estado de
							saúde e para um acompanhamento clínico mais completo.
						</p>
					</div>
					<div className="h-fit max-w-xl space-y-3 rounded-2xl border border-stone-200 bg-white p-6">
						<h3 className="text-balance font-medium sm:text-lg">
							Os nossos exames
						</h3>
						<div className="grid xs:grid-cols-2 gap-x-6 gap-y-2">
							{medicalExams.map((exam) => (
								<div key={exam} className="flex items-start gap-2">
									<div className="w-fit rounded-full bg-primary p-1 text-white">
										<FaCheck className="size-2 sm:size-2.5" />
									</div>
									<span className="-mt-0.5 text-balance text-sm text-stone-500 sm:-mt-0.75 sm:text-base">
										{exam}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="flex justify-center bg-primary px-6 py-12 sm:px-12 lg:py-24">
				<div className="flex w-full max-w-xl flex-col gap-12 xl:max-w-[1117.06px] xl:flex-row xl:items-end xl:justify-between">
					<div className="space-y-3 text-white">
						<h3 className="font-semibold text-xs uppercase tracking-widest sm:text-sm">
							Estamos aqui para si
						</h3>
						<h2 className="text-balance font-semibold text-3xl sm:text-4xl">
							Cuide da sua saúde com exames realizados com rigor e confiança
						</h2>
					</div>
					<Link to="/contacts" className="outline-none">
						<Button className="border-2 border-white bg-white text-primary hover:border-white hover:bg-primary hover:text-white">
							Fale Connosco
						</Button>
					</Link>
				</div>
			</section>
		</>
	);
}
