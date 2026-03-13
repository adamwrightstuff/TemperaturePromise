import './App.css';

function App() {
  return (
    <main className="checkout-page">
      <div className="checkout-header">
        <LockIcon />
        <span>Secure checkout</span>
      </div>

      <section className="property-card">
        <h2 className="property-name">Ocean View Condo with Private Beach Access</h2>
        <p className="property-location">Miami Beach, FL</p>
      </section>

      <section className="dates-card">
        <h3>Your trip</h3>
        <p className="dates-range">July 14 – July 21, 2025</p>
        <p className="dates-nights">7 nights</p>
      </section>

      <section className="payment-card">
        <h3>Payment summary</h3>
        <div className="payment-row">
          <span>$285 × 7 nights</span>
          <span>$1,995</span>
        </div>
        <div className="payment-row">
          <span>Cleaning fee</span>
          <span>$150</span>
        </div>
        <div className="payment-row">
          <span>Service fee</span>
          <span>$214</span>
        </div>
        <div className="payment-row total">
          <span>Total</span>
          <span>$2,359</span>
        </div>
      </section>

      <section className="weather-promise" aria-labelledby="weather-promise-heading">
        <p className="module-label">Add protection</p>
        <h4 id="weather-promise-heading">WeatherPromise</h4>
        <div className="bundle-badges">
          <span className="badge">
            <TempIcon />
            Temperature protection
          </span>
          <span className="badge">
            <RainIcon />
            Rain protection
          </span>
        </div>
        <div className="temp-range">
          <strong>Miami in July:</strong> Historical average high 91°F, average low 78°F
        </div>
        <p className="trigger-statement">
          We'll pay out if temperatures exceed 95°F on 3 or more days of your trip, or if rainfall exceeds 1 inch on 2 or more days.
        </p>
        <div className="weather-promise-footer">
          <div>
            <span className="bundle-price">$49</span>
            <span className="bundle-price-note">one-time for your trip</span>
          </div>
          <button type="button" className="add-to-booking">
            Add to booking
          </button>
        </div>
      </section>
    </main>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function TempIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  );
}

function RainIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="8" y1="19" x2="8" y2="21" />
      <line x1="8" y1="13" x2="8" y2="15" />
      <line x1="16" y1="19" x2="16" y2="21" />
      <line x1="16" y1="13" x2="16" y2="15" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="12" y1="15" x2="12" y2="17" />
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
    </svg>
  );
}

export default App;
