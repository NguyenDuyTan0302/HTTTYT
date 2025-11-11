import React from "react";

const Administrative = () => {
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

        <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Hiển thị thêm
        </button>
      </div>

      {/* Thẻ 2 */}
      <div className="bg-white rounded-2xl shadow p-5 w-full">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Thông tin chi tiết</h3>

        <div className="space-y-1 text-gray-700">
          <p><strong>Ngày sinh:</strong> 01/01/2001</p>
          <p><strong>Số điện thoại:</strong> 0123456789</p>
          <p><strong>Địa chỉ:</strong> TP.HCM</p>
          <p><strong>Số CMND/CCCD:</strong> 1122334455</p>
          <p><strong>Số BHYT:</strong> 1122334455</p>
        </div>
      </div>
    </div>
  );
};

export default Administrative;
