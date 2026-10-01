import { FaUserDoctor } from "react-icons/fa6";
import type { Specialty } from "#/consts/specialties";

type DoctorCardProps = {
	name: string;
	specialties: Specialty[];
	src?: string;
	alt?: string;
};

export function DoctorCard({ name, specialties, src, alt }: DoctorCardProps) {
	return (
		<div className="min-w-0 space-y-3">
			<div className="aspect-4/5 overflow-hidden rounded-2xl">
				{src && alt ? (
					<img src={src} alt={alt} className="size-full" />
				) : (
					<div className="grid size-full place-items-center bg-primary/10">
						<FaUserDoctor className="size-20 text-primary" />
					</div>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<span className="font-medium text-xl">{name}</span>
				<div className="flex items-center gap-1.5 text-sm text-stone-500">
					{specialties.map((specialty, index) => (
						<span key={specialty}>
							{index > 0 && " | "}
							{specialty}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
