// DarkModeToggle.js
import React, { useState } from "react";
import Toggle from "react-toggle";
import { useMediaQuery } from "react-responsive";
import 'react-toggle/style.css'; // Import the styles for the toggle component

import checkedIcon from '../../images/moon.png';
import uncheckedIcon from '../../images/brightness.png';


const iconStyle = {
  width: '20px', // Adjust the width as needed
  height: '20px', // Adjust the height as needed
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
  