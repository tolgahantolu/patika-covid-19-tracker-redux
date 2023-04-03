import { Countries, DetailsTable, Header } from "./components";

function App() {
  return (
    <div className="flex flex-col items-center w-4/5 h-auto mx-auto py-10">
      <Header />
      <Countries />
      <DetailsTable />
    </div>
  );
}

export default App;
