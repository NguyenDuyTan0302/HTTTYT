import React from "react";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background-color: #f5f7fb;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        main {
          display: flex;
          justify-content: flex-start;
          gap: 24px;
          padding: 40px;
          max-width: 1600px;
          margin: auto;
        }

        .left-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
          flex: 1;
          max-width: 1200px;
        }

        .right-column {
          flex: 0.6;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: auto;
        }

        .dashboard-card {
          display: flex;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          padding: 20px;
          gap: 24px;
        }

        .news {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          padding: 20px;
          flex: 1;
        }

        .news h3 {
          color: #0d1b2a;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .news img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .news p {
          font-size: 14px;
          color: #555;
          margin-bottom: 10px;
        }

        .news button {
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 8px 14px;
          cursor: pointer;
          font-size: 14px;
        }

        .news button:hover { background: #1d4ed8; }

        .tasks { flex: 1.5; }

        .tasks-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .tasks-header h3 { margin: 0; font-weight: 600; }

        .tasks-header .count {
          background: #3b82f6;
          color: white;
          border-radius: 10px;
          padding: 4px 10px;
          font-size: 13px;
        }

        .task-item {
          display: flex;
          align-items: center;
          background: #f9fafc;
          border-radius: 10px;
          padding: 10px;
          margin-bottom: 10px;
          gap: 10px;
        }

        .task-item .icon {
          width: 35px;
          height: 35px;
          border-radius: 8px;
          background: #e0f2fe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #0d6efd;
        }

        .task-item .details { flex: 1; }

        .task-item .details h4 {
          font-size: 15px;
          margin: 0;
          font-weight: 600;
        }

        .task-item .details p {
          font-size: 13px;
          color: #666;
          margin: 2px 0 0;
        }

        .task-item .open {
          font-size: 16px;
          color: #3b82f6;
          cursor: pointer;
        }

        .below-row {
          display: flex;
          gap: 20px;
        }

        .calendar-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
          background-color: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .calendar-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #0d1b2a;
        }

        .calendar-header button {
          background: none;
          border: none;
          color: #0d6efd;
          font-size: 14px;
          cursor: pointer;
        }

        .calendar-days {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          text-align: center;
        }

        .calendar-days div {
          flex: 1;
          padding: 6px;
          border-radius: 8px;
          color: #333;
        }

        .calendar-days .active {
          background: #3b82f6;
          color: #fff;
          font-weight: bold;
        }

        .reminder-item {
          display: flex;
          align-items: center;
          background: #f9fafc;
          border-radius: 10px;
          padding: 10px;
          margin-bottom: 10px;
          gap: 10px;
        }

        .reminder-item .icon {
          width: 35px;
          height: 35px;
          border-radius: 8px;
          background: #e0f2fe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #0d6efd;
        }

        .reminder-item .details { flex: 1; }
        .reminder-item .details h4 { font-size: 15px; margin: 0; color: #0d1b2a; }
        .reminder-item .details p { font-size: 13px; color: #666; margin: 2px 0 0; }

        .patient-card {
          flex: 1;
          background:#fff;
          border-radius:16px;
          box-shadow:0 4px 12px rgba(0,0,0,0.1);
          padding:20px;
          text-align:center;
        }

        .patient-card h3 {
          color:#0d1b2a;
          font-weight:600;
          margin-bottom:15px;
        }

        .patient-card img {
          width:80px;
          height:80px;
          border-radius:50%;
          margin:0 auto 10px;
        }

        .patient-card h4 { font-size:1.1rem; font-weight:600; }
        .patient-card p { color:#777; font-size:14px; }

        .patient-stats {
          display:flex;
          justify-content:space-around;
          margin:15px 0;
        }

        .patient-summary {
          border-top:1px solid #eee;
          margin-top:10px;
          padding-top:10px;
          text-align:left;
        }

        .patient-summary h5 {
          font-weight:600;
          margin-bottom:5px;
        }

        .patient-summary p {
          font-size:14px;
          color:#555;
        }

        .patient-list {
          background: #fff;
          border-radius: 16px;
          width: 100%;
          max-width: 100%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
        }

        .patient-list h3 {
          font-weight: 600;
          color: #0d1b2a;
          margin-bottom: 16px;
        }

        .patient-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f9fafc;
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 10px;
        }

        .patient-item img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          object-fit: cover;
        }

        .patient-item .info {
          flex: 1;
          text-align: left;
          margin-left: 12px;
        }

        .patient-item .info h4 {
          font-size: 15px;
          font-weight: 600;
          color: #0d1b2a;
          margin: 0;
        }

        .patient-item .info p {
          font-size: 13px;
          color: #666;
          margin: 2px 0 0;
        }

        .patient-item button {
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
        }

        .patient-item button:hover {
          background: #2563eb;
        }
      `}</style>

      <main>
        <div className="left-column">
          {/* --- Tin mới & Việc cần làm --- */}
          <div className="dashboard-card">
            <div className="news">
              <h3>Tin mới</h3>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=60"
                alt="news"
              />
              <p>
                DNA origami vaccine DoriVac paves way for personalised cancer immunotherapy.
              </p>
              <button>Read more</button>
            </div>

            <div className="tasks">
              <div className="tasks-header">
                <h3>Việc cần làm hôm nay</h3>
                <span className="count">12</span>
              </div>

              {[
                { icon: "📅", title: "Consultation with George Gill" },
                { icon: "💊", title: "Medication Review for Laura Lewis" },
                { icon: "🧾", title: "Check Mary Clark test results" },
              ].map((task, i) => (
                <div className="task-item" key={i}>
                  <div className="icon">{task.icon}</div>
                  <div className="details">
                    <h4>{task.title}</h4>
                    <p>11:30 AM</p>
                  </div>
                  <div className="open">↗</div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Lịch + Thông tin bệnh nhân --- */}
          <div className="below-row">
            <div className="calendar-card">
              <div className="calendar-header">
                <h3>Lịch</h3>
                <button>+ Thêm</button>
              </div>
              <div className="calendar-days">
                {["Mon", "Tues", "Wed", "Thu", "Fri"].map((d, i) => (
                  <div key={i} className={d === "Wed" ? "active" : ""}>
                    {d}
                    <br />
                    {9 + i}
                  </div>
                ))}
              </div>

              <div className="reminder-item">
                <div className="icon">👤</div>
                <div className="details">
                  <h4>Khám Sam Lewis</h4>
                  <p>09:20 AM – 11:30 AM</p>
                </div>
              </div>

              <div className="reminder-item">
                <div className="icon">🧠</div>
                <div className="details">
                  <h4>Tư vấn Brian Jones</h4>
                  <p>3:00 PM – 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="patient-card">
              <h3>Thông tin bệnh nhân</h3>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Avatar"
              />
              <h4>George Hill</h4>
              <p>25 tuổi — New York, USA</p>

              <div className="patient-stats">
                <div><strong>Blood</strong><br />0+</div>
                <div><strong>Height</strong><br />176cm</div>
                <div><strong>Weight</strong><br />86kg</div>
              </div>

              <div className="patient-summary">
                <h5>Tóm tắt</h5>
                <p>Bệnh nhân khỏe mạnh, có tiền sử đau đầu nhẹ và dị ứng theo mùa.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Danh sách bệnh nhân --- */}
        <div className="right-column">
          <div className="patient-list">
            <h3>Danh sách bệnh nhân</h3>
            {[
              ["men/41.jpg", "George Hill"],
              ["women/44.jpg", "Jane Doe"],
              ["women/47.jpg", "Maria Cruz"],
              ["men/53.jpg", "John Lewis"],
              ["men/62.jpg", "Peter Parker"],
            ].map(([img, name], i) => (
              <div className="patient-item" key={i}>
                <img src={`https://randomuser.me/api/portraits/${img}`} alt="" />
                <div className="info">
                  <h4>{name}</h4>
                  <p>18 March, 2023 | 09:00 PM</p>
                </div>
                <button>Hồ sơ lâm sàng</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
