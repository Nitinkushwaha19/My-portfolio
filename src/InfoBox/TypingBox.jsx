import "./TypingBox.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypingBox() {
  const [text] = useTypewriter({
    words: ["Aspiring Software Engineer", "Full Stack Developer"],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className="container">
        &lt;<b>code</b>&gt;
        <span>I am a {text}</span>
        <Cursor cursorStyle="|" />
        &lt;/<b>code</b> &gt;
      </div>
    </>
  );
}
