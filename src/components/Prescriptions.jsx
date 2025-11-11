import React from "react";

const Prescriptions = () => {
  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
      {/* 🩶 Thẻ 1: Thông tin bệnh nhân */}
      <div className="bg-white rounded-2xl shadow p-5 relative">
        {/* nút chỉnh sửa góc trên bên phải */}
        <button className="absolute top-3 right-3 text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Chỉnh sửa
        </button>

        <h2 className="text-xl font-semibold mb-2">Giang Mỹ Tiên</h2>
        <p className="text-gray-700">Nữ</p>
        <p className="text-gray-700">Mã bệnh nhân: BN001</p>

      </div>

      {/* 🩶 Thẻ 2: Input nhập tên thuốc */}
      <div className="bg-white rounded-2xl shadow p-5">
        <input
          type="text"
          placeholder="Nhập tên thuốc ..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 🩶 Thẻ 3: Danh sách đơn thuốc */}
      <div className="bg-white rounded-2xl shadow p-5 relative">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Đơn thuốc</h3>

        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border-b w-12">STT</th>
              <th className="p-2 border-b">Tên thuốc / hàm lượng</th>
              <th className="p-2 border-b w-24">ĐVT</th>
              <th className="p-2 border-b w-24">Số lượng</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-gray-50">
              <td className="p-2 border-b">1</td>
              <td className="p-2 border-b">
                YOSOEM 40 40mg (Esomeprazon 40mg)
              </td>
              <td className="p-2 border-b">Viên</td>
              <td className="p-2 border-b">10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-2 border-b">2</td>
              <td className="p-2 border-b">ARTHUR (Trimebutine 200)</td>
              <td className="p-2 border-b">Viên</td>
              <td className="p-2 border-b">5</td>
            </tr>
          </tbody>
        </table>

        {/* 🩶 Button in đơn thuốc ở góc dưới bên phải */}
        <div className="flex justify-end mt-6">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            In đơn thuốc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
