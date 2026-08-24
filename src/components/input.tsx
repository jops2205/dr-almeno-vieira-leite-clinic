import { useId } from "react";
import { cn } from "../lib/utils";

type InputProps = React.ComponentProps<"input"> & {
	label: string;
};

export function Input({
	label,
	type = "text",
	className,
	...props
}: InputProps) {
	const id = useId();

	return (
		<div className="flex w-full flex-col gap-1.5">
			<label htmlFor={id} className="font-medium text-sm">
				{label}
			</label>
			<input
				id={id}
				type={type}
				className={cn(
					"rounded-xs border border-stone-200 bg-white p-3 text-stone-500 outline-none transition-colors focus-within:border-primary",
					className,
				)}
				{...props}
			/>
		</div>
	);
}
