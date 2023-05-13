// ==========================================================
// ==========================================================
const DropdownToggleLink = props => {
  const {
    title,
    ...others
  } = props;
  return <a href="#" data-bs-toggle="dropdown" className="dropdown-item dropdown-toggle" {...others}>
      {title}
    </a>;
};

export default DropdownToggleLink;