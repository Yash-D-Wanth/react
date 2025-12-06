import React from "react";

function Map() {
  const numbers = [1, 2, 4, 5, 3];
  return (
    <>
        {numbers.map(number => (
          <p>{3.14 * number * number}</p>
        ))}
    </>
  );
}

export default Map;
