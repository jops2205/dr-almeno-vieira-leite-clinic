import { Checkbox } from "#/components/checkbox";
import type { Specialty } from "#/consts/specialties";

type SpecialtyGroupProps = {
	title: string;
	specialties: ReadonlyArray<Specialty>;
	selectedSpecialties: Specialty[];
	onToggleSpecialty: (specialty: Specialty) => void;
};

export function SpecialtyGroup({
	title,
	specialties,
	selectedSpecialties,
	onToggleSpecialty,
}: SpecialtyGroupProps) {
	return (
		<div className="space-y-3">
			<span className="block font-medium">{title}</span>
			<div className="space-y-1.5">
				{specialties.map((specialty) => (
					<Checkbox
						key={specialty}
						checked={selectedSpecialties.includes(specialty)}
						onChange={() => onToggleSpecialty(specialty)}>
						{specialty}
					</Checkbox>
				))}
			</div>
		</div>
	);
}
