import { useState } from "react";

export const useVisibility = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  function show(event) {
    //   TODO Search why we have to prevent default
    event.preventDefault();
    setIsVisible(true);
  }

  function hide(event) {
    //   TODO Search why we have to prevent default
    event.preventDefault();
    setIsVisible(false);
  }

  return [show, hide, isVisible];
};
