import { createFileRoute, Link } from "@tanstack/react-router";
import { FaHeartPulse } from "react-icons/fa6";
import { Button } from "#/components/button";
import { agreements } from "#/consts/agreements";
import { medicalStaff } from "#/consts/medical-staff";
import { getRandomDoctors } from "#/funcs/get-random-doctors";
import { AgreementCard } from "./-components/agreement-card";
import { DoctorCard } from "./-components/doctor-card";

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
	const randomDoctors = getRandomDoctors(medicalStaff);

	return (
		<>
			<section className="flex min-h-[34rem] flex-col justify-center gap-8 bg-foreground px-4 py-20 md:px-12 lg:px-24">
				<h1 className="max-w-md text-balance font-semibold text-4xl text-white">
					Várias especialidades, um só compromisso: a sua saúde
				</h1>
				<Link to="/appointments" className="outline-none">
					<Button className="w-fit">Marcar a Sua Consulta</Button>
				</Link>
			</section>
			<section className="mx-auto flex w-full max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-20">
				<div className="space-y-6">
					<div className="space-y-3">
						<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
							A Clínica
						</h3>
						<h2 className="max-w-md font-semibold text-4xl">
							Um cuidado próximo, pensado para si.
						</h2>
						<p className="max-w-xl text-balance text-stone-500">
							Na Clínica Dr. Almeno Vieira Leite, colocamos cada pessoa no
							centro. Reunimos várias especialidades num espaço de confiança,
							com acompanhamento próximo e cuidados pensados para si.
						</p>
					</div>
					<div className="flex gap-6">
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
			<section className="mx-auto w-full max-w-7xl bg-stone-100 px-4 py-16 md:px-8 md:py-20">
				<div className="flex items-end justify-between">
					<div className="space-y-3">
						<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
							Corpo Clínico
						</h3>
						<h2 className="max-w-md font-semibold text-4xl">
							Conheça a nossa equipa
						</h2>
						<p className="max-w-xl text-balance text-stone-500">
							Profissionais experientes e dedicados, unidos pelo conhecimento,
							pela excelência e por uma forma próxima e humana de cuidar.
						</p>
					</div>
					<Link to="/medical-staff" className="outline-none">
						<Button>Ver Corpo Clínico</Button>
					</Link>
				</div>
				<div className="mt-9 grid grid-cols-4 gap-6">
					{randomDoctors.map(({ name, specialties, src }) => (
						<DoctorCard
							key={name}
							name={name}
							specialty={specialties[0]}
							src={src}
							alt={name}
						/>
					))}
				</div>
			</section>
			<section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
				<div className="flex items-end justify-between">
					<div className="space-y-3">
						<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
							Acesso simplificado
						</h3>
						<h2 className="max-w-md font-semibold text-4xl">
							Acordos e convenções
						</h2>
						<p className="max-w-xl text-balance text-stone-500">
							Dispomos de acordos com várias entidades para tornar o acesso aos
							cuidados de saúde mais simples e acessível.
						</p>
					</div>
					<Link to="/agreements" className="outline-none">
						<Button>Conhecer os Acordos</Button>
					</Link>
				</div>
				<div className="mt-9 grid grid-cols-4 gap-6">
					{agreements.slice(4, 8).map(({ name, src }) => (
						<AgreementCard key={name} name={name} src={src} />
					))}
				</div>
			</section>
			<section className="mx-auto w-full max-w-7xl bg-primary px-4 py-16 md:px-8 md:py-20">
				<div className="flex items-end justify-between">
					<div className="space-y-3 text-white">
						<h3 className="font-semibold text-sm uppercase tracking-widest">
							Estamos aqui para ajudar
						</h3>
						<h2 className="max-w-md font-semibold text-4xl">
							Entre em contacto
						</h2>
						<p className="max-w-xl">
							Estamos disponíveis para esclarecer as suas dúvidas e ajudá-lo a
							encontrar o cuidado mais adequado às suas necessidades.
						</p>
					</div>
					<Link to="/contacts" className="outline-none">
						<Button className="bg-white text-primary">Ver Contactos</Button>
					</Link>
				</div>
			</section>
		</>
	);
}
