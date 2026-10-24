import type { Doctor } from "#/consts/medical-staff";
import { dentistrySpecialties, type Specialty } from "#/consts/specialties";
import { normalizeText } from "#/funcs/normalize-text";

type FilterMedicalStaffParameters = {
	staff: ReadonlyArray<Doctor>;
	searchValue: string;
	specialties: Specialty[];
};

export const filterMedicalStaff = ({
	staff,
	searchValue,
	specialties,
}: FilterMedicalStaffParameters) => {
	const normalizedSearchValue = normalizeText(searchValue);

	const selectedSpecialties = specialties.flatMap((specialty) =>
		specialty === "Medicina Dentária Geral"
			? [specialty, ...dentistrySpecialties]
			: [specialty],
	);

	return staff.filter((doctor) => {
		const searchMatches = normalizeText(doctor.name).includes(
			normalizedSearchValue,
		);

		if (selectedSpecialties.length === 0) {
			return searchMatches;
		}

		const specialtyMatches = doctor.specialties.some((specialty) =>
			selectedSpecialties.includes(specialty),
		);

		return searchMatches && specialtyMatches;
	});
};
