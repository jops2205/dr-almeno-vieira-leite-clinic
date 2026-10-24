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
			<div className="flex flex-col gap-0.5 text-balance">
				<span className="font-medium text-sm sm:text-base">{name}</span>
				<div className="flex flex-col text-stone-500 text-xs sm:text-sm">
					{specialties.map((specialty) => (
						<span key={specialty} className="uppercase">
							{specialty}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
