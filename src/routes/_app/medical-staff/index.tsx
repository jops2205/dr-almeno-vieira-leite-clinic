import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "#/components/button";
import { medicalStaff } from "#/consts/medical-staff";
import { type Specialty, specialties } from "#/consts/specialties";
import { filterMedicalStaff } from "#/funcs/filter-medical-staff";
import { cn } from "#/lib/utils";
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
			<div className="grid h-80 place-items-center bg-stone-950">
				<h1 className="font-semibold text-4xl text-white">Corpo Clínico</h1>
			</div>
			<div className="space-y-6 px-80 py-24">
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
				<div className="rounded-2xl border border-stone-200 bg-white p-6">
					<div className="flex items-center justify-between gap-6">
						<SearchInput
							value={searchValue}
							onChange={setSearchValue}
							placeholder="Pesquisar por nome..."
						/>
						<Button onClick={handleClearFilters}>Limpar Filtros</Button>
					</div>
					<div className="mt-6 flex flex-wrap items-center gap-3">
						<span className="font-medium text-sm text-stone-500">
							Filtrar por especialidade:
						</span>
						{specialties.map((specialty) => (
							<Button
								key={specialty}
								type="button"
								onClick={() => toggleSpecialty(specialty)}
								className={cn(
									"px-3 py-1 text-sm",
									!selectedSpecialties.includes(specialty) &&
										"bg-primary/10 text-primary/60 hover:bg-primary/60 hover:text-white",
								)}
								aria-pressed={selectedSpecialties.includes(specialty)}>
								{specialty}
							</Button>
						))}
					</div>
				</div>
				<div className="flex gap-6">
					<div className="mt-0.5">
						<p className="mb-3.5 font-medium text-sm text-stone-500">{`${filteredStaff.length} ${filteredStaff.length > 1 ? "resultados" : "resultado"}`}</p>
						<MedicalStaffList staff={filteredStaff} />
					</div>
				</div>
			</div>
		</>
	);
}
