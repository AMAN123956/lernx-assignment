import PropTypes from 'prop-types';

const MenuItem = ({ item, getIconComponent }) => {
  const { title, icon } = item;

  return (
    <div className="flex items-center justify-start w-full p-3 menu-icon pointer">
      {getIconComponent && getIconComponent(icon)}
      <p className="font-semibold text-sm text-gray-600">{title}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    notifications: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    icon: PropTypes.string,
  }),
  getIconComponent: PropTypes.func,
};

MenuItem.defaultProps = {
  item: {},
  getIconComponent: null,
};

export default MenuItem;
