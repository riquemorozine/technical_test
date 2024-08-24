import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalButtonProps {
  children: React.ReactNode;
  name: string;
}

export default function ModalButton({ children, name }: ModalButtonProps) {
  return (
    <Dialog.Root>
      {children}

      <Dialog.Trigger>{name}</Dialog.Trigger>
    </Dialog.Root>
  );
}
