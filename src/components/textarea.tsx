import { useId } from "react";
import { cn } from "../lib/utils";

type TextareaProps = React.ComponentProps<"textarea"> & {
	label: string;
};

export function Textarea({ label, className, ...props }: TextareaProps) {
	const id = useId();

	return (
		<div className="flex flex-col gap-1.5">
			<label htmlFor={id} className="font-medium text-sm">
				{label}
			</label>
			<textarea
				id={id}
				className={cn(
					"min-h-36 resize-none rounded-xs border border-stone-200 bg-white p-3 text-stone-500 outline-none transition-colors focus-within:border-primary",
					className,
				)}
				{...props}
			/>
		</div>
	);
}
