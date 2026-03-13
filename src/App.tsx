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
        <div className="weather-promise-header">
          <h4 id="weather-promise-heading">Protect your trip from rain and extreme heat</h4>
          <WeatherIcon />
        </div>
        <p className="weather-promise-temp-context">
          Miami in July: historical average high 91°F, average low 78°F
        </p>
        <ul className="weather-promise-bullets">
          <li>
            <CheckIcon />
            We'll pay out if temperatures exceed 95°F on 3 or more days of your trip, or if rainfall exceeds 1 inch on 2 or more days.
          </li>
          <li>
            <CheckIcon />
            No paperwork, no claims, no hassle.
          </li>
        </ul>
        <a href="#how-it-works" className="weather-promise-how-link">How it works</a>
        <div className="weather-promise-footer">
          <label className="weather-promise-checkbox-label">
            <input type="checkbox" className="weather-promise-checkbox" />
            <span>Add WeatherPromise</span>
          </label>
          <span className="weather-promise-price">$49</span>
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

function WeatherIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34l1.41-1.41M17.66 6.34l1.41 1.41" />
      <path d="M12 18a6 6 0 0 0 6-6c0-2.5-2-4.5-4-6-1.5 1.5-2.5 3.5-2.5 5.5a4.5 4.5 0 0 0 .5 2.2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="bullet-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default App;
