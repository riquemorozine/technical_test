import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { TrashIcon } from "@radix-ui/react-icons";
import { useBook } from "../contexts/BookContext";
import { useAuthor } from "../contexts/AuthorContext";

interface AlertProps {
  id: string;
  type: "Books" | "Authors";
}

export default function Alert({ id, type }: AlertProps) {
  const { deleteBook } = useBook();
  const { deleteAuthor } = useAuthor();

  const handleDelete = () => {
    if (type === "Books") {
      deleteBook(id);
    }

    deleteAuthor(id);
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="Button Button--small Button--secondary">
        <TrashIcon color="white" />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="Text--bold">
            Você tem certeza?
          </AlertDialog.Title>
          <AlertDialog.Description className="Text--small Text--secondary">
            Você realmente deseja excluir este item? <br /> Este processo não
            pode ser desfeito.
          </AlertDialog.Description>
          <div className="AlertDialogButtons">
            <AlertDialog.Action asChild>
              <button className="Button Button--medium">Cancelar</button>
            </AlertDialog.Action>
            <AlertDialog.Cancel asChild onClick={handleDelete}>
              <button className="Button Button--secondary Button--medium">
                Deletar
              </button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
