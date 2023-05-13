// ============================================================
// ============================================================
const Select = ({
  id,
  label,
  options,
  errorMsg
}) => {
  return <div className="form-select-wrapper">
      <select className="form-select" id={id}>
        <option className="text-muted" value="" disabled>
          {label}
        </option>

        {options.map(item => <option key={item.value} value={item.value}>
            {item.title}
          </option>)}
      </select>

      {errorMsg && <div className="invalid-feedback">{errorMsg}</div>}
    </div>;
};

export default Select;