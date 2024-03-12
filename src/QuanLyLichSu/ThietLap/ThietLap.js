import { ImCalendar } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import logo from "../../assets/image/download.png";
const ThietLap = () => {
  return (
    <div className="h-auto w-full">
      <div className="bg-[#fff] w-[81vw] h-auto rounded-md border-[#24c1c7] border-solid border-[1px]">
        <div className="text-white bg-blue-500 h-[14%] flex items-center text-base">
          <div className="flex items-center gap-2 ml-2 font-medium">
            <FaEarthAmericas color="" />
            THỜI KHOÁ BIỂU
          </div>
          <div className="flex items-center bg-[#24c1c7] px-3 py-1 rounded-md ml-auto mr-3">
            <IoCloudUploadOutline />
            Upload TKB
          </div>
        </div>

        <div className="flex gap-1 mt-6 ml-3">
          <div className=" py-2 text-white bg-red-500 rounded-md w-[100px] h-[30px] flex justify-center items-center">
            TKB Phòng
          </div>
          <div className=" py-2 text-white bg-blue-600 rounded-md w-[140px] h-[30px] flex justify-center items-center">
            Tìm phòng trống
          </div>
        </div>
        <div className="flex mt-3 gap-3 ml-3">
          <div className="flex gap-2">
            Nhà:
            <input
              className="w-[100px] outline-none rounded-[4px] border-gray-400 border-solid border-[1px]"
              type="text"
            />
          </div>
          <div className="flex gap-2">
            Tiết bắt đầu:
            <input
              className="w-[100px] outline-none rounded-[4px] border-gray-400 border-solid border-[1px]"
              type="text"
            />
          </div>
          <div className="flex gap-2">
            Tiết kết thúc
            <input
              className="w-[100px] outline-none rounded-[4px] border-gray-400 border-solid border-[1px]"
              type="text"
            />
          </div>
          <div className="px-2 py-3 text-white w-[100px] bg-blue-500 rounded-md h-[26px] flex justify-center items-center">
            Tìm phòng
          </div>
        </div>
        <div className="mt-3 ml-3 font-medium ">
          <div className="font-bold">Ngày: </div>
          <div className="relative inline-block mt-1">
            <input className="outline-none border-gray-400 border-solid border-[1px] rounded-[4px] w-[340px] h-[32px]" />
            <div className="absolute right-0 top-2 right-2">
              <ImCalendar />
            </div>
          </div>
        </div>
        <div className="w-[99%] pt-3 ml-3 pb-20">
          <div>Danh sách phòng trống</div>
          <table className="w-full " id="customers">
            <tr className="bg-gray-100 font-normal">
              <th>STT</th>
              <th>ID</th>
              <th>Phòng</th>
              <th>Các kip có sẵn</th>
              <th>Chỗ ngồi</th>
              <th>Booking</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1,2,3,4,5,6,7</td>
              <td>30</td>
              <td>Booking</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="pt-20 pb-10 ">
        <div className="flex justify-center">
          <img src={logo} className="w-[60px] h-[60px] " />
        </div>
        <h1 className="text-blue-600 font-bold flex justify-center">
          HỆ THỐNG QUẢN TRỊ CƠ SỞ VẬT CHẤT
        </h1>
        <h1 className="text-red-600 font-bold flex justify-center">
          TRUNG TÂM DỊCH VỤ - HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
        </h1>
        <h3 className="flex justify-center">Copyright © 2023</h3>
      </div>
    </div>
  );
};

export default ThietLap;
