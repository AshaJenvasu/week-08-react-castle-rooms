import { useState, useEffect } from "react";
import elizabethImg from "../assets/elizabeth.jpg";

export default function SecretRoom({ question, handleAnswer }) {
  const [replyText, setReplyText] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // ถ้าเพิ่งโหลดหน้าจอ หรือช่องข้อความว่างเปล่า ให้หยุดการทำงานแค่นี้
    if (!replyText) {
      setIsTyping(false);
      return;
    }

    // เริ่มขึ้นสถานะว่ากำลังเตรียมส่ง
    setIsTyping(true);

    // ตั้งเวลา (Timeout) ว่าถ้าผ่านไป 2 วินาที จะให้ส่งข้อความออกไป
    const timerId = setTimeout(() => {
      // ส่งข้อความผ่าน prop handleAnswer (สร้าง object จำลอง event คืนไปให้ App.jsx)
      handleAnswer({ target: { value: replyText } });
      setIsTyping(false); // เลิกโชว์สถานะพิมพ์
    }, 2000);

    // ถ้าเอลิซาเบธพิมพ์ตัวอักษรใหม่ "ก่อน" ที่จะครบ 2 วินาที
    // ฟังก์ชันนี้จะไป "ยกเลิก" การนับเวลาของเก่าทิ้ง แล้วเริ่มนับ 1 ใหม่
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replyText]); // จะทำงานทุกครั้งที่ replyText (ข้อความที่พิมพ์) มีการเปลี่ยนแปลง

  // ฟังก์ชันรับค่าตอนพิมพ์
  const handleTypeReply = (e) => {
    setReplyText(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-700 w-[90%] pb-10 rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <img
          src={elizabethImg}
          alt="Elizabeth"
          className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.5)] object-cover animate-pulse"
        />
        <h1 className="font-bold text-4xl mt-4 text-white drop-shadow-md">
          Secret Room
        </h1>
      </div>

      <p className="text-white text-lg bg-gray-900 p-4 rounded min-w-[300px] text-center">
        Message:
        <span className="text-yellow-300 ml-2">
          {question ? question : "⏳ Waiting for a message..."}
        </span>
      </p>

      <p className="py-5 text-purple-300">Reply to Meliodas:</p>

      <textarea
        value={replyText}
        onChange={handleTypeReply}
        className="bg-white text-black rounded px-2 py-1 w-64"
        placeholder="Type your reply here..."
      />

      <div className="h-6 mt-4">
        {isTyping && (
          <span className="text-blue-300 animate-pulse">
            ✨ Gathering magic to reply...
          </span>
        )}
      </div>
    </div>
  );
}
