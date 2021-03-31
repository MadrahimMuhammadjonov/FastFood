import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";


function App() {
    return (
        <div className="main">
            <Login/>
            <Sidebar/>
            {/*<Navbar/>*/}
        </div>
    );
}

export default App;
