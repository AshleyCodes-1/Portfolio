// DarkModeToggle.js
import React, { useState } from "react";
import './DarkModeToggle.css';
import Toggle from "react-toggle";
import { useMediaQuery } from "react-responsive";
import checkedIcon from '../../images/night.png';
import uncheckedIcon from '../../images/morning.png';


const iconStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateX(-10%) translateY(-50%)',
  width: '17px', // Adjust the width as needed
  height: '17px', // Adjust the height as needed
};

export const DarkModeToggle = ({ onChange }) => {
    const [isDark, setIsDark] = useState(true);
  
    // Remove the unused variable 'systemPrefersDark' if not needed
    useMediaQuery(
      {
        query: "(prefers-color-scheme: dark)",
      },
      undefined,
      (isSystemDark) => setIsDark(isSystemDark)
    );
  
    return (
      <Toggle
        checked={isDark}
        onChange={(event) => {
          setIsDark(event.target.checked);
          if (onChange) {
            onChange(event.target.checked);
          }
        }}
        icons={{ 
          checked: <img src={checkedIcon} alt="Checked" style={iconStyle} />,
          unchecked: <img src={uncheckedIcon} alt="Unchecked" style={iconStyle} />
        }}
        aria-label="Dark mode toggle"
      />
    );
  };
  