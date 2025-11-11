import React from "react";

const Diagnosis = () => {
  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-5 relative"> 
            <button className="absolute top-3 right-3 text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"> 
                Chỉnh sửa 
                </button> 
                <h2 className="text-xl font-semibold mb-2">Giang Mỹ Tiên</h2> 
                <p className="text-gray-700">Nữ</p> 
                <p className="text-gray-700">Mã bệnh nhân: BN001</p> 
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"> Hiển thị thêm </button> 
                </div>
      {/* Thẻ 1: Hỏi bệnh */}
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="text-lg font-bold text-slate-800 mb-3">Hỏi bệnh</h2>

        <div className="space-y-3">
          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Trạng thái</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Triệu chứng</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Ghi chú</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Thẻ 2: Chẩn đoán sơ bộ */}
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="text-lg font-bold text-slate-800 mb-3">Chẩn đoán sơ bộ</h2>

        <div className="space-y-3">
          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Chẩn đoán</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Ghi chú</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Thẻ 3: Kết luận */}
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="text-lg font-bold text-slate-800 mb-3">Kết luận</h2>

        <div className="space-y-3">
          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Chẩn đoán</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <label className="w-40 font-medium text-gray-700">Ghi chú</label>
            <input
              type="text"
              placeholder="Nhập"
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
