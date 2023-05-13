// ==================================================================
// ==================================================================
const Select = ({
  options
}) => {
  return <div className="form-select-wrapper">
      <select className="form-select">
        {options.map(({
        value,
        id,
        title
      }) => <option value={value} key={id}>
            {title}
          </option>)}
      </select>
    </div>;
};

export default Select;