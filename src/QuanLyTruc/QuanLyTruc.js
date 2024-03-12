import { RxCalendar } from "react-icons/rx";
import { GoClock } from "react-icons/go";

const QuanLyTruc = () => {
  return (
    <div className="bg-[#fff] w-[83vw] h-screen rounded-md border-[#24c1c7] border-solid border-l-[1px]">
      <div className="text-white bg-[#24c1c7] h-[8%] flex items-center text-base">
        <div className="flex items-center gap-2 ml-2">
          <RxCalendar />
          QUẢN LÝ TRỰC
        </div>
        <div className="ml-auto mr-3">
          <GoClock size={"22px"} color="#e6e1e1" />
        </div>
      </div>
      <div className="flex gap-3 mt-5 ml-1 items-end">
        <div className="font-bold">
          Năm
          <div>
            <input
              type="text"
              className="w-[240px] outline-none border-gray-400 border-solid border-[1px] rounded-[4px]"
            />
          </div>
        </div>
        <div className="font-bold">
          Tuần
          <div>
            <input
              type="text"
              className="w-[80px] outline-none border-gray-400 border-solid border-[1px] rounded-[4px]"
            />
          </div>
        </div>
        <div className="flex gap-1 justify-center mx-auto">
          <div className=" bg-blue-600 h-[28px] text-white px-4 rounded-md flex justify-center items-center cursor-pointer">
            Lịch trực
          </div>
          <div className=" bg-blue-600 h-[28px] text-white px-4 rounded-md flex justify-center items-center cursor-pointer">
            In lịch trực
          </div>
        </div>
      </div>
      <div className="mt-3 ml-1 w-[99%] bg-gray-200 h-[6vh] font-bold px-2 py-1 rounded-[4px] flex items-center">
        Danh sách lịch trực
      </div>
      <div className="w-[99%] pt-5 ml-1">
        <table className="w-full " id="customers">
          <tr className="bg-gray-100 font-normal">
            <th className="w-[4%] font-medium">STT</th>
            <th className="w-[20%] font-medium">Họ và tên</th>
            <th className="font-medium">1/1/2024</th>
            <th className="font-medium">2/1/2024</th>
            <th className="font-medium">3/1/2024</th>
            <th className="font-medium">4/1/2024</th>
            <th className="font-medium">5/1/2024</th>
            <th className="font-medium">6/1/2024</th>
            <th className="font-medium">7/1/2024</th>
          </tr>
          <tr className="bg-gray-100">
            <th className="font-medium"></th>
            <th className="font-medium"></th>
            <th className="font-medium">Thứ 2</th>
            <th className="font-medium">Thứ 3</th>
            <th className="font-medium">Thứ 4</th>
            <th className="font-medium">Thứ 5</th>
            <th className="font-medium">Thứ 6</th>
            <th className="font-medium">Thứ 7</th>
            <th className="font-medium">Thứ 8</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default QuanLyTruc;
