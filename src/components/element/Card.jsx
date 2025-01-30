import Paragraf from "./Paragraf";
import ParagrafSecond from "./ParagrafSecond";
import Button from "./Button";
import { showFormattedDate } from "../../utils";

const Card = ({
  title,
  createdAt,
  children,
  onHandlerDelete,
  id,
  button,
  onHandlerAdd,
}) => {
  return (
    <div className="card">
      <div className="card-main">
        <CardHeader title={title} createdAt={showFormattedDate(createdAt)} />
        <CardBody>{children}</CardBody>
      </div>
      <CardFooter
        onDelete={onHandlerDelete}
        id={id}
        button={button}
        onHandlerAdd={onHandlerAdd}
      />
    </div>
  );
};

const CardHeader = ({ title, createdAt }) => {
  return (
    <div className="card-header">
      <h1 className="card-header-title">{title}</h1>
      <ParagrafSecond className="card-header-createdAt">
        {createdAt}
      </ParagrafSecond>
    </div>
  );
};

const CardBody = ({ children }) => {
  return (
    <div className="card-body">
      <Paragraf>{children}</Paragraf>
    </div>
  );
};

const CardFooter = ({ onDelete, id, button, onHandlerAdd }) => {
  return (
    <div className="card-footer">
      <Button className="card-footer-button delete" onClick={onDelete} id={id}>
        Hapus
      </Button>
      <Button
        className="card-footer-button arsipkan "
        onClick={onHandlerAdd}
        id={id}
      >
        {button}
      </Button>
    </div>
  );
};
export default Card;
