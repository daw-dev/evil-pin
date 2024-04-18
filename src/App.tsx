import { useState } from "react";
import "./App.css";
import "./utils";

function formatPin(pin: number) {
  return pin.toLocaleString(undefined, {
    minimumIntegerDigits: 4,
    useGrouping: false,
  });
}

type AccessState = "pinpad" | "loggedin";

function App() {
  const [access, setAccessState] = useState<AccessState>("pinpad");

  if (access === "pinpad")
    return (
      <PinPad
        correctPin="4278"
        onCorrectPinFound={() => setAccessState("loggedin")}
      />
    );
  return (
    <>
      <h2>Did you really find it?</h2>
      <h3>Wow take this cookie 🍪</h3>
    </>
  );
}

interface PinPadProps {
  correctPin: string;
  onCorrectPinFound: () => void;
}

function PinPad(props: PinPadProps) {
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
          {pinPad.map((current) =>
            current === props.correctPin ? (
              <button
                key={current}
                className="pin"
                onClick={() => props.onCorrectPinFound()}
              >
                <Hidden text={current} />
              </button>
            ) : (
              <button key={current} className="pin">
                <Hidden text={current} />
              </button>
            )
          )}
        </div>
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
