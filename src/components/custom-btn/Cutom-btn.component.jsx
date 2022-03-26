import "./Custom-btn.styles.scss";

const CustomBtn = ({ className, children, ...otherPorps }) => {
  return (
    <button className={`${className} button-container`} {...otherPorps}>
      {children}
    </button>
  );
};

export default CustomBtn;
