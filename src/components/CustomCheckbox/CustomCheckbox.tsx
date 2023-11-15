import './CustomCheckbox.css';

const data = [
  {
    title: 'Category A',
    description: 'Motorcycles',
    image: 'https://i.ibb.co/zXmHzBk/category-a.png',
    checked: false,
    disabled: false,
  },
];

type CustomCheckboxProps = {
  value: string;
  onChange?: (item: string) => void;
  checked?: boolean;
};

const CustomCheckbox = ({ value, onChange, checked }: CustomCheckboxProps) => {
  return (
    <label className="card">
      <input
        className="card__input"
        type="checkbox"
        checked={checked}
        onChange={() => (onChange ? onChange(value) : null)}
      />
      <div className="card__body">
        <div className="card__body-cover">
          <img
            className="card__body-cover-image"
            src={data[0].image}
            alt={value}
          />
          <span className="card__body-cover-checkbox">
            <svg className="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1" />
            </svg>
          </span>
        </div>
        <div className="card__body-header">
          <div className="card__body-header-title">{value}</div>
          <div className="card__body-header-subtitle">
            {data[0].description}
          </div>
        </div>
      </div>
    </label>
  );
};

export default CustomCheckbox;
