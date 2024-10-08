import React from "react";

const PayPalButton: React.FC = () => {
  return (
    <form
      action="https://www.paypal.com/ncp/payment/L4DCUYT5XRGCW"
      method="post"
      target="_top"
      style={{
        display: "inline-grid",
        justifyItems: "center",
        alignContent: "start",
        gap: "0.5rem",
      }}
    >
      <button
        type="submit"
        className="paypal-button"
      >
        Tip Youth Group
      </button>
      <img
        src="https://www.paypalobjects.com/images/Debit_Credit.svg"
        alt="cards"
      />
      <section>
        Powered by{" "}
        <img
          src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
          alt="paypal"
          style={{ height: "0.875rem", verticalAlign: "middle" }}
        />
      </section>

      <style jsx>{`
        .paypal-button {
          text-align: center;
          border: none;
          border-radius: 1.5rem;
          min-width: 11.625rem;
          padding: 0 2rem;
          height: 2rem;
          font-weight: bold;
          background-color: #0033ab;
          color: #ffffff;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 0.875rem;
          line-height: 1.125rem;
          cursor: pointer;
        }
      `}</style>
    </form>
  );
};

export default PayPalButton;
