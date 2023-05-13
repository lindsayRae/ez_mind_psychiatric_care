// ====================================================
// ====================================================
const IconBox = ({
  icon,
  className
}) => {
  return <div className={className}>
      <i className={`uil ${icon}`} />
    </div>;
};

export default IconBox;