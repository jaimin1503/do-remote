const Like = ({ saved }) => {
  return (
    <>
      <svg
        height="26px"
        width="26px"
        xmlns="http://www.w3.org/2000/svg"
        fill={saved ? "#60a5fa" : "white"}
        aria-hidden="true"
        viewBox="0 0 24 24"
        role="img"
      >
        <path
          vectorEffect="non-scaling-stroke"
          stroke="#60a5fa"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M19.674 6.176c-1.722-1.634-4.484-1.515-6.165.16L11.988 7.89l-1.642-1.634a4.314 4.314 0 00-6.085 0 4.269 4.269 0 000 6.058s5.485 5.221 7.246 6.537c.28.199.68.199.96 0 1.762-1.316 7.247-6.537 7.247-6.537 1.721-1.714 1.721-4.464-.04-6.138z"
          clipRule="evenodd"
        ></path>
      </svg>
    </>
  );
};
export default Like;
