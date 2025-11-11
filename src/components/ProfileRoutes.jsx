import { Routes, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage.jsx";
import PatientInfo from "../components/PatientInfo.jsx";

const Vitals = () => <div className="text-lg">Sinh hiệu</div>;
const Prescriptions = () => <div className="text-lg">Đơn thuốc</div>;
const Technical = () => <div className="text-lg">Chỉ định kỹ thuật</div>;
const Diagnosis = () => <div className="text-lg">Chẩn đoán</div>;
const History = () => <div className="text-lg">Lịch sử khám</div>;

export default function ProfileRoutes() {
  return (
    <Routes>
      <Route element={<ProfilePage />}>
        <Route path="administrative" element={<PatientInfo />} />
        <Route path="vitals" element={<Vitals />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="technical" element={<Technical />} />
        <Route path="diagnosis" element={<Diagnosis />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
