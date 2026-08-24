import { useId } from "react";
import { FaCheck } from "react-icons/fa6";
import { cn } from "../lib/utils";

type CheckboxProps = {
	checked: boolean;
	onChange: () => void;
	children: React.ReactNode;
};

export function Checkbox({ checked, onChange, children }: CheckboxProps) {
	const id = useId();

	return (
		<div className="flex items-center gap-1.5">
			<input
				id={id}
				type="checkbox"
				checked={checked}
				onChange={onChange}
				className="sr-only"
			/>
			<div
				className={cn(
					"grid size-4 place-items-center rounded-xs border",
					checked ? "border-primary" : "border-stone-200",
				)}>
				{checked && <FaCheck className="size-2.5 text-primary" />}
			</div>
			<label
				htmlFor={id}
				className={cn(
					"cursor-pointer text-sm text-stone-500",
					checked && "text-[#1C1917]",
				)}>
				{children}
			</label>
		</div>
	);
}
