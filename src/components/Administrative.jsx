import React from "react";

const Administrative = () => {
  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">

        <div className="bg-white rounded-2xl shadow p-5 relative">

            <button className="absolute top-3 right-3 text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Chỉnh sửa
            </button>

            <h2 className="text-xl font-semibold mb-2">Giang Mỹ Tiên</h2>
            <p className="text-gray-700">Nữ</p>
            <p className="text-gray-700">Mã bệnh nhân: BN001</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="text-lg font-bold text-slate-800 mb-3">Nhập thông tin bệnh nhân</h2>

        <div className="space-y-3">
          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Ngày sinh</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Số điện thoại</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Địa chỉ</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Số CCCD</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Số BHYT</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-end mt-6">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Nhập
          </button>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Administrative;
