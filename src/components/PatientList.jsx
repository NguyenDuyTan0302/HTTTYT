const patients = [
  { img: "https://randomuser.me/api/portraits/men/41.jpg", name: "George Hill" },
  { img: "https://randomuser.me/api/portraits/women/44.jpg", name: "Jane Doe" },
  { img: "https://randomuser.me/api/portraits/women/47.jpg", name: "Maria Cruz" },
  { img: "https://randomuser.me/api/portraits/men/53.jpg", name: "John Lewis" },
  { img: "https://randomuser.me/api/portraits/men/62.jpg", name: "Peter Parker" },
];

export default function PatientList() {
  return (
    <div className="bg-white rounded-2xl shadow p-5 text-center w-full max-w-lg">
      <h3 className="font-semibold text-slate-800 mb-4">Danh sách bệnh nhân</h3>
      {patients.map((p, i) => (
        <div key={i} className="flex items-center justify-between bg-slate-50 rounded-lg p-2 mb-2">
          <img src={p.img} alt="" className="w-10 h-10 rounded-full" />
          <div className="flex-1 ml-3 text-left">
            <h4 className="text-sm font-medium text-slate-800">{p.name}</h4>
            <p className="text-xs text-slate-500">18 March, 2023 | 09:00 PM</p>
          </div>
          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-600">
            Hồ sơ lâm sàng
          </button>
        </div>
      ))}
    </div>
  );
}
