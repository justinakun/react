import { useState } from "react";
import "./Contacts.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendButton = () => {
    if (name !== "" && email !== "" && message !== "") {
      setName("");
      setEmail("");
      setMessage("");
      setSent(true);
    }
  };

  return (
    <div className="contactsContainer">
      <h3>
        Need more help? For general inquiries, please contact Starbucks Customer
        Support. 800-Starbucks (800-782-7282)
      </h3>
      <form className="contactForm">
        <input
          className="nameInput"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="emailInput"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="messageInput"
          placeholder="Enter your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          class="sendMessageButton"
          type="submit"
          onClick={handleSendButton}
        >
          Send
        </button>
        {sent && (
          <p class="finalMessage">
            Thank you for your message, it has been received! :)
          </p>
        )}
      </form>
    </div>
  );
};

export default Contacts;
