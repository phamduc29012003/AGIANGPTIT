import { TfiReload } from "react-icons/tfi";
import { RxCalendar } from "react-icons/rx";
import { FaPrint } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
const LichSu = () => {
  return (
    <div className="w-full h-auto">
      <div className="bg-[#fff] w-[82vw] h-[30vh] rounded-md border-[#24c1c7] border-solid border-[1px] relative">
        <div className="text-white bg-[#24c1c7] h-[25%] flex items-center text-base">
          <div className="flex items-center gap-2 ml-2">
            <RxCalendar />
            CHỌN PHÒNG HỌC VÀ NGÀY
          </div>
        </div>
        <div className="flex gap-3 mt-3 ml-1">
          <div className="font-medium">
            Năm học
            <div className="">
              <input className="w-[180px] outline-none border-[1px] border-solid border-gray-400 rounded-[4px]" />
            </div>
          </div>
          <div className="font-medium">
            Khu vực
            <div className="">
              <input className="w-[320px] outline-none border-[1px] border-solid border-gray-400 rounded-[4px]" />
            </div>
          </div>
          <div className="font-medium">
            Tuần
            <div className="">
              <input className="w-[180px] outline-none border-[1px] border-solid border-gray-400 rounded-[4px]" />
            </div>
          </div>
        </div>
        <div className="py-3 px-2 border-[1px] border-solid border-green-400 w-[100px] h-[32px] flex justify-center items-center rounded-lg absolute bottom-3 right-3">
          Tìm kiếm
        </div>
      </div>

      <div className="w-[82vw] h-[42px] bg-blue-500 flex  items-center mt-3">
        <div className="text-white flex items-center justify-center font-medium pl-3">
          <MdSchedule />
          Thời khoá biểu tuần
        </div>
        <div className="flex flex items-center justify-center gap-2 ml-auto mr-3">
          <div className="flex items-center justify-center px-2 py-3 border-[1px] h-[30px] border-solid text-gray-200 border-gray-300 rounded-md">
            <TfiReload />
            Tải lại
          </div>
          <div className="flex items-center justify-center px-2 py-3 border-[1px] h-[30px] border-solid text-gray-200 border-gray-300 rounded-md">
            <FaPrint />
            In TKB theo tuần
          </div>
        </div>
      </div>
      <div className="bg-[#fff] w-full mt-3 h-[auto] pb-[100px] rounded-md border-[#24c1c7] border-solid border-[1px]">
        <div className="w-[82vw] h-[42px] bg-blue-500 flex justify-center items-center text-white items-center">
          Thứ 2 (1/1/2024)
        </div>
        <div className="w-[80vw]  ml-2 mt-3">
          <table id="customers" className="w-full h-auto rounded-md">
            <tr className="bg-gray-100">
              <th className="font-medium">STT</th>
              <th className="font-medium">Phòng học</th>
              <th className="font-medium">Tiết 1</th>
              <th className="font-medium">Tiết 2</th>
              <th className="font-medium">Tiết 3</th>
              <th className="font-medium">Tiết 4</th>
              <th className="font-medium">Tiết 5</th>
              <th className="font-medium">Tiết 6</th>
              <th className="font-medium">Tiết 7</th>
              <th className="font-medium">Tiết 8</th>
              <th className="font-medium">Tiết 9</th>
              <th className="font-medium">Tiết 10</th>
              <th className="font-medium">Tiết 11</th>
              <th className="font-medium">Tiết 12</th>
              <th className="font-medium">Tiết 13</th>
            </tr>{" "}
            <tr className="bg-gray-100">
              <th className="font-medium"></th>
              <th className="font-medium"></th>
              <th className="font-medium text-xs w-[7%]">07 - 07:50</th>
              <th className="font-medium text-xs w-[7%]">08 - 08:50</th>
              <th className="font-medium text-xs w-[7%]">09 - 09:50</th>
              <th className="font-medium text-xs w-[7%]">10 - 10:50</th>
              <th className="font-medium text-xs w-[7%]">11 - 11:50</th>
              <th className="font-medium text-xs w-[7%]">12 - 12:50</th>
              <th className="font-medium text-xs w-[7%]">13 - 13:50</th>
              <th className="font-medium text-xs w-[7%]">14 - 14:50</th>
              <th className="font-medium text-xs w-[7%]">15 - 15:50</th>
              <th className="font-medium text-xs w-[7%]">16 - 16:50</th>
              <th className="font-medium text-xs w-[7%]">17 - 17:50</th>
              <th className="font-medium text-xs w-[7%]">18 - 18:50</th>
              <th className="font-medium text-xs w-[7%]">19 - 19:50</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LichSu;
