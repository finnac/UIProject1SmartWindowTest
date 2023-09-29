function CustomizableButton({ id, label, value, name, onChange }) {
  return (
    <label className={`btn btn-${value}`} style={{ width: "150px" }}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        autoComplete="off"
        onChange={onChange}
      />{" "}
      {label}
    </label>
  );
}

function ButtonOptions({ buttons, name, onChange }) {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      {buttons.map((button) => (
        <CustomizableButton
          key={button.id}
          id={button.id}
          label={button.label}
          value={button.value}
          name={name}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export { ButtonOptions, CustomizableButton };