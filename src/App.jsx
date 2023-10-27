import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>ViteReact</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div>
        <TextExpander>
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It the stuff of dreams and science fiction,
          but believe it or not, space travel is a real thing. Humans and robots
          are constantly venturing out into the cosmos to uncover its secrets
          and push the boundaries of what possible.
        </TextExpander>

        <TextExpander
          collapsedNumWords={20}
          expandButtonText="Show text"
          collapseButtonText="Collapse text"
          buttonColor="#ff6622"
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while its not always easy (or cheap), the
          results are out of this world. Think about the first time humans
          stepped foot on the moon or when rovers were sent to roam around on
          Mars.
        </TextExpander>

        <TextExpander expended={true} className="box">
          Space missions have given us incredible insights into our universe and
          have inspired future generations to keep reaching for the stars. Space
          travel is a pretty cool thing to think about. Who knows what well
          discover next!
        </TextExpander>
      </div>
    </>
  );
}

export default App;

function TextExpander({
  collapsedNumWords = 10,
  collapseButtonText = "Show More",
  expandButtonText = "Show Less",
  buttonColor,
  expended = false,
  className,
  children,
}) {
  const [isExpended, setIsExpended] = useState(expended);

  const displayText = isExpended
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpended((exp) => !exp)}>
        {isExpended ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
