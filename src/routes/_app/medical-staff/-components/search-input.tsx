import { useId } from "react";
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
	const id = useId();

	return (
		<div className="flex w-full max-w-93.5 items-center rounded-full border border-stone-200 bg-white p-2 transition-colors focus-within:border-primary">
			<div className="px-2.5 py-1.5">
				<FaMagnifyingGlass className="text-stone-500" />
			</div>
			<input
				id={id}
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="w-full pr-2.5 text-stone-500 outline-none"
				placeholder={placeholder}
			/>
		</div>
	);
}
