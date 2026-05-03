import { useState } from "react";

export default function Toggle() {
  // 1. สร้าง State เก็บค่าเปิด/ปิด (เริ่มที่ false คือปิดไฟ)
  const [isOn, setIsOn] = useState(false);

  return (
    // 2. ใช้ Template Literal เปลี่ยน class ตามค่า isOn
    // ถ้า isOn เป็น true ให้พื้นหลังเป็นสีขาว (bg-white) ถ้า false ให้เป็นสีดำ (bg-black)
    <div
      className={`flex flex-col items-center justify-center w-full min-h-screen transition-all duration-500 ${isOn ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <h1 className="text-4xl font-bold mb-8">
        {isOn ? "The Lights are ON ☀️" : "The Lights are OFF 🌙"}
      </h1>

      {/* 3. สวิตช์แบบกดเปลี่ยนค่า */}
      <button
        onClick={() => setIsOn(!isOn)} // !isOn คือการเปลี่ยนจาก true เป็น false หรือ false เป็น true
        className={`w-20 h-10 rounded-full p-1 transition-colors duration-300 ${isOn ? "bg-green-500" : "bg-gray-600"}`}
      >
        <div
          className={`bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-10" : "translate-x-0"}`}
        ></div>
      </button>

      <p className="mt-4">Click the switch to change the mood!</p>
    </div>
  );
}
