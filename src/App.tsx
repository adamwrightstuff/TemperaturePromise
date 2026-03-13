import { useState } from 'react';
import './App.css';

function App() {
  return <CheckoutPage />;
}

function CheckoutPage() {
  const [hasWeatherPromise, setHasWeatherPromise] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  const handleConfirmBooking = () => {
    setIsConfirmed(true);
  };

  const showConfirmedState = isConfirmed && hasWeatherPromise;
  const totalLabel = hasWeatherPromise ? '$2,408' : '$2,359';

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
        {hasWeatherPromise && (
          <div className="payment-row">
            <span>Trip protection</span>
            <span>$49</span>
          </div>
        )}
        <div className="payment-row total">
          <span>Total</span>
          <span>{totalLabel}</span>
        </div>
      </section>

      <section
        className={`weather-promise${showConfirmedState ? ' weather-promise-confirmed' : ''}`}
        aria-labelledby="weather-promise-heading"
      >
        {showConfirmedState ? (
          <>
            <div className="weather-promise-header confirmed-header">
              <div className="weather-promise-confirmed-icon">
                <ShieldIcon />
              </div>
              <div>
                <h4 id="weather-promise-heading" className="confirmed-title">
                  Your trip is protected
                </h4>
                <p className="weather-promise-temp-context">
                  WeatherPromise will automatically monitor weather at your destination. No claims, no paperwork.
                </p>
              </div>
            </div>
            <ul className="weather-promise-confirmed-list">
              <li>
                <CheckIcon />
                <span>Rain protection — refund if rainfall exceeds threshold on 2+ days</span>
              </li>
              <li>
                <CheckIcon />
                <span>Temperature protection — refund if temperatures exceed 95°F on 3+ days</span>
              </li>
            </ul>
            <div className="weather-promise-footer confirmed-footer">
              <span className="weather-promise-price-label">WeatherPromise bundle</span>
              <span className="weather-promise-price">$49 added to your booking</span>
            </div>
          </>
        ) : (
          <>
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
                <span>
                  We'll pay out if temperatures exceed 95°F on 3 or more days of your trip, or if rainfall exceeds 1 inch
                  on 2 or more days.
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>No paperwork, no claims, no hassle.</span>
              </li>
            </ul>
            <button
              type="button"
              className="weather-promise-how-link"
              onClick={() => setIsHowItWorksOpen(true)}
            >
              How it works
            </button>
            <div className="weather-promise-footer">
              <label className="weather-promise-checkbox-label">
                <input
                  type="checkbox"
                  className="weather-promise-checkbox"
                  checked={hasWeatherPromise}
                  onChange={(event) => setHasWeatherPromise(event.target.checked)}
                />
                <span>Add WeatherPromise</span>
              </label>
              <span className="weather-promise-price">$49</span>
            </div>
          </>
        )}
      </section>

      <button
        type="button"
        className="primary-button confirm-booking-button"
        onClick={handleConfirmBooking}
      >
        Confirm booking
      </button>

      {isHowItWorksOpen && (
        <div
          className="wp-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="How WeatherPromise works"
          onClick={() => setIsHowItWorksOpen(false)}
        >
          <div
            className="wp-tooltip"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="wp-tooltip-close"
              onClick={() => setIsHowItWorksOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <p className="wp-tooltip-header">Rain + temperature protection, one bundle</p>

            <p className="wp-tooltip-primary-line">
              <strong>Either triggers, you get paid</strong> — one payout per trip, no claims, no paperwork.
            </p>

            <div className="wp-tooltip-sections">
              <div className="wp-tooltip-item">
                <span className="wp-emoji">🌧</span>
                <div>
                  <strong>Rain protection</strong> — if rainfall exceeds the threshold on 2+ days of your trip, you get a
                  full refund of your Vrbo stay
                </div>
              </div>
              <div className="wp-tooltip-item">
                <span className="wp-emoji">🌡</span>
                <div>
                  <strong>Temperature protection</strong> — if temperatures exceed 95°F on 3+ days of your trip, you get a
                  full refund of your Vrbo stay
                </div>
              </div>
            </div>

            <div className="wp-tooltip-quote">
              <p className="wp-tooltip-quote-text">
                “I will NEVER rent a house without purchasing the WeatherPromise. Forever grateful.”
              </p>
              <p className="wp-tooltip-quote-attribution">Ellie, Vrbo traveler</p>
            </div>

            <button type="button" className="wp-tooltip-footer-link">
              See full terms
            </button>
          </div>
        </div>
      )}
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

function ShieldIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
      <polyline points="9 12.5 11 14.5 15 10.5" />
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
