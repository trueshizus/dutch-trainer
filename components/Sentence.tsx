"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useState,
} from "react";

const Sentence = () => {
  const [result, setResult] = useState("⏳"); // ✅ or ❌ or ⏳

  const handleResponse = (e: FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.value) {
      case "werk":
        setResult("✅");
        break;
      case "":
        setResult("⏳");
        break;
      default:
        setResult("❌");
        break;
    }
  };

  return (
    <div className="text-center">
      <span>Ik</span>
      <input
        type="text"
        onBlur={handleResponse}
        className="border-b-4 order-indigo-500 text-center"
        placeholder="werken"
      />
      <span>op school.</span>

      <span>{result}</span>
    </div>
  );
};

export default Sentence;
