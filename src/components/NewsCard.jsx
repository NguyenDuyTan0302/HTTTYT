export default function NewsCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <h3 className="font-semibold text-slate-800 mb-3">Tin mới</h3>
      <img
        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=60"
        alt=""
        className="rounded-lg mb-3"
      />
      <p className="text-sm text-slate-600 mb-3">
        DNA origami vaccine DoriVac paves way for personalised cancer immunotherapy.
      </p>
      <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700">
        Read more
      </button>
    </div>
  );
}
