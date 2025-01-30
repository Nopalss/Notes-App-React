import Card from "../element/Card";
import TextHeader from "../element/TextHeader";
import ParagrafSecond from "../element/ParagrafSecond";
const ActiveNotes = ({
  dataNotes,
  onDeleteActive,
  onHandlerAddToArsip,
  searchNotes,
}) => {
  return (
    <div className="active-notes">
      <HeaderAactiveNotes />
      <BodyactiveNotes
        data={dataNotes}
        onHandlerDelete={onDeleteActive}
        onHandlerAddToArsip={onHandlerAddToArsip}
        searchNotes={searchNotes}
      />
    </div>
  );
};
const HeaderAactiveNotes = () => {
  return (
    <div className="header-active-notes">
      <TextHeader className={"header-active-notes-title"}>
        Catatan Aktif
      </TextHeader>
    </div>
  );
};

const BodyactiveNotes = ({
  data,
  onHandlerDelete,
  onHandlerAddToArsip,
  searchNotes,
}) => {
  const activeData = data.filter(
    (note) =>
      note.archived === false &&
      note.title.toLowerCase().includes(searchNotes.toLowerCase())
  );

  return activeData.length === 0 ? (
    <div className="body-active-notes">
      <ParagrafSecond>Catatan Aktif Kosong</ParagrafSecond>
    </div>
  ) : (
    <div className="body-active-notes">
      {activeData.map((note) => {
        if (note.archived === false) {
          return (
            <Card
              title={note.title}
              createdAt={note.createdAt}
              key={note.id}
              onHandlerDelete={onHandlerDelete}
              id={note.id}
              button={"Arsipkan"}
              onHandlerAdd={onHandlerAddToArsip}
            >
              {note.body}
            </Card>
          );
        }
      })}
    </div>
  );
};

export default ActiveNotes;
