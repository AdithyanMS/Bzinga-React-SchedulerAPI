import "./styles.css";
import "./Updatedb"
import "./Schedule"
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <h1>Bzinga Scheduling Api</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/Updatedb">Updatedb</Link>
                </li>
                <li>
                    <Link to="/Schedule">Schedule</Link>
                </li>
            </ul>
        </nav>
        <Outlet></Outlet>
        </>

    );
}
export default Home;