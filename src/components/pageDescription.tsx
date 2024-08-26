import CreateAuthorModal from "./authors/createAuthorModal";
import CreateBookModal from "./books/createBookModal";

interface IPageDescriptionProps {
  title: string;
  description: string;
  type: "Books" | "Authors";
}

export default function PageDescription({
  title,
  description,
  type,
}: IPageDescriptionProps) {
  return (
    <div className="pageDescriptionContainer">
      <div className="pageDescriptionTexts">
        <h1 className="Text Text--bold">{title}</h1>
        <p className="Text Text--medium">{description}</p>
      </div>

      {type === "Books" ? <CreateBookModal /> : <CreateAuthorModal />}
    </div>
  );
}
