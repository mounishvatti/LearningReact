// import React from 'react'
import PropTypes from 'prop-types';

const Button = ({text}) => {
  return (
    <button
    onClick={() => window.open(text.link, "_blank")}
  type="button"
  className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
>
  {text.name}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2 h-4 w-4"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
  };

export default Button