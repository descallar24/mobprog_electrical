import { useState } from "react";

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [passwordVisibility2, setPasswordVisibility2] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [rightIcon2, setRightIcon2] = useState('eye');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility,
    };
  };