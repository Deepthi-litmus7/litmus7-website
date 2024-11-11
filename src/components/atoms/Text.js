const Text = ({ header, Subheader, classNameHeader, classNameSubHeader}) => {
  return (
    <div>
      <main className="text-center mb-8">
        <h1 className={classNameHeader}>
          {header}
        </h1>
        <h2 className={classNameSubHeader}>
          {Subheader}
        </h2>
      </main>{" "}
    </div>
  );
};
export default Text;
