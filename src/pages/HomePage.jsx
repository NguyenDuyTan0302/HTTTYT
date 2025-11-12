import React from "react";
import '../index.css';
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Header />
      </header>
      <main>
        <div className="left-column flex pt-[80px]">
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
        <div className="right-column flex pt-[80px]">
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
