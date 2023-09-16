const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p>copyright &copy; {today.getFullYear()}</p>
      {length > 1 ? (
        <p>{length} todos in the list</p>
      ) : (
        <p>{length} todo in the list</p>
      )}
    </footer>
  );
};
export default Footer;
