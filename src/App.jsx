import Home from "./pages/Home/Home.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[#0b0b0b] opacity-90 relative h-[100%]">
        <div className="max-w-7xl h-full mx-auto text-white py-12">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
