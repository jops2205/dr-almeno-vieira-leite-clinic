import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Button } from "#/components/button";
import { Input } from "#/components/input";
import { Select } from "#/components/select";
import { specialties } from "#/consts/specialties";

const appointmentFormSchema = z.object({
	name: z.string(),
	email: z.email(),
	phone: z.string(),
	specialty: z.string(),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export function AppointmentForm() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			specialty: "",
		} satisfies AppointmentFormValues,
		validators: { onSubmit: appointmentFormSchema },
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
			<div className="flex gap-6">
				<form.Field name="specialty">
					{(field) => (
						<Select
							label="Especialidade"
							options={specialties}
							name={field.name}
							value={field.state.value}
							onChange={(value) => field.handleChange(value)}
							onBlur={field.handleBlur}
							placeholder="Selecione uma especialidade"
						/>
					)}
				</form.Field>
			</div>
			<form.Subscribe
				selector={(state) => [state.canSubmit, state.isSubmitting]}>
				{([canSubmit, isSubmitting]) => (
					<Button type="submit" disabled={!canSubmit} className="mt-3">
						{!isSubmitting ? "Solicitar Marcação" : "A Solicitar..."}
					</Button>
				)}
			</form.Subscribe>
		</form>
	);
}
