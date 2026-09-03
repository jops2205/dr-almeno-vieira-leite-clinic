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
		<div className="flex flex-col gap-3">
			<span className="block font-semibold text-muted-foreground text-xs uppercase tracking-wider">
				{title}
			</span>
			<div className="flex flex-wrap gap-2">
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
