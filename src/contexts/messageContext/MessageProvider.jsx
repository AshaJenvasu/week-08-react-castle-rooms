import { useState, useEffect } from "react";
import MessageContext from "./MessageContext.jsx";

const MessageProvider = ({ children }) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [inputText, setInputText] = useState("");
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [isSending, setIsSending] = useState(false);
  const [isRescued, setIsRescued] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

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
  }, [replyText]); // จะทำงานทุกครั้งที่ replyText (ข้อความที่พิมพ์) มีการเปลี่ยนแปลง

  // ฟังก์ชันรับค่าตอนพิมพ์
  const handleTypeReply = (e) => {
    setReplyText(e.target.value);
  };

  const handleRescueAction = async () => {
    setIsPlayingVideo(true);
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!inputText) return;

    setIsSending(true);

    await delay(3000);

    setQuestion(inputText);
    setIsSending(false);
    setInputText("");
  };

  return (
    <MessageContext.Provider
      value={{
        inputText,
        question,
        answer,
        isSending,
        isRescued,
        isPlayingVideo,
        handleRescueAction,
        handleInput,
        handleAnswer,
        handleSendMessage,
        setIsRescued,
        handleTypeReply,
        isTyping,
        replyText,
        setIsPlayingVideo,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
