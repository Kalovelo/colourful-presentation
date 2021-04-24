import { CheckCircleOutlined, CopyOutlined } from "@ant-design/icons";
import React from "react";
import "./snippet.scss";

export default ({ title, snippet, language }: ISnippet) => {
  const [copied, setCopied] = React.useState(false);
  const snippetRef = React.useRef<HTMLPreElement>(null);

  const copyToClipboard = () => {
    var dummy = document.createElement("textarea");
    let text = snippetRef.current?.textContent;
    if (text) dummy.value = text;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };

  const handleCopy = () => {
    copyToClipboard();
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="snippet">
      <h4>{title}</h4>
      <pre data-prismjs-copy-timeout="500" className="snippet__code">
        <code ref={snippetRef} className={`language-${language}`}>
          {snippet}
        </code>
      </pre>
      <button onClick={handleCopy} className="snippet__button">
        {copied ? (
          <>
            <span className="snippet__button-text">copied!</span>
            <CheckCircleOutlined />
          </>
        ) : (
          <>
            <span className="snippet__button-text">copy</span>
            <CopyOutlined />
          </>
        )}
      </button>
    </div>
  );
};
