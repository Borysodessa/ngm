import { useState } from "react";

const initialColors = {
  color1: "",
  color2: "",
  hrherkuh: "",
};

const keys = Object.keys(initialColors);

export function MakeGradient() {
  const [background, setBackground] = useState();
  const [colors, setColors] = useState(initialColors);

  function handleClear() {
    setColors(initialColors);
  }

  function handleInput(event) {
    const obj = {
      ...colors,
      [event.target.name]: event.target.value,
    };
    setColors(obj);
  }

  function handleClick(event) {
    event.preventDefault();
    const gradientColors = keys.map((el) => colors[el]).join(", ");
    setBackground(`linear-gradient(${gradientColors})`);
  }

  return (
    <div
      style={{
        height: 1000,
        paddingTop: 30,
        background,
      }}
    >
      <form onSubmit={handleClick}>
        {keys.map((el) => (
          <input
            type="text"
            value={colors[el]}
            name={el}
            onInput={handleInput}
          />
        ))}
        <button type="submit">Go</button>

        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
}
