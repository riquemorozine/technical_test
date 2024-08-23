import Table from "./components/table";
import "./sass/pages/_app.scss";

function App() {
  return (
    <>
      <main>
        <Table
          data={[
            { name: "teste", authorId: "124", id: "123", pages: 12 },
            { name: "teste", authorId: "124", id: "123", pages: 10 },
          ]}
          headers={["Book Name", "Author"]}
        />
      </main>
    </>
  );
}

export default App;
