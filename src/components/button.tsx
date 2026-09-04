import { cn } from "../lib/utils";

export function Button({
	type = "button",
	className,
	...props
}: React.ComponentPropsWithRef<"button">) {
	return (
		<button
			type={type}
			className={cn(
				"cursor-pointer rounded-full bg-primary px-4 py-2 font-medium text-white outline-none transition-colors hover:bg-primary/90 active:not-aria-[haspopup]:translate-y-px",
				className,
			)}
			{...props}
		/>
	);
}
