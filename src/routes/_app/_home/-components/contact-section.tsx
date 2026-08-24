import { Link } from "@tanstack/react-router";
import { Button } from "#/components/button";

export function ContactSection() {
	return (
		<section className="bg-primary px-80 py-24">
			<div className="flex items-end justify-between">
				<div className="space-y-3 text-white">
					<h3 className="font-semibold text-sm uppercase tracking-widest">
						Estamos aqui para ajudar
					</h3>
					<h2 className="max-w-md font-semibold text-4xl">Entre em contacto</h2>
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
	);
}
