import React from "react";

export default function Login({
  handleSubmit,
  htmlfor,
  label,
  type,
  id,
  name,
  value,
  hadleChange,
}) {
  return (
    <>
      <label className="bg-pink-300 rounded-xl" htmlFor={htmlfor}>
        {label}:
      </label>

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={hadleChange}
      />
    </>
  );
}
