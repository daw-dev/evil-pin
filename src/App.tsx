import "./App.css";
import "./utils";

function formatPin(pin: number) {
  return pin.toLocaleString(undefined, {
    minimumIntegerDigits: 4,
    useGrouping: false,
  });
}

function App() {
  const pinPad = new Array<number>(10000)
    .fill(0)
    .map((_, index) => index)
    .map(formatPin);

  pinPad.shuffle();

  return (
    <>
      <h2>To access this page, insert your pin:</h2>
      <div className="pinpad">
        <div className="pins">
          {pinPad.map((current) => (
            <button key={current} className="pin">
              <Hidden text={current}/>
            </button>
          ))}
        </div>
        <button className="go">GO!</button>
      </div>
    </>
  );
}

interface HiddenProps {
  text: string;
}

function Hidden(props: HiddenProps) {
  return (
    <>
      {props.text.split("").map((letter) => (
        <>
          {letter}
          <span style={{ fontSize: 0 }}> </span>
        </>
      ))}
    </>
  );
}

export default App;
