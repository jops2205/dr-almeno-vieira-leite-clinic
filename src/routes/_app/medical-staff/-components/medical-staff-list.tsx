import type { Doctor } from "#/consts/medical-staff";
import { DoctorCard } from "./doctor-card";

interface MedicalStaffListProps {
	staff: ReadonlyArray<Doctor>;
}

export function MedicalStaffList({ staff }: MedicalStaffListProps) {
	return (
		<div className="grid w-full grid-cols-4 gap-6">
			{staff.map(({ name, specialties, src }) => (
				<DoctorCard
					key={name}
					name={name}
					specialties={specialties}
					src={src}
					alt={name}
				/>
			))}
		</div>
	);
}
