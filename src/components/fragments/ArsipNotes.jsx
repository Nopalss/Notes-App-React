import Card from "../element/Card";
import TextHeader from "../element/TextHeader";
import ParagrafSecond from "../element/ParagrafSecond";
const ArsipNotes = ({
  dataNotes,
  onHandlerDelete,
  onHandlerAddToAktif,
  searchNotes,
}) => {
  return (
    <div className="active-notes">
      <HeaderArsipNotes />
      <BodyArsipNotes
        data={dataNotes}
        onHandlerDelete={onHandlerDelete}
        onHandlerAddToAktif={onHandlerAddToAktif}
        searchNotes={searchNotes}
      />
    </div>
  );
};
const HeaderArsipNotes = () => {
  return (
    <div className="header-active-notes">
      <TextHeader className={"header-active-notes-title"}>
        Catatan Arsip
      </TextHeader>
    </div>
  );
};

const BodyArsipNotes = ({
  data,
  onHandlerDelete,
  onHandlerAddToAktif,
  searchNotes,
}) => {
  const archiveData = data.filter(
    (note) =>
      note.archived !== false &&
      note.title.toLowerCase().includes(searchNotes.toLowerCase())
  );
  return archiveData.length === 0 ? (
    <div className="body-active-notes">
      <ParagrafSecond>Catatan Arsip Kosong</ParagrafSecond>
    </div>
  ) : (
    <div className="body-active-notes">
      {archiveData.map((note) => {
        if (note.archived !== false) {
          return (
            <Card
              title={note.title}
              createdAt={note.createdAt}
              key={note.id}
              onHandlerDelete={onHandlerDelete}
              id={note.id}
              button={"Aktifkan"}
              onHandlerAdd={onHandlerAddToAktif}
            >
              {note.body}
            </Card>
          );
        }
      })}
    </div>
  );
};

export default ArsipNotes;
