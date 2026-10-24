import type { Doctor } from "#/consts/medical-staff";

export const getRandomDoctors = (
	doctors: ReadonlyArray<Doctor>,
	count = 4,
): Doctor[] => {
	const eligibleDoctors = doctors.filter(
		(doctor) => doctor.src && doctor.specialties.length === 1,
	);

	const shuffledDoctors = [...eligibleDoctors];

	for (let i = shuffledDoctors.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[shuffledDoctors[i], shuffledDoctors[j]] = [
			shuffledDoctors[j],
			shuffledDoctors[i],
		];
	}

	return shuffledDoctors.slice(0, count);
};
