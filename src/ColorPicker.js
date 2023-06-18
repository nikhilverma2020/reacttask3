import React, { useState } from "react";

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div>
      <button onClick={() => setShowColors(!showColors)}>
        {selectedColor ? `Selected color: ${selectedColor}` : "Pick a color"}
      </button>
      {showColors && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: "30px",
                height: "30px",
                display: "inline-block",
                margin: "5px",
                cursor: "pointer"
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
