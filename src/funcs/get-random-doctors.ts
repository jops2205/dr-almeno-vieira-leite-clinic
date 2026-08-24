import type { Doctor } from "#/consts/medical-staff";

export const getRandomDoctors = (
	doctors: ReadonlyArray<Doctor>,
	count = 4,
): Doctor[] => {
	const eligibleDoctors = doctors.filter(
		(doctor) => doctor.src && doctor.specialties.length === 1,
	);

	const shuffled = [...eligibleDoctors];

	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled.slice(0, count);
};
