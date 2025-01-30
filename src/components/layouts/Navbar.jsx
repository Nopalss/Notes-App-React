import FormInput from "../element/FormInput";

const Navbar = ({ onSearchNotes }) => {
  return (
    <nav>
      <NavbarTitle />
      <FormInput
        className={"navbar-search"}
        placeholder="Cari catatan..."
        onChange={onSearchNotes}
      />
    </nav>
  );
};

const NavbarTitle = () => {
  return <h1 className="navbar-title">Notes</h1>;
};

export default Navbar;
