import React from "react";
import Form from "../Forms/contactForm";

export default function Contact() {
  return (
    <div className="contact" style={{ minHeight: "80vh" }}>
      <h1 className="title">Contact Me!</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form />
      </div>
    </div>
  );
}
