import Image from "next/image";
import Script from "next/script";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Dialogflow ES</h1>
        <hr /><br />
        <p>The chatbot on this page has been implemented using an iframe.</p><br />
        <p>The iframe interface is sourced by a script and is controlled using properties and css variables.</p>
      </div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1">
      </script>
      <df-messenger
        intent="WELCOME"
        chat-title="QandA"
        agent-id="979dc3fb-61fc-41c5-a0dc-9634f0b987ca"
        language-code="en"
      ></df-messenger>
    </main>
  );
}
