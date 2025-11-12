import React, { useRef, useState, forwardRef } from "react";
import { useReactToPrint } from "react-to-print";

// 🧾 Component xem trước để in
const TechnicalPreview = forwardRef((props, ref) => (
  <div ref={ref} className="p-10 text-gray-800">
    <h2 className="text-xl font-bold text-center mb-4">PHIẾU YÊU CẦU DỊCH VỤ KỸ THUẬT</h2>
    <p>
      <strong>Tên bệnh nhân:</strong> Giang Mỹ Tiên &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>Tuổi:</strong> 21 &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>Giới tính:</strong> Nữ
    </p>
    <p>
      <strong>Mã bệnh nhân:</strong> BN001
    </p>
    <p>
      <strong>Địa chỉ:</strong> TP.HCM
    </p>
    <p>
      <strong>Chẩn đoán:</strong> Nghi ngờ viêm dạ dày
    </p>

    <h3 className="mt-4 font-semibold">Danh sách dịch vụ:</h3>
    <table className="w-full border-collapse border mt-2 text-sm">
      <thead>
        <tr>
          <th className="border p-1">STT</th>
          <th className="border p-1">Tên dịch vụ</th>
          <th className="border p-1">Chi phí (VNĐ)</th>
          <th className="border p-1">Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-1 text-center">1</td>
          <td className="border p-1">Xét nghiệm máu</td>
          <td className="border p-1 text-center">50.000</td>
          <td className="border p-1">Đang chờ kết quả</td>
        </tr>
        <tr>
          <td className="border p-1 text-center">2</td>
          <td className="border p-1">Xét nghiệm nước tiểu</td>
          <td className="border p-1 text-center">50.000</td>
          <td className="border p-1">Đã có kết quả</td>
        </tr>
      </tbody>
    </table>

    <div className="text-right mt-8">
      <p>Ngày 01 tháng 01, năm 2025</p>
      <p className="mr-14">Người lập phiếu</p>
    </div>

    <p className="mt-6">
      <strong>Ghi chú:</strong> Bệnh nhân cần nhịn ăn sáng trước khi làm xét nghiệm máu.
    </p>
  </div>
));

const Technical = () => {
  const [showPreview, setShowPreview] = useState(false);
  const componentRef = useRef();

  // ✅ Hook in từ react-to-print
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Phiếu yêu cầu dịch vụ kỹ thuật - Giang Mỹ Tiên",
    pageStyle: `
      @page { size: A4; margin: 20mm; }
      body { font-family: Arial, sans-serif; -webkit-print-color-adjust: exact; }
    `,
  });

  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
      {/* 🩶 Thông tin bệnh nhân */}
      <div className="bg-white rounded-2xl shadow p-5 relative">
        <button className="absolute top-3 right-3 text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Chỉnh sửa
        </button>
        <h2 className="text-xl font-semibold mb-2">Giang Mỹ Tiên</h2>
        <p className="text-gray-700">Nữ</p>
        <p className="text-gray-700">Mã bệnh nhân: BN001</p>
      </div>

      {/* 🩶 Ô nhập dịch vụ */}
      <div className="bg-white rounded-2xl shadow p-5">
        <input
          type="text"
          placeholder="Nhập tên dịch vụ ..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 🩶 Danh sách dịch vụ */}
      <div className="bg-white rounded-2xl shadow p-5 relative">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Danh sách dịch vụ kỹ thuật</h3>

        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border-b">STT</th>
              <th className="p-2 border-b">Tên dịch vụ</th>
              <th className="p-2 border-b">Chi phí</th>
              <th className="p-2 border-b">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-gray-50">
              <td className="p-2 border-b">1</td>
              <td className="p-2 border-b">Xét nghiệm máu</td>
              <td className="p-2 border-b">50.000</td>
              <td className="p-2 border-b">Đang chờ kết quả</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-2 border-b">2</td>
              <td className="p-2 border-b">Xét nghiệm nước tiểu</td>
              <td className="p-2 border-b">50.000</td>
              <td className="p-2 border-b">Đã có kết quả</td>
            </tr>
          </tbody>
        </table>

        {/* 🩶 Button in phiếu */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setShowPreview(true)}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            In phiếu yêu cầu dịch vụ
          </button>
        </div>
      </div>

      {/* 🩵 Modal xem trước + in */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-[800px] p-8 relative">
            <h2 className="text-xl font-bold text-center mb-4">XEM TRƯỚC PHIẾU DỊCH VỤ</h2>

            {/* Nội dung in */}
            <TechnicalPreview ref={componentRef} />

            {/* Nút hành động */}
            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={() => setShowPreview(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Đóng
              </button>
              <button
                onClick={handlePrint}
                className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Xác nhận in
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Technical;
