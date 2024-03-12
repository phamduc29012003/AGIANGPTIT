import Header from "./Component/Header/Header";
import Navbar from "./Component/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import QuanLyTruc from "./QuanLyTruc/QuanLyTruc";
import ThietLap from "./QuanLyLichSu/ThietLap/ThietLap";
import LichSu from "./QuanLyLichSu/LichSu/LichSu";
function App() {
  return (
    <div className="w-full h-full bg-[#ccc]">
      <Header />
      <div className="flex gap-4">
        <Navbar />
        <div className="mt-4">
          <Routes>
            <Route path="Quan-ly-truc" element={<QuanLyTruc />} />
            <Route path="Thiet-lap-lich-su-dung-phong" element={<ThietLap />} />
            <Route path="Lich-su-dung-phong" element={<LichSu />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
