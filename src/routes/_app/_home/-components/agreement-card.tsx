type AgreementCardProps = {
	name: string;
	src: string;
};

export function AgreementCard({ name, src }: AgreementCardProps) {
	return (
		<div className="grid place-items-center rounded-xs border border-stone-200 bg-white px-12 py-9 transition-all duration-300 hover:-translate-y-1">
			<img src={src} alt={name} />
		</div>
	);
}
