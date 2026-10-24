import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "#/components/button";
import { medicalStaff } from "#/consts/medical-staff";
import {
	dentistrySpecialties,
	type Specialty,
	specialties,
} from "#/consts/specialties";
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

	const dentistrySpecialtiesSet = new Set<string>(dentistrySpecialties);

	const specialtiesWithoutDentistry = specialties.filter(
		(specialty) => !dentistrySpecialtiesSet.has(specialty),
	);

	const hasSearchValue = searchValue.trim().length > 0;
	const hasSelectedSpecialties = selectedSpecialties.length > 0;

	const hasFilters = hasSearchValue || hasSelectedSpecialties;

	const staffGroups = [
		{
			title: "Especialidades Médicas",
			category: "medical",
		},
		{
			title: "Especialidades Não Médicas",
			category: "health",
		},
		{
			title: "Medicina Dentária",
			category: "dentistry",
		},
	] as const;

	return (
		<>
			<section className="flex h-80 items-center justify-center bg-stone-950 p-6">
				<h1 className="text-center font-semibold text-3xl text-white sm:text-4xl">
					Corpo Clínico
				</h1>
			</section>
			<section className="flex justify-center px-6 pt-12 pb-6 sm:px-12 lg:pt-24">
				<div className="flex max-w-7xl flex-col gap-6">
					<div className="max-w-xl space-y-3 text-balance">
						<h3 className="font-semibold text-primary text-xs uppercase tracking-widest sm:text-sm">
							A nossa equipa
						</h3>
						<h2 className="font-semibold text-3xl sm:text-4xl">
							Encontre o seu especialista
						</h2>
						<p className="text-sm text-stone-500 sm:text-base">
							Pesquise por nome ou filtre por especialidade para descobrir os
							profissionais que podem acompanhar o seu próximo passo.
						</p>
					</div>
					<div className="rounded-2xl border border-stone-200 bg-white p-6">
						<div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
							<SearchInput
								value={searchValue}
								onChange={setSearchValue}
								placeholder="Pesquisar por nome..."
							/>
							<Button onClick={handleClearFilters} className="w-fit">
								Limpar Filtros
							</Button>
						</div>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<span className="font-medium text-sm text-stone-500">
								Filtrar por especialidade:
							</span>
							{specialtiesWithoutDentistry.map((specialty) => (
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
				</div>
			</section>
			<div className="flex flex-col items-center gap-12 px-6 pt-6 pb-12 sm:px-12 lg:pb-24">
				{hasFilters ? (
					<section className="w-full max-w-7xl">
						<p className="mb-3.5 font-medium text-sm text-stone-500">
							{`${filteredStaff.length} ${
								filteredStaff.length > 1 ? "resultados" : "resultado"
							}`}
						</p>
						<MedicalStaffList staff={filteredStaff} />
					</section>
				) : (
					staffGroups.map((group) => {
						const groupStaff = medicalStaff.filter(
							(staff) => staff.category === group.category,
						);

						return (
							<section
								key={group.category}
								className="w-full max-w-7xl space-y-6">
								<h2 className="font-semibold text-2xl sm:text-3xl">
									{group.title}
								</h2>
								<MedicalStaffList staff={groupStaff} />
							</section>
						);
					})
				)}
			</div>
		</>
	);
}
