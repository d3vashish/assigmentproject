import React, { useState } from "react";
import "./PricingTable.css";

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleBillingCycle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="pricing-container">
      {/* Billing Cycle Toggle */}
      <div className="billing-toggle">
        <button
          className={billingCycle === "monthly" ? "active" : ""}
          onClick={() => handleBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={billingCycle === "annual" ? "active" : ""}
          onClick={() => handleBillingCycle("annual")}
        >
          Annual
        </button>
      </div>

      {/* Pricing Plans */}
      <div className="pricing-plans">
        {/* Trial Plan */}
        <div className="pricing-plan trial">
          <h3>Trial</h3>
          <p className="price">Try now</p>
          <ul>
            <li>25+ data sources</li>
            <li>GPT4, LinkedIn and others</li>
            <li>Access to slack community</li>
            <li>10+ templates to scale your outbound</li>
          </ul>
          <button className="btn try-now">Try Now</button>
        </div>

        {/* Growth Plan */}
        <div className="pricing-plan">
          <h3>Growth</h3>
          <p className="price">
            {billingCycle === "monthly" ? "$229" : "$229/month"}
            <span className="original-price">$459</span>
            <span className="discount">50% off</span>
          </p>
          <p className="credits">8,000 Credits</p>
          <ul>
            <li>Webhook, HTTP API</li>
            <li>Credit rollover (up to 2x plan credits)</li>
            <li>Outbound email integrations</li>
            <li>Dedicated 3 hours from Bitscale expert</li>
          </ul>
          <button className="btn">Continue with Growth</button>
        </div>

        {/* Booster Plan (Popular) */}
        <div className="pricing-plan popular">
          <h3>Booster</h3>
          <p className="price">
            {billingCycle === "monthly" ? "$499" : "$499/month"}
            <span className="original-price">$999</span>
            <span className="discount">50% off</span>
          </p>
          <p className="credits">25,000 Credits</p>
          <ul>
            <li>Webhook, HTTP API</li>
            <li>Advanced models like Claude, Sonnet</li>
            <li>Outbound email integrations</li>
            <li>Dedicated 8 hours from Bitscale expert</li>
            <li>2 way Hubspot integration</li>
          </ul>
          <button className="btn booster-btn">Continue with Booster</button>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-plan enterprise">
          <h3>Enterprise</h3>
          <p>Contact Us</p>
          <ul>
            <li>Data privacy certification</li>
            <li>Priority Support</li>
            <li>Dedicated Bitscale expert</li>
            <li>Private Slack Channel</li>
            <li>Collaborative workspace and templates</li>
            <li>Unlimited list of leads with unlimited data points</li>
          </ul>
          <button className="btn">Try Now</button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
