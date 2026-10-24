import type { Doctor } from "#/consts/medical-staff";
import { DoctorCard } from "./doctor-card";

interface MedicalStaffListProps {
	staff: ReadonlyArray<Doctor>;
}

export function MedicalStaffList({ staff }: MedicalStaffListProps) {
	return (
		<div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
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
