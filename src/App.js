import "./App.css";
import Layout from "./Components/LayOut/Layout";
import PageSelector from "./Components/PagesSelector/PageSelector";
import IndexDataContext from "./Context/IndexDataContext";
function App() {
  return (
    <>
      <IndexDataContext>
        <Layout />
        <PageSelector />
      </IndexDataContext>
    </>
  );
}

export default App;
