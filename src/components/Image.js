import { useState } from "react";
const Image = ({ img, onCheck }) => {
  const { id, label, value } = img;
  const [isChecked, setIsChecked] = useState(false);
  const idCheck = id.slice(0, 4);

  // const handleCheck = (event) => {
  //   setIsChecked(event.target.checked);
  // };

  // const options = {
  //   label: img.title,
  //   value: img.image,
  // };
  // console.log(Array.isArray(img));

  return (
    <>
      <input
        type="checkbox"
        name="image"
        id={idCheck}
        value={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          onCheck(img);
        }}
      />
      <div
        className={`checkImage m-6 ml-auto  max-w-sm rounded overflow-hidden shadow-lg`}
      >
        <img
          className={`w-full border ${isChecked ? "border-blue-700" : ""}`}
          src={value}
          alt={label}
        />
      </div>
    </>
  );
};

export default Image;
