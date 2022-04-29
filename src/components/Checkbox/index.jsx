import './styles.css';

const Checkbox = ({ checked, label, onCategoryChange }) => {
  const onChange = e => {
    onCategoryChange(label, e.target.checked);
  };

  return (
    <label className="Checkbox">
      <input checked={checked} type="checkbox" onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
