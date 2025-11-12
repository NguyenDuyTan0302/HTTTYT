import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "123") {
      navigate("/home");
    } else {
      setError("Tài khoản hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-sky-300">
      <div className="bg-white rounded-lg shadow-md p-10 w-[400px]">
        <h2 className="text-center text-xl font-bold mb-6">Đăng nhập</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Tài khoản</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tài khoản"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Mật khẩu</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm italic text-center">{error}</p>
          )}

          <div className="flex justify-end">
            <a href="#" className="text-sky-600 italic text-sm hover:underline">
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-200 text-gray-700 font-semibold py-2 rounded-md hover:bg-sky-300 transition"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
