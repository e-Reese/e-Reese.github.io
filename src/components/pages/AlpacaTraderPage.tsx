import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/ProjectDetail.css';

// Import images
import alpacaTraderImage from '../../assets/images/AlpacaTraderThumbnail_Wide.jpeg';

const AlpacaTraderPage: React.FC = () => {
  return (
    <Layout>
      <article>
        <header className="article-header">
          <h1>Alpaca Trader</h1>
          <div className="meta">
            <span className="author">By Ethan Reese</span>
          </div>
          <div className="featured-image">
            <img src={alpacaTraderImage} alt="Alpaca Trader" />
            <p className="caption">Options Strategies with Alpaca API</p>
          </div>
        </header>

        <section className="intro">
          <p>
            Alpaca Trader is a modular Python implementation for trading options spread strategies using the Alpaca API. The project supports various options strategies including bear put spreads, bull put spreads, bull call spreads, and iron condors, and is organized to be maintainable, reusable, and easy to understand.
          </p>
        </section>

        <section id="features">
          <h2>Key Features</h2>
          <ul className="materials-list">
            <li>Multiple options strategies support (bear put spreads, bull put spreads, bull call spreads, iron condors)</li>
            <li>Strategy Manager that evaluates and selects optimal strategies based on risk-to-reward ratios</li>
            <li>Option selection based on expiration, IV, delta, and various Greek criteria</li>
            <li>Risk management through buying power limits</li>
            <li>Exit criteria based on price, delta, and IV thresholds</li>
            <li>Position monitoring and potential rolling/rinsing</li>
          </ul>
        </section>

        <section id="tech-stack">
          <h2>Technology Stack</h2>
          <ul>
            <li>Python 3.8+</li>
            <li>alpaca-py</li>
            <li>pandas</li>
            <li>numpy</li>
            <li>scipy</li>
            <li>plotly</li>
            <li>python-dotenv</li>
          </ul>
        </section>

        <section id="strategies">
          <h2>Strategy Implementations</h2>
          
          <h3>Strategy Manager</h3>
          <p>
            The strategy manager evaluates multiple options strategies and selects the one with the lowest risk-to-reward ratio. It follows these steps:
          </p>
          <ol>
            <li>
              <strong>Evaluation Phase:</strong> Evaluates bear put spread and bull put spread strategies without executing trades, filtering options based on criteria like expiration, IV, delta, etc.
            </li>
            <li>
              <strong>Risk Analysis:</strong> Calculates risk and max profit for each strategy, then computes risk-to-reward ratios.
            </li>
            <li>
              <strong>Strategy Selection:</strong> Selects the strategy with the lower risk-to-reward ratio.
            </li>
            <li>
              <strong>Execution:</strong> Places an order for the selected strategy using the appropriate order placement function.
            </li>
          </ol>

          <h3>Bear Put Spread</h3>
          <p>
            A bear put spread is a bearish options strategy that involves buying a put option at a higher strike price (long put) and selling a put option at a lower strike price (short put). This strategy has limited profit potential if the stock price falls, limited risk if the stock price rises, and costs less than buying a standalone put option.
          </p>

          <h3>Bull Put Spread</h3>
          <p>
            A bull put spread is a bullish options strategy that involves selling a put option at a higher strike price (short put) and buying a put option at a lower strike price (long put). This strategy generates income through the premium received, has limited profit potential if the stock price rises or stays above the short put strike, has limited risk if the stock price falls below the long put strike, and benefits from time decay.
          </p>

          <h3>Bull Call Spread</h3>
          <p>
            A bull call spread is a bullish options strategy that involves buying a call option at a lower strike price (long call) and selling a call option at a higher strike price (short call). This strategy has limited profit potential if the stock price rises above the long call strike, limited risk with max loss equal to the net premium paid, is less expensive than buying a standalone call option, and benefits from upward price movement while limiting cost.
          </p>

          <h3>Iron Condor</h3>
          <p>
            An iron condor is a market-neutral options strategy that involves selling a put option at a higher strike price (short put), buying a put option at a lower strike price (long put), selling a call option at a lower strike price (short call), and buying a call option at a higher strike price (long call). This strategy creates a range where the strategy is profitable (between short put and short call), has limited profit potential (maximum is the net premium received), has limited risk (defined by the difference between strikes in either spread), benefits from time decay and low volatility, and works best in sideways or range-bound markets.
          </p>
        </section>

        <section id="github-link">
          <h2>GitHub Repository</h2>
          <p>
            The full source code for this project is available on GitHub. Feel free to explore, fork, or contribute to the project.
          </p>
          <div className="cta-button">
            <a href="https://github.com/e-Reese/alpaca-trader" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </section>

        <section id="disclaimer">
          <h2>Disclaimer</h2>
          <p>
            This code is for educational purposes only. It is not financial advice. Use at your own risk.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default AlpacaTraderPage;
