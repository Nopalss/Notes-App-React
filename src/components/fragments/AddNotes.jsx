import TextHeader from "../element/TextHeader";
import ParagrafSecond from "../element/ParagrafSecond";
import FormInput from "../element/FormInput";
import Button from "../element/Button";
const AddNotes = ({ onHandlerAddNotes, onMaxLength, maxLength }) => {
  return (
    <div className="add-notes">
      <HeaderAddNotes maxlength={maxLength}>
        <ParagrafSecond className="header-add-notes-subtitle">
          Sisa Karakter: {maxLength}
          {console.log(maxLength)}
        </ParagrafSecond>
      </HeaderAddNotes>
      <form onSubmit={onHandlerAddNotes}>
        <BodyAddNotes onMaxLength={onMaxLength} />
        <FooterAddNotes />
      </form>
    </div>
  );
};

const HeaderAddNotes = ({ maxLength, children }) => {
  return (
    <div className="header-add-notes">
      <TextHeader className="header-add-notes-title">Tambah Catatan</TextHeader>
      {children}
    </div>
  );
};

const BodyAddNotes = ({ onMaxLength }) => {
  return (
    <div className="body-add-notes">
      <FormInput
        className="add-title"
        placeholder="Ini adalah Judul"
        name="addTitle"
        id="addTitle"
        maxlength="50"
        onChange={onMaxLength}
      />
      <textarea
        className="add-text"
        name="addText"
        id="addText"
        placeholder="Tulis Catatan"
        required
      ></textarea>
    </div>
  );
};

const FooterAddNotes = () => {
  return (
    <div className="footer-add-notes">
      <Button className="footer-add-notes-button">Buat</Button>
    </div>
  );
};

export default AddNotes;
