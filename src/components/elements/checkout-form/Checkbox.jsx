// ============================================================
// ============================================================
const Checkbox = ({
  id,
  label,
  ...props
}) => {
  return <div className="form-check">
      <input type="checkbox" className="form-check-input" id={id} {...props} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>;
};

export default Checkbox;