type AgreementCardProps = {
	name: string;
	src: string;
};

export function AgreementCard({ name, src }: AgreementCardProps) {
	return (
		<div className="grid place-items-center rounded-2xl border border-stone-200 bg-white p-6 sm:px-12 sm:py-9">
			<img src={src} alt={name} />
		</div>
	);
}
