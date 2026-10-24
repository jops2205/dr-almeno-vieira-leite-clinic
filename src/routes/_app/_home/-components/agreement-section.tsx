import { Link } from "@tanstack/react-router";
import { Button } from "#/components/button";
import { agreements } from "#/consts/agreements";
import { AgreementCard } from "./agreement-card";

export function AgreementSection() {
	return (
		<section className="flex justify-center px-6 py-12 sm:px-12 lg:py-24">
			<div className="flex max-w-xl flex-col xl:w-full xl:max-w-293">
				<div className="flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
					<div className="space-y-3 text-balance">
						<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
							Acesso simplificado
						</h3>
						<h2 className="font-semibold text-3xl sm:text-4xl">
							Acordos e convenções
						</h2>
						<p className="max-w-xl text-sm text-stone-500 sm:text-base">
							Dispomos de acordos com várias entidades para tornar o acesso aos
							cuidados de saúde mais simples e acessível.
						</p>
					</div>
					<Link to="/agreements" className="outline-none">
						<Button>Conhecer os Acordos</Button>
					</Link>
				</div>
				<div className="mt-9 grid grid-cols-2 gap-6 xl:grid-cols-4">
					{agreements.slice(4, 8).map(({ name, src }) => (
						<AgreementCard key={name} name={name} src={src} />
					))}
				</div>
			</div>
		</section>
	);
}
