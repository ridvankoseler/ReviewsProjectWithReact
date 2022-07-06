import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="row container m-auto">
      <Header />
      <Reviews/>
    </div>
  );
}

export default App;
