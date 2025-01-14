import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.agent_es}>
      <div>
        <h1>Dialogflow ES</h1>
        <hr /><br />
        <p>The chatbot on this page has been implemented using an iframe.</p><br />
        <p>The iframe interface is sourced by a script and is controlled using properties and css variables.</p>
      </div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="XM Bot"
        agent-id="d5462511-31a4-41e7-98fb-325ff0b52954"
        language-code="en"
      ></df-messenger>
    </main>
  );
}
