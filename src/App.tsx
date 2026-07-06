import { useState } from "react";
import { scrambleText } from "./order";

export default function App() {
  const [text, setText] = useState("");

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
      />

      <p>{scrambleText(text)}</p>
    </>
  );
}