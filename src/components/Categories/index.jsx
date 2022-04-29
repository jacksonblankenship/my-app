import Checkbox from '../Checkbox';

const Categories = ({ categories, onCategoryChange }) => {
  return (
    <div>
      {categories.map(category => (
        <Checkbox
          checked={category.checked}
          key={category.label}
          label={category.label}
          onCategoryChange={onCategoryChange}
        />
      ))}
    </div>
  );
};

export default Categories;
