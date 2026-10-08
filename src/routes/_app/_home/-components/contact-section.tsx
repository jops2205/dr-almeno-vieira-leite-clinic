import { Link } from "@tanstack/react-router";
import { Button } from "#/components/button";

export function ContactSection() {
	return (
		<section className="bg-primary px-4 py-16 sm:px-6 lg:px-20 lg:py-24 xl:px-80">
			<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
				<div className="space-y-3">
					<h3 className="font-semibold text-sm text-white/75 uppercase tracking-widest">
						Estamos aqui para ajudar
					</h3>
					<h2 className="max-w-md font-semibold text-4xl text-white">
						Entre em contacto
					</h2>
					<p className="max-w-xl text-white/75">
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
