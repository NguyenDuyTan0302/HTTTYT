import React, { useState } from "react";

export default function PatientInfo() {
  const [showDetail, setShowDetail] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      {/* Thẻ 1 */}
      <div className="bg-white rounded-xl shadow-md p-5">
        <h3 className="text-xl font-semibold text-gray-800">Giang Mỹ Tiên</h3>
        <p className="text-gray-600">Nữ</p>
        <p className="text-gray-600">
          Mã bệnh nhân: <span className="font-medium text-gray-800">BN001</span>
        </p>

        <button
          onClick={() => setShowDetail(!showDetail)}
          className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition-all"
        >
          {showDetail ? "Ẩn bớt" : "Hiển thị thêm"}
        </button>
      </div>

      {/* Thẻ 2 */}
      {showDetail && (
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Thông tin chi tiết
          </h3>
          <div className="space-y-1 text-gray-700">
            <p><strong>Ngày sinh:</strong> 01/01/2001</p>
            <p><strong>Số điện thoại:</strong> 0123456789</p>
            <p><strong>Địa chỉ:</strong> TP.HCM</p>
            <p><strong>Số CMND/CCCD:</strong> 1122334455</p>
            <p><strong>Số BHYT:</strong> 1122334455</p>
          </div>
        </div>
      )}
    </div>
  );
}
