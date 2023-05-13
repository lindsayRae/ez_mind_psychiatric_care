// ==============================================================
// ==============================================================
const IconLink = ({
  href,
  icon
}) => {
  return <a href={href} target="_blank" rel="noreferrer">
      {icon}
    </a>;
};

export default IconLink;