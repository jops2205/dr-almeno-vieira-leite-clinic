import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { medicalStaff } from "#/consts/medical-staff";
import { type Specialty, specialtyGroups } from "#/consts/specialties";
import { filterMedicalStaff } from "#/funcs/filter-medical-staff";
import { MedicalStaffList } from "./-components/medical-staff-list";
import { SearchInput } from "./-components/search-input";

export const Route = createFileRoute("/_app/medical-staff/")({
	component: MedicalStaff,
	head: () => ({
		meta: [
			{
				title: "Corpo Clínico",
			},
		],
	}),
});

function MedicalStaff() {
	const [searchValue, setSearchValue] = useState("");

	const [selectedSpecialties, setSelectedSpecialties] = useState<Specialty[]>(
		[],
	);

	const handleClearFilters = () => {
		setSearchValue("");
		setSelectedSpecialties([]);
	};

	const toggleSpecialty = (specialty: Specialty) => {
		setSelectedSpecialties((specialties) => {
			return specialties.includes(specialty)
				? specialties.filter((item) => item !== specialty)
				: [...specialties, specialty];
		});
	};

	const filteredStaff = filterMedicalStaff({
		staff: medicalStaff,
		searchValue,
		specialties: selectedSpecialties,
	});

	return (
		<>
			<div className="page-hero">
				<div className="page-shell">
					<p className="mb-3 font-semibold text-primary text-sm uppercase tracking-widest">
						A nossa equipa
					</p>
					<h1 className="max-w-2xl font-semibold text-4xl text-white md:text-5xl">
						Corpo Clínico
					</h1>
					<p className="mt-4 max-w-xl text-white/70">
						Profissionais dedicados a acompanhar cada etapa do seu cuidado.
					</p>
				</div>
			</div>
			<div className="page-shell flex flex-col gap-8 py-12 md:py-20">
				<div className="space-y-3">
					<h3 className="font-semibold text-primary text-sm uppercase tracking-widest">
						A nossa equipa
					</h3>
					<h2 className="font-semibold text-4xl">
						Encontre o seu especialista
					</h2>
					<p className="max-w-xl text-stone-500">
						Pesquise por nome ou filtre por especialidade para descobrir os
						profissionais que podem acompanhar o seu próximo passo.
					</p>
				</div>
				<div className="surface flex flex-col gap-6 p-4 md:p-6">
					<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<SearchInput
							value={searchValue}
							onChange={setSearchValue}
							placeholder="Pesquisar por nome..."
						/>
						<button
							type="button"
							onClick={handleClearFilters}
							className="self-start rounded-full border border-border px-4 py-2 font-semibold text-muted-foreground text-sm transition-colors hover:border-primary hover:text-primary md:self-auto">
							Limpar filtros
						</button>
					</div>
					<div className="flex flex-wrap items-center gap-2 border-border border-t pt-5">
						<span className="mr-2 font-semibold text-sm">
							Filtrar por área:
						</span>
						{specialtyGroups
							.flatMap(({ specialties }) => specialties)
							.map((specialty) => (
								<button
									key={specialty}
									type="button"
									onClick={() => toggleSpecialty(specialty)}
									className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${selectedSpecialties.includes(specialty) ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"}`}
									aria-pressed={selectedSpecialties.includes(specialty)}>
									{specialty}
								</button>
							))}
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex items-center justify-between">
						<p className="font-semibold text-muted-foreground text-sm">{`${filteredStaff.length} ${filteredStaff.length > 1 ? "resultados encontrados" : "resultado encontrado"}`}</p>
					</div>
					<MedicalStaffList staff={filteredStaff} />
				</div>
			</div>
		</>
	);
}
