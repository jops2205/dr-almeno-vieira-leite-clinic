import { createFileRoute } from "@tanstack/react-router";
import { contacts } from "#/consts/contacts";
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
			<div className="page-shell flex flex-col gap-10 py-12 md:py-20">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{contacts.slice(0, 3).map((contact) => (
						<div
							key={contact.title}
							className="surface flex flex-col gap-4 p-5">
							<div
								className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary"
								aria-hidden="true">
								{contact.icon}
							</div>
							<h2 className="font-semibold text-lg">{contact.title}</h2>
							<div className="flex flex-col gap-1 text-muted-foreground text-sm">
								{contact.items.map((item) => (
									<span key={item}>{item}</span>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
					<div className="w-full space-y-6">
						<div className="space-y-3">
							<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
								Mensagem Direta
							</h3>
							<h2 className="font-semibold text-4xl">Como podemos ajudar?</h2>
							<p className="max-w-96 text-stone-500">
								Preencha o formulário e a nossa equipa entrará em contacto
								consigo assim que possível.
							</p>
						</div>
						<ContactForm />
					</div>
					<div className="w-full">
						<ClinicMap />
						<div className="surface mt-4 flex gap-4 p-5">
							<div
								className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
								aria-hidden="true">
								{contacts[3].icon}
							</div>
							<div>
								<h2 className="font-semibold">Onde estamos</h2>
								<p className="mt-1 text-muted-foreground text-sm">
									{contacts[3].items[0]}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
