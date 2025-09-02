import React, { useState } from "react";
import { ModalFooter } from "../atoms/ModalFooter";
import { Button } from "../atoms/Button";

export const ModalFooterExample: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<
    "primary" | "destructive" | "button-only"
  >("primary");

  const handlePrimaryClick = () => {
    // console.log("Primary action clicked");
    setShowModal(false);
  };

  const handleSecondaryClick = () => {
    // console.log("Secondary action clicked");
    setShowModal(false);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>ModalFooter Examples</h2>

      <div style={{ marginBottom: "24px" }}>
        <h3>Select Modal Type:</h3>
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          <Button
            variant={modalType === "primary" ? "filled" : "outline"}
            onClick={() => setModalType("primary")}
          >
            Primary
          </Button>
          <Button
            variant={modalType === "destructive" ? "filled" : "outline"}
            onClick={() => setModalType("destructive")}
          >
            Destructive
          </Button>
          <Button
            variant={modalType === "button-only" ? "filled" : "outline"}
            onClick={() => setModalType("button-only")}
          >
            Button Only
          </Button>
        </div>

        <Button variant="filled" onClick={() => setShowModal(true)}>
          Show Modal Footer
        </Button>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "400px",
              maxWidth: "90vw",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "24px" }}>
              <h3>Modal Content</h3>
              <p>
                This is the modal content area. The footer will appear below.
              </p>
            </div>

            {modalType === "button-only" ? (
              <ModalFooter variant="button-only">
                <Button variant="filled" size="md">
                  Save Changes
                </Button>
              </ModalFooter>
            ) : modalType === "destructive" ? (
              <ModalFooter
                variant="destructive"
                primaryText="Delete"
                secondaryText="Cancel"
                onPrimaryClick={handlePrimaryClick}
                onSecondaryClick={handleSecondaryClick}
              />
            ) : (
              <ModalFooter
                variant="primary"
                primaryText="Save"
                secondaryText="Cancel"
                onPrimaryClick={handlePrimaryClick}
                onSecondaryClick={handleSecondaryClick}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
