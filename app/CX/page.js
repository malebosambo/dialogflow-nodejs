export default function CX() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Dialogflow CX</h1>
        <hr /><br />
        <p>The chatbot on this page has been implemented using an iframe.</p>
      </div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
    </main>
  );
}