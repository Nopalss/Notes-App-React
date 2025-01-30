import AddNotes from "../fragments/AddNotes";
import ActiveNotes from "../fragments/ActiveNotes";
import ArsipNotes from "../fragments/ArsipNotes";
const MainPage = ({
  dataNotes,
  onHandlerDelete,
  onHandlerAddToArsip,
  onHandlerAddToAktif,
  onHandlerAddNotes,
  onMaxLength,
  maxLength,
  searchNotes,
}) => {
  return (
    <div className="main-page">
      <AddNotes
        onHandlerAddNotes={onHandlerAddNotes}
        onMaxLength={onMaxLength}
        maxLength={maxLength}
      />
      <ActiveNotes
        searchNotes={searchNotes}
        dataNotes={dataNotes}
        onDeleteActive={onHandlerDelete}
        onHandlerAddToArsip={onHandlerAddToArsip}
      />
      <ArsipNotes
        searchNotes={searchNotes}
        dataNotes={dataNotes}
        onHandlerDelete={onHandlerDelete}
        onHandlerAddToAktif={onHandlerAddToAktif}
      />
    </div>
  );
};

export default MainPage;
