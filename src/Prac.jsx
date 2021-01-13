import React from "react";

const list = [
  {
    id: 1,
    name: true,
  },
  {
    id: 2,
    name: true,
  },
  {
    id: 3,
    name: false,
  },
];

function Prac() {
  const foo = () => {
    // list.map((li) => (li.name ? { ...li, name: false } : { ...li }));
    list.map((li) => {
      if (li.name) {
        li.name = false;
      }
    });
    console.log(list);
  };

  return (
    <div>
      <h1 onClick={foo}>sssssss</h1>
    </div>
  );
}

export default Prac;
