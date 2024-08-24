import React from "react";

import * as Select from "@radix-ui/react-select";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

import { IAuthors } from "../domains/IAuthors";

interface SelectorProps {
  data: IAuthors[];
  onValueChange: (value: string) => void;
}

export default function Selector({ data, onValueChange }: SelectorProps) {
  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Select a author" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="SelectContent"
          position="popper"
          sideOffset={10}
        >
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Label className="SelectLabel">Authors</Select.Label>
              {data.map(({ name, id }) => (
                <SelectItem value={id} key={id}>
                  {name}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef(
  ({ children, ...props }: any, forwardedRef) => {
    return (
      <Select.Item className="SelectItem" {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
