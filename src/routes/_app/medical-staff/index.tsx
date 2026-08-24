import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { medicalStaff } from "#/consts/medical-staff";
import { type Specialty, specialtyGroups } from "#/consts/specialties";
import { filterMedicalStaff } from "#/funcs/filter-medical-staff";
import { MedicalStaffList } from "./-components/medical-staff-list";
import { SearchInput } from "./-components/search-input";
import { SpecialtyGroup } from "./-components/specialty-group";

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
				<SearchInput
					value={searchValue}
					onChange={setSearchValue}
					placeholder="Pesquisar profissional..."
				/>
				<div className="flex gap-6">
					<div className="min-w-80 space-y-3">
						<div className="flex items-center justify-between">
							<span className="block font-medium">Filtros</span>
							<button
								type="button"
								onClick={handleClearFilters}
								className="cursor-pointer text-sm text-stone-500 transition-colors hover:text-primary">
								Limpar Filtros
							</button>
						</div>
						<div className="space-y-6 rounded-xs border border-stone-200 bg-white p-6">
							{specialtyGroups.map(({ title, specialties }) => (
								<SpecialtyGroup
									key={title}
									title={title}
									specialties={specialties}
									selectedSpecialties={selectedSpecialties}
									onToggleSpecialty={toggleSpecialty}
								/>
							))}
						</div>
					</div>
					<div className="mt-0.5">
						<p className="mb-3.5 text-end text-sm text-stone-500">{`${filteredStaff.length} ${filteredStaff.length > 1 ? "resultados" : "resultado"}`}</p>
						<MedicalStaffList staff={filteredStaff} />
					</div>
				</div>
			</div>
		</>
	);
}
