import { useState } from "react";

const ALT_STYLES = {
  border: "none",
  padding: "5px 15px",
  color: "#745e5e",
  background: "white",
};

const BTN_TEXT = ["$2k", "$5k", "No Limit"];

export default function ButtonGroup({ setAmount }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="button-group">
      {BTN_TEXT.map((btnText, i) => (
        <button
          onClick={() => {
            setSelected(i);
            setAmount(btnText);
          }}
          style={selected === i ? ALT_STYLES : {}}
        >
          {btnText}
        </button>
      ))}
    </div>
  );
}
