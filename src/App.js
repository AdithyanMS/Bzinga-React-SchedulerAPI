import "./styles.css";
import Updatedb from"./Updatedb"
import Schedule from "./Schedule"
import Home from"./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div class="Ap">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Updatedb" element={<Updatedb />} />
          <Route path="Schedule" element={<Schedule />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}
