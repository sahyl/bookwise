import { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

interface Props {
  value?: string;
  onPickerChange: (color: string) => void;
}

const ColorPicker = ({ value, onPickerChange }: Props) => {
  return (
    <div className="relative">
      <div className="color-picker mb-5">
        
        <p className="ml-2 text-black font-semibold" >#</p>
        <HexColorInput
          color={value}
          onChange={onPickerChange}
          className="hex-input"
        />
      </div>
      <HexColorPicker color={value} onChange={onPickerChange} />

    </div>
  );
};

export default ColorPicker;
