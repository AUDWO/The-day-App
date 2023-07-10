const OptionMenu = ({ value, onChange, optionList, className }) => {
  return (
    <select
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option
          className={"option"}
          key={idx}
          value={it.value}
          style={{ backgroundColor: "red" }}
        >
          {it.name}
        </option>
      ))}
    </select>
  );
};

export default OptionMenu;
