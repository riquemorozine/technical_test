import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import "../sass/components/_checkbox.scss";

interface CheckboxProps {
  onCheckedChange: (checked: boolean | "indeterminate") => void;
}

export default function Checkbox({ onCheckedChange }: CheckboxProps) {
  return (
    <>
      <RadixCheckbox.Root
        className="CheckboxRoot"
        onCheckedChange={onCheckedChange}
      >
        <RadixCheckbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </>
  );
}
