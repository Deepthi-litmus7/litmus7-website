const Menu = ({ href, className, text }) => {
  return (
    <div>
      <a href={href} className={className}>
        {text}
      </a>
    </div>
  );
};
export default Menu;
