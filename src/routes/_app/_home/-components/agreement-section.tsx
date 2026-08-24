import { Link } from "@tanstack/react-router";
import { Button } from "#/components/button";
import { agreements } from "#/consts/agreements";
import { AgreementCard } from "./agreement-card";

export function AgreementSection() {
	return (
		<section className="px-80 py-24">
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
	);
}
