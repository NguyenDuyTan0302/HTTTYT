export default function PatientCard() {
  return (
    <div className="flex-1 bg-white rounded-2xl shadow p-5 text-center">
      <h3 className="font-semibold text-slate-800 mb-4">Thông tin bệnh nhân</h3>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-20 h-20 rounded-full mx-auto mb-3" />
      <h4 className="font-semibold text-slate-800">George Hill</h4>
      <p className="text-sm text-slate-500 mb-3">25 tuổi — New York, USA</p>
      <div className="flex justify-around text-sm mb-3">
        <div><strong>Blood</strong><br />0+</div>
        <div><strong>Height</strong><br />176cm</div>
        <div><strong>Weight</strong><br />86kg</div>
      </div>
      <div className="border-t border-slate-200 pt-3 text-left">
        <h5 className="font-semibold mb-1">Tóm tắt</h5>
        <p className="text-sm text-slate-600">
          Bệnh nhân khỏe mạnh, có tiền sử đau đầu nhẹ và dị ứng theo mùa.
        </p>
      </div>
    </div>
  );
}
