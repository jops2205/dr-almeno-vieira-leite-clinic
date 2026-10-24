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
				"cursor-pointer text-nowrap rounded-full bg-primary px-4 py-1.5 font-medium text-sm text-white outline-none transition-colors hover:bg-primary/90 active:not-aria-[haspopup]:translate-y-px sm:py-2 sm:text-base",
				className,
			)}
			{...props}
		/>
	);
}
