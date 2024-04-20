import { useRef, useState } from "react"

export const Counter = () => {
  const textRef = useRef();
  const [charLength, setCharLength] = useState(0);
  const [wordLength, setWordLength] = useState(0);


  const handleTextArea = (e) => {
    e.preventDefault();
    const text = textRef.current.value;
    setCharLength(text.replace(/ +/g, "").length);
    if(text.length) {
      const val = text.replace(/ +/g, " ").trim().split(/\s+/).length;
      setWordLength(val)
    } else {
      setWordLength(0);
    }
  }

  const handleClear = (e) => {
    e.preventDefault();
    textRef.current.value = "";
    setCharLength(0);
    setWordLength(0);
  }

  return (
    <section className="counter">
    <textarea onChange={handleTextArea} ref={textRef} data-testid="textArea" placeholder="Type or paste your text"></textarea>
    <button onClick={handleClear} data-testid="clearBtn" disabled={charLength ? false : true}>Clear</button>
    <p className="result">
      <span data-testid="charLength" >Character: {charLength}</span>
      <span data-testid="wordLength" >Word: {wordLength}</span>
    </p>
</section>
  )
}
