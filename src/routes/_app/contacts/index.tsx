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
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Contactos</h1>
			</div>
			<div className="flex gap-12 px-80 py-24">
				<div className="w-1/2 space-y-6">
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
