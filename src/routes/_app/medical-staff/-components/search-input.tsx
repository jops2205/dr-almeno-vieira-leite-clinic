import { FaMagnifyingGlass } from "react-icons/fa6";

type SearchInputProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
};

export function SearchInput({
	value,
	onChange,
	placeholder,
}: SearchInputProps) {
	return (
		<div className="flex w-full max-w-xl items-center rounded-full border border-border bg-background px-3 py-1.5 transition-colors focus-within:border-primary focus-within:bg-white">
			<div className="px-2.5 py-1.5">
				<FaMagnifyingGlass className="text-stone-500" />
			</div>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-foreground text-sm outline-none placeholder:text-muted-foreground"
				placeholder={placeholder}
			/>
		</div>
	);
}
