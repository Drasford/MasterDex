import { Input } from "antd";
import { filter, includes, toLower } from "ramda";
import React, { useEffect, useState } from "react";

const { Search } = Input;

function InchModal({ open, onClose, setToken, tokenList }) {
  const [searhKeys, setSearchKeys] = useState("");
  const [endtokens, setEndtokens] = useState(tokenList);

  const filterTokens = (query, list) =>
    filter((token) => includes(toLower(query), toLower(token.name)), list);

  useEffect(() => {
    if (searhKeys) {
      setEndtokens(filterTokens(searhKeys, endtokens));
    } else {
      setEndtokens(tokenList);
    }
  }, [searhKeys]);

  if (!open) return null;

  return (
    <div style={{ overflow: "auto", height: "500px" }}>
      <div
        style={{
          margin: "10px",
        }}
      >
        <Search
          placeholder="Enter Token Name"
          onChange={(e) => setSearchKeys(e.target.value)}
        />
      </div>
      {!tokenList
        ? null
        : endtokens.map((token, index) => (
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

export default InchModal;
