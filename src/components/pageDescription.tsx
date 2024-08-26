import CreateBookModal from "./books/createBookModal";

interface IPageDescriptionProps {
  title: string;
  description: string;
}

export default function PageDescription({
  title,
  description,
}: IPageDescriptionProps) {
  return (
    <div className="pageDescriptionContainer">
      <div className="pageDescriptionTexts">
        <h1 className="Text Text--bold">{title}</h1>
        <p className="Text Text--medium">{description}</p>
      </div>

      <CreateBookModal />
    </div>
  );
}
