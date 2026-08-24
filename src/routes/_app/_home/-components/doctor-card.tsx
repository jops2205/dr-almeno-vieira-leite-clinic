import type { Specialty } from "#/consts/specialties";

type DoctorCardProps = {
	name: string;
	specialty: Specialty;
	src?: string;
	alt?: string;
};

export function DoctorCard({ name, specialty, src, alt }: DoctorCardProps) {
	return (
		<div className="space-y-3">
			<img
				src={src}
				alt={alt}
				className="rounded-xs object-cover transition-all duration-300 hover:-translate-y-1"
			/>
			<div>
				<h3 className="font-medium">{name}</h3>
				<span className="text-sm text-stone-500">{specialty}</span>
			</div>
		</div>
	);
}
