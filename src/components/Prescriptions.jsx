import React, { useRef, useState, forwardRef } from "react";
import { useReactToPrint } from "react-to-print";

// 🩺 Component xem trước để in
const PrescriptionPreview = forwardRef((props, ref) => (
  <div ref={ref} className="p-10 text-gray-800">
    <h2 className="text-xl font-bold text-center mb-4">ĐƠN THUỐC</h2>
    <p>
      <strong>Tên bệnh nhân:</strong> Giang Mỹ Tiên &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>Tuổi:</strong> 21 &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>Giới tính:</strong> Nữ
    </p>
    <p>
      <strong>Địa chỉ:</strong> TP.HCM
    </p>
    <p>
      <strong>Đối tượng:</strong> BHYT &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>Số BHYT:</strong> 1234567
    </p>
    <p>
      <strong>Chẩn đoán:</strong> Viêm dạ dày
    </p>

    <h3 className="mt-4 font-semibold">Đơn thuốc:</h3>
    <table className="w-full border-collapse border mt-2 text-sm">
      <thead>
        <tr>
          <th className="border p-1">STT</th>
          <th className="border p-1">Tên thuốc/hàm lượng</th>
          <th className="border p-1">Đơn vị tính</th>
          <th className="border p-1">Số lượng</th>
          <th className="border p-1">Cách dùng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-1 text-center">1</td>
          <td className="border p-1">YOSOEM 40 40mg (Esomeprazon 40mg)</td>
          <td className="border p-1 text-center">Viên</td>
          <td className="border p-1 text-center">6</td>
          <td className="border p-1">Sáng 1 viên, tối 1 viên</td>
        </tr>
        <tr>
          <td className="border p-1 text-center">2</td>
          <td className="border p-1">ARTHUR (Trimebutine 200)</td>
          <td className="border p-1 text-center">Viên</td>
          <td className="border p-1 text-center">6</td>
          <td className="border p-1">Sáng 1 viên, tối 1 viên</td>
        </tr>
      </tbody>
    </table>

    <div className="text-right mt-8">
      <p>Ngày 01 tháng 01, năm 2025</p>
      <p className="mr-14">Bác sĩ điều trị</p>
    </div>

    <p className="mt-6">
      <strong>Lời dặn của bác sĩ:</strong> ...
    </p>
    <p>
      <strong>Ngày tái khám:</strong> ...
    </p>
  </div>
));

// 🩺 Component chính
const Prescriptions = () => {
  const [showPreview, setShowPreview] = useState(false);
  const componentRef = useRef();

  // ✅ Hook in từ react-to-print
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Đơn thuốc - Giang Mỹ Tiên",
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

      {/* 🩶 Ô nhập tên thuốc */}
      <div className="bg-white rounded-2xl shadow p-5">
        <input
          type="text"
          placeholder="Nhập tên thuốc ..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 🩶 Danh sách đơn thuốc */}
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
              <td className="p-2 border-b">YOSOEM 40 40mg (Esomeprazon 40mg)</td>
              <td className="p-2 border-b">Viên</td>
              <td className="p-2 border-b">6</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-2 border-b">2</td>
              <td className="p-2 border-b">ARTHUR (Trimebutine 200)</td>
              <td className="p-2 border-b">Viên</td>
              <td className="p-2 border-b">6</td>
            </tr>
          </tbody>
        </table>

        {/* 🩶 Button in đơn thuốc */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setShowPreview(true)}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            In đơn thuốc
          </button>
        </div>
      </div>

      {/* 🩵 Modal xem trước + in */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-[800px] p-8 relative">
            <h2 className="text-xl font-bold text-center mb-4">Xem trước đơn thuốc</h2>

            {/* Nội dung in */}
            <PrescriptionPreview ref={componentRef} />

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

export default Prescriptions;
