import React, { useEffect, useState } from "react";
import "./Dialog.css";

const Dialog = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("dialogAccepted");
    if (accepted) {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("dialogAccepted", "true");
    setIsAccepted(true);
  };

  if (isAccepted) {
    return null;
  }

  return (
    <>
      <div className="dialog__backdrop" />
      <div className="dialog">
        <img 
          className="dialog__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
          alt="Amazon Logo"
        />
        <p>
          Welcome! This is an Amazon clone project created for educational purposes.
          This site is not the real Amazon.com and does not handle real transactions.
        </p>
        <button onClick={handleAccept}>Got it, continue to site</button>
      </div>
    </>
  );
};

export default Dialog;