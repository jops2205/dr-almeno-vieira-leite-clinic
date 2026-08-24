import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Button } from "#/components/button";
import { Input } from "#/components/input";
import { Textarea } from "#/components/textarea";

const contactFormSchema = z.object({
	name: z.string(),
	email: z.email(),
	phone: z.string(),
	message: z.string(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		} satisfies ContactFormValues,
		validators: { onSubmit: contactFormSchema },
		onSubmit: async ({ value }) => {
			console.log(value);
		},
	});

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				event.stopPropagation();

				form.handleSubmit();
			}}
			className="space-y-3">
			<form.Field name="name">
				{(field) => (
					<Input
						label="Nome"
						name={field.name}
						value={field.state.value}
						onChange={(e) => field.handleChange(e.target.value)}
						onBlur={field.handleBlur}
						placeholder="Introduza o seu nome"
					/>
				)}
			</form.Field>
			<div className="flex gap-6">
				<form.Field name="email">
					{(field) => (
						<Input
							label="E-mail"
							type="email"
							name={field.name}
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							onBlur={field.handleBlur}
							placeholder="Introduza o seu e-mail"
						/>
					)}
				</form.Field>
				<form.Field name="phone">
					{(field) => (
						<Input
							label="Telefone"
							name={field.name}
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							onBlur={field.handleBlur}
							placeholder="Introduza o seu telefone"
						/>
					)}
				</form.Field>
			</div>
			<form.Field name="message">
				{(field) => (
					<Textarea
						label="Mensagem"
						name={field.name}
						value={field.state.value}
						onChange={(e) => field.handleChange(e.target.value)}
						onBlur={field.handleBlur}
						placeholder="Introduza a sua mensagem"
					/>
				)}
			</form.Field>
			<form.Subscribe
				selector={(state) => [state.canSubmit, state.isSubmitting]}>
				{([canSubmit, isSubmitting]) => (
					<Button type="submit" disabled={!canSubmit} className="mt-3">
						{!isSubmitting ? "Enviar Mensagem" : "A Enviar..."}
					</Button>
				)}
			</form.Subscribe>
		</form>
	);
}
