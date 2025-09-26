import React from 'react';

export function useCoolState() {
  const [isCool, setCool] = React.useState(true);

  function toggleCool() {
    setCool(!isCool);
  }

  return { isCool, toggleCool };
}
