export const FormField = ({ id, value, onChange, editable, error }) => {
  return (
    <>
      <label htmlFor={id} className="form-label text-m">
        {id[0].toUpperCase() + id.slice(1)}:
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        disabled={!editable}
        className={error ? "form-field error text-m" : "form-field text-m"}
        placeholder={error ? error : null}
      />
    </>
  );
};
