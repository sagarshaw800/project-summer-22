import "./App.css";
import Layout from "./Components/LayOut/Layout";
import PageHolder from "./Components/PageHolder/PageHolder";
import IndexDataContext from "./Context/IndexDataContext";
import OpenDrawerDataContext from "./Context/OpenDrawerDataContext";

function App() {
  return (
    <>
      <OpenDrawerDataContext>
        <IndexDataContext>
          <Layout />
          <PageHolder/>
        </IndexDataContext>
      </OpenDrawerDataContext>
    </>
  );
}

export default App;
