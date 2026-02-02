import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
// Portal target for modals
const modalRoot = document.getElementById("modal-root") || document.body;

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          insetBlockStart: 0,
          insetInlineStart: 0,
          maxInlineSize: "100vw",
          maxBlockSize: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 999,
        }}
      />

      {/* Modal content */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          zIndex: 1000,
          maxWidth: "90%",
          maxHeight: "90%",
          overflowY: "auto",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        {children}
      </div>
    </>,
    modalRoot,
  );
};

export default Modal;
