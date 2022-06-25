import "./App.css";
import Layout from "./Components/LayOut/Layout";
import PageSelector from "./Components/PagesSelector/PageSelector";
import IndexDataContext from "./Context/IndexDataContext";
import OpenDrawerDataContext from "./Context/OpenDrawerDataContext";
function App() {
  return (
    <>
      <OpenDrawerDataContext>
        <IndexDataContext>
          <Layout />
          <PageSelector />
        </IndexDataContext>
      </OpenDrawerDataContext>
    </>
  );
}

export default App;
