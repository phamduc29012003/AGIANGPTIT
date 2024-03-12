import { PiChartBarThin } from "react-icons/pi";
import { GiPaperClip } from "react-icons/gi";
import { PiStarThin } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";
import { PiUserThin } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleNavigateThietLap = () => {
    navigate("Thiet-lap-lich-su-dung-phong");
  };
  const handleNavigateQuanLyTruc = () => {
    navigate("Quan-ly-truc");
  };
  const handleNavigateLichSu = () => {
    navigate("Lich-su-dung-phong");
  };
  return (
    <>
      <div className="w-[16vw] bg-[#fff] mt-4 h-[50vh] rounded-md ">
        <ul className="rounded-md">
          <li className="flex  cursor-pointer gap-2 px-3 py-3 items-center text-sm hover:bg-[#e8e8e8] hover:text-[#24c1c7]">
            <PiChartBarThin color="#24c1c7" />
            Dashboard
          </li>
          <li className="flex  cursor-pointer gap-2 px-3 py-3 items-center text-sm hover:bg-[#e8e8e8] hover:text-[#24c1c7]">
            <GiPaperClip color="#24c1c7" />
            Quản lý khu vực
          </li>
          <li className="flex relative group cursor-pointer gap-2 px-3 py-3 items-center text-sm hover:bg-[#e8e8e8] hover:text-[#24c1c7]">
            <GiPaperClip color="#24c1c7" />
            Quản lý sử dụng phòng
            <ul className="absolute top-11 bg-[#fff] text-black hidden group-hover:block">
              <li
                onClick={handleNavigateThietLap}
                className="flex hover:bg-[#e8e8e8] gap-2 px-3 py-3 hover:text-[#24c1c7] items-center"
              >
                <GiPaperClip color="#24c1c7" />
                Thiết lập lịch sử dụng phòng
              </li>

              <li
                onClick={handleNavigateLichSu}
                className="flex hover:bg-[#e8e8e8] gap-2 px-3 py-3 hover:text-[#24c1c7] items-center"
              >
                <IoCalendarOutline color="#24c1c7" />
                Lịch sử dụng phòng
              </li>
              <li className="flex hover:bg-[#e8e8e8] gap-2 px-3 py-3 hover:text-[#24c1c7] items-center">
                <GiPaperClip color="#24c1c7" />
                Hiệu suất sử dụng phòng
              </li>
            </ul>
          </li>
          <li className="flex  cursor-pointer  gap-2 px-3 py-2 3 items-center text-sm hover:bg-[#e8e8e8] hover:text-[#24c1c7]">
            <PiStarThin color="#24c1c7" />
            Quản lý Booking
          </li>
          <li
            onClick={handleNavigateQuanLyTruc}
            className="flex  cursor-pointer gap-2 px-3 py-3 items-center text-sm hover:bg-[#e8e8e8] hover:text-[#24c1c7]"
          >
            <CiClock1 color="#24c1c7" />
            Quản lý trực
          </li>
          <li className="flex  cursor-pointer gap-2 px-3 py-3 items-center text-sm hover:bg-[#e8e8e8] hover:text-[#24c1c7]">
            <PiStarThin color="#24c1c7" />
            Quản lý trang thiết bị
          </li>
          <li className="flex  cursor-pointer gap-2 px-3 py-3 items-center text-sm hover:bg-[#e8e8e8] hover:text-[#24c1c7]">
            <PiUserThin color="#24c1c7" />
            Quản lý người dùng
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
