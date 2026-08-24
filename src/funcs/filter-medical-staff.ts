import type { Doctor } from "#/consts/medical-staff";
import type { Specialty } from "#/consts/specialties";
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

	return staff.filter((doctor) => {
		const searchMatches = normalizeText(doctor.name).includes(
			normalizedSearchValue,
		);

		if (specialties.length === 0) {
			return searchMatches;
		}

		const specialtyMatches = doctor.specialties.some((specialty) =>
			specialties.includes(specialty),
		);

		return searchMatches && specialtyMatches;
	});
};
