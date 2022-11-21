import Button from "components/Button/index";
import Modal from "../Modal/index";

import "./index.scss";

const ConfirmationModal = ({ children, stateHandler }) => {
  return (
    <>
      <Modal stateHandler={stateHandler}>
        {children}
        <div className="buttons">
          <Button className="danger" onClick={() => stateHandler()}>
            Cancel
          </Button>
          <Button className="success">Confirm</Button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
