import React from "react";

const Testimonial = ({
  image,
  alt,
  text,
  heading,
  buttonLabel,
  onButtonClick,
  ...props
}) => {
  return (
    <div
      className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg m-4"
      {...props}
    >
      <img
        src={image}
        alt={alt}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{heading}</h3>
      <p className="text-gray-600">{text}</p>
      {buttonLabel && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Testimonial;
