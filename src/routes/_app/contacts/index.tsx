import { createFileRoute } from "@tanstack/react-router";
import { ClinicMap } from "./-components/clinic-map";
import { ContactForm } from "./-components/contact-form";

export const Route = createFileRoute("/_app/contacts/")({
	component: Contacts,
	head: () => ({
		meta: [
			{
				title: "Contactos",
			},
		],
	}),
});

function Contacts() {
	return (
		<>
			<div className="page-hero">
				<div className="page-shell">
					<p className="mb-3 font-semibold text-primary text-sm uppercase tracking-widest">
						Estamos aqui para ajudar
					</p>
					<h1 className="font-semibold text-4xl text-white md:text-5xl">
						Contactos
					</h1>
					<p className="mt-4 max-w-xl text-white/70">
						Fale connosco e encontre o próximo passo para cuidar de si.
					</p>
				</div>
			</div>
			<div className="page-shell flex flex-col gap-10 py-12 md:py-20 lg:flex-row">
				<div className="w-full space-y-6 lg:w-1/2">
					<div className="space-y-3">
						<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
							Mensagem Direta
						</h3>
						<h2 className="font-semibold text-4xl">Como podemos ajudar?</h2>
						<p className="max-w-96 text-stone-500">
							Preencha o formulário e a nossa equipa entrará em contacto consigo
							assim que possível.
						</p>
					</div>
					<ContactForm />
				</div>
				<div className="w-1/2">
					<ClinicMap />
				</div>
			</div>
		</>
	);
}
