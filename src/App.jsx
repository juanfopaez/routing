import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleGoToAbout = () => {
    navigate("/about");
  };

  return (
    <>
      App
      <button onClick={handleGoToAbout}>Go to about</button>
      <nav>
        <ul>
          <li>
            <Link to={"/about"}>Go to about</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
