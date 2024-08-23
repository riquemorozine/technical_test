import Table from "./components/table";
import "./sass/pages/_app.scss";

function App() {
  return (
    <>
      <main>
        <Table
          data={[
            { name: "teste", authorId: "124", id: "123", pages: 12 },
            { name: "teste", authorId: "124", id: "124", pages: 10 },
            { name: "teste", authorId: "124", id: "125", pages: 12 },
            { name: "teste", authorId: "124", id: "126", pages: 10 },
            { name: "teste", authorId: "124", id: "127", pages: 12 },
            { name: "teste", authorId: "124", id: "128", pages: 10 },
          ]}
          headers={["Book Name", "Author"]}
        />
      </main>
    </>
  );
}

export default App;
