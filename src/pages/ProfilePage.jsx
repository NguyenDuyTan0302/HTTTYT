import { Routes, Route } from "react-router-dom";
import ProfileLayout from "../components/ProfileLayout";
import Administrative from "../components/Administrative";
import Vitals from "../components/Vitals";
import Prescriptions from "../components/Prescriptions";
import Technical from "../components/Technical";
import Diagnosis from "../components/Diagnosis";
import "../index.css";

const History = () => <div className="text-lg">Lịch sử khám</div>;

const ProfilePage = () => {
  return (
    <Routes>
      <Route element={<ProfileLayout />}>
        <Route path="administrative" element={<Administrative />} />
        <Route path="vitals" element={<Vitals />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="technical" element={<Technical />} />
        <Route path="diagnosis" element={<Diagnosis />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
};

export default ProfilePage;
