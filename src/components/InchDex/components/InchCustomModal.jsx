import React from "react";
import { pipe, values, filter } from "ramda";

function InchCustomModal({ open, onClose, setToken, fromToken, tokenList }) {
  if (!open) return null;

  const acceptableTokens = pipe(
    values,
    filter((token) =>
      token.symbol === fromToken.symbol
        ? false
        : token.symbol === "ETH" || token.symbol === "WBTC"
    )
  );

  return (
    <div style={{ overflow: "auto", height: "auto" }}>
      {!tokenList
        ? null
        : acceptableTokens(tokenList).map((token, index) => (
            <div
              style={{
                padding: "5px 20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setToken(token);
                onClose();
              }}
              key={index}
            >
              <img
                style={{
                  height: "32px",
                  width: "32px",
                  marginRight: "20px",
                }}
                src={token.logoURI}
                alt="noLogo"
              />
              <div>
                <h4>{token.name}</h4>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "14px",
                  }}
                >
                  {token.symbol}
                </span>
              </div>
            </div>
          ))}
    </div>
  );
}

export default InchCustomModal;
