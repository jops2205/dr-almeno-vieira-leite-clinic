import * as SelectPrimitive from "@radix-ui/react-select";
import { useId } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

type SelectProps = {
	label: string;
	options: ReadonlyArray<string>;
	name: string;
	value: string;
	onChange: (value: string) => void;
	onBlur: React.FocusEventHandler<HTMLSpanElement>;
	disabled?: boolean;
	placeholder?: string;
};

export function Select({
	label,
	options,
	name,
	value,
	onChange,
	onBlur,
	disabled,
	placeholder,
}: SelectProps) {
	const id = useId();

	return (
		<div className="flex w-full flex-col gap-1.5">
			<label htmlFor={id} className="font-medium text-sm">
				{label}
			</label>
			<SelectPrimitive.Root
				name={name}
				value={value}
				onValueChange={onChange}
				disabled={disabled}>
				<SelectPrimitive.Trigger
					id={id}
					className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-3 text-stone-500 outline-none transition-colors focus-within:border-primary">
					<SelectPrimitive.Value placeholder={placeholder} onBlur={onBlur} />
					<SelectPrimitive.Icon>
						<FaChevronDown className="size-3" />
					</SelectPrimitive.Icon>
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Content
						position="popper"
						sideOffset={6}
						className="data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 max-h-80 w-(--radix-select-trigger-width) rounded-2xl border border-stone-200 bg-white p-6 text-stone-500 data-[state=closed]:animate-out data-[state=open]:animate-in">
						<SelectPrimitive.Viewport className="flex flex-col gap-3">
							{options.map((option) => (
								<SelectPrimitive.Item
									key={option}
									value={option}
									className="flex cursor-pointer items-center justify-between text-sm text-stone-500 outline-none hover:text-[#1C1917] data-[state=checked]:text-[#1C1917] data-highlighted:text-[#1C1917]">
									<SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
									<SelectPrimitive.ItemIndicator>
										<FaCheck className="size-3" />
									</SelectPrimitive.ItemIndicator>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</SelectPrimitive.Portal>
			</SelectPrimitive.Root>
		</div>
	);
}
