import './CustomCheckbox.css';

type CustomCheckboxProps = {
  value: { title: string; img: string };
  onChange?: (item: string) => void;
  checked?: boolean;
};

const CustomCheckbox = ({ value, onChange, checked }: CustomCheckboxProps) => {
  return (
    <div style={{ width: '100%' }}>
      <label className="card">
        <input
          className="card__input"
          type="checkbox"
          checked={checked}
          onChange={() => (onChange ? onChange(value.title) : null)}
        />
        <div className="card__body">
          <div className="card__body-cover" style={{ overflow: 'hidden' }}>
            <img
              className="card__body-cover-image"
              src={value.img}
              alt={value.title}
            />
            <span className="card__body-cover-checkbox">
              <svg
                className="card__body-cover-checkbox--svg"
                viewBox="0 0 12 10"
              >
                <polyline points="1.5 6 4.5 9 10.5 1" />
              </svg>
            </span>
          </div>
          <div className="card__body-header">
            <div className="card__body-header-title">{value.title}</div>
            {/* <div className="card__body-header-subtitle">
              {data[0].description}
            </div> */}
          </div>
        </div>
      </label>
    </div>
  );
};

export default CustomCheckbox;
