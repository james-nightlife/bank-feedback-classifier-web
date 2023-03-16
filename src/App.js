import Header from "./components/Header";
import "./App.scss";
import Banner from "./components/Banner";
import FromComponent from "./components/FormComponent";
// import ResultComponent from "./components/ResultComponent";

function App() {
  return (
    <div className="page">
      <Header />
      <Banner />
      <div className="main-page">
        <FromComponent />
        {/* <ResultComponent /> */}
      </div>
    </div>
  );
}

export default App;
