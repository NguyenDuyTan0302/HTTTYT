export default function TasksCard() {
  const tasks = [
    { icon: "📅", title: "Consultation with George Gill", time: "11:30 AM" },
    { icon: "💊", title: "Medication Review for Laura Lewis", time: "11:30 AM" },
    { icon: "🧾", title: "Check Mary Clark test results", time: "11:30 AM" },
  ];

  return (
    <div className="flex-1.5 bg-white rounded-2xl shadow p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-slate-800">Việc cần làm hôm nay</h3>
        <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">12</span>
      </div>
      {tasks.map((t, i) => (
        <div key={i} className="flex items-center bg-slate-50 rounded-lg p-2 mb-2">
          <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-lg">
            {t.icon}
          </div>
          <div className="flex-1 ml-3 text-left">
            <h4 className="font-medium text-sm">{t.title}</h4>
            <p className="text-xs text-slate-500">{t.time}</p>
          </div>
          <div className="text-blue-500 text-lg cursor-pointer">↗</div>
        </div>
      ))}
    </div>
  );
}
