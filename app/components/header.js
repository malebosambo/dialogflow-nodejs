import Navigation from './navigation';

export default function Header() {
  return (
    <>
      <div className="Header">
        <div>
          <h3>Google Cloud Conversational Agents</h3>
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </>
  )
}