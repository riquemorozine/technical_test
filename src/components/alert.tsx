import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { TrashIcon } from "@radix-ui/react-icons";

interface AlertProps {
  id: string;
}

export default function Alert({ id }: AlertProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="DeleteButton">
        <TrashIcon color="white" />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Você tem certeza?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            Você realmente deseja excluir este item? Este processo não pode ser
            desfeito.
          </AlertDialog.Description>
          <div className="AlertDialogButtons">
            <AlertDialog.Action asChild>
              <button className="Button">Cancelar</button>
            </AlertDialog.Action>
            <AlertDialog.Cancel asChild>
              <button className="Button--secondary">Deletar</button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
