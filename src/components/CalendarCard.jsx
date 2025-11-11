export default function CalendarCard() {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow p-5 flex-1">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-slate-800">Lịch</h3>
        <button className="text-blue-600 text-sm">+ Thêm</button>
      </div>

      <div className="flex justify-between text-center mb-3">
        {["Mon 9", "Tues 10", "Wed 11", "Thu 12", "Fri 13"].map((day, i) => (
          <div
            key={i}
            className={`flex-1 py-1 rounded-lg ${
              day.includes("Wed") ? "bg-blue-500 text-white font-semibold" : "text-slate-700"
            }`}
          >
            {day.replace(" ", "\n")}
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-lg p-2 mb-2 flex items-center gap-2">
        <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">👤</div>
        <div className="text-left">
          <h4 className="text-sm font-medium text-slate-800">Khám Sam Lewis</h4>
          <p className="text-xs text-slate-500">09:20 AM – 11:30 AM</p>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-2 flex items-center gap-2">
        <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">🧠</div>
        <div className="text-left">
          <h4 className="text-sm font-medium text-slate-800">Tư vấn Brian Jones</h4>
          <p className="text-xs text-slate-500">3:00 PM – 4:00 PM</p>
        </div>
      </div>
    </div>
  );
}
