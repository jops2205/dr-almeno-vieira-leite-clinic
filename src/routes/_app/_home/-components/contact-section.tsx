import { Link } from "@tanstack/react-router";
import { Button } from "#/components/button";

export function ContactSection() {
	return (
		<section className="flex justify-center bg-primary px-6 py-12 sm:px-12 lg:py-24">
			<div className="flex max-w-xl flex-col justify-between gap-6 xl:w-full xl:max-w-293 xl:flex-row xl:items-end">
				<div className="space-y-3 text-balance">
					<h3 className="font-semibold text-white/75 text-xs uppercase tracking-widest sm:text-sm">
						Estamos aqui para ajudar
					</h3>
					<h2 className="font-semibold text-3xl text-white sm:text-4xl">
						Entre em contacto
					</h2>
					<p className="max-w-xl text-sm text-white/75 sm:text-base">
						Estamos disponíveis para esclarecer as suas dúvidas e ajudá-lo a
						encontrar o cuidado mais adequado às suas necessidades.
					</p>
				</div>
				<Link to="/contacts" className="outline-none">
					<Button className="border-2 border-white bg-white text-primary hover:border-white hover:bg-primary hover:text-white">
						Ver Contactos
					</Button>
				</Link>
			</div>
		</section>
	);
}
