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
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Exames Médicos</h1>
			</div>
			<section className="flex justify-between px-80 py-24">
				<div className="space-y-3">
					<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
						Diagnóstico com Confiança
					</h3>
					<h2 className="max-w-md font-semibold text-4xl">
						Avaliação médica com rigor e confiança
					</h2>
					<p className="max-w-xl text-balance text-stone-500">
						Disponibilizamos exames médicos realizados por profissionais
						especializados, com rigor e atenção às necessidades de cada pessoa,
						contribuindo para uma avaliação adequada do seu estado de saúde e
						para um acompanhamento clínico mais completo.
					</p>
				</div>
				<div className="h-fit flex-1 space-y-3 rounded-2xl border border-stone-200 bg-white p-6">
					<h3 className="font-medium text-lg">Os nossos exames</h3>
					<div className="grid grid-cols-2 gap-1.5">
						{medicalExams.map((exam) => (
							<div key={exam} className="flex items-center gap-2">
								<div className="w-fit rounded-full bg-primary p-1 text-white">
									<FaCheck className="size-2.5" />
								</div>
								<span className="text-stone-500">{exam}</span>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="bg-primary px-80 py-24">
				<div className="flex items-end justify-between">
					<div className="space-y-3 text-white">
						<h3 className="font-semibold text-sm uppercase tracking-widest">
							Estamos aqui para si
						</h3>
						<h2 className="max-w-md font-semibold text-4xl">
							Cuide da sua saúde com exames realizados com rigor e confiança
						</h2>
					</div>
					<Link to="/contacts" className="outline-none">
						<Button className="border-2 border-white bg-white text-primary hover:border-white hover:bg-primary hover:text-white">
							Fale connosco
						</Button>
					</Link>
				</div>
			</section>
		</>
	);
}
