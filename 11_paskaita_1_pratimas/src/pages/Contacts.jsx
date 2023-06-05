import { useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendButton = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSent(true);
  };

  return (
    <div>
      <p>2401 Utah Avenue, South Suite 800 Seattle, WA 98134 USA</p>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter your message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button onClick={handleSendButton}>Send</button>
      {sent && <p>Thank you for your message, it has been received! :)</p>}
    </div>
  );
};

export default Contacts;
