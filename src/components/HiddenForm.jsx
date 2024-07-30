// components/HiddenForm.js
export default function HiddenForm() {
    return (
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="first-name" />
        <input type="text" name="last-name" />
        <input type="email" name="email" />
        <input type="text" name="phone" />
        <input type="text" name="website" />
        <textarea name="message"></textarea>
      </form>
    );
  }