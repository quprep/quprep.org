import React from "react";

type TokenType = "kw" | "str" | "comment" | "plain";
interface Token { text: string; type: TokenType; }

const KEYWORDS = /^(from|import|as|return|def|class|if|elif|else|for|in|not|and|or|True|False|None|print)\b/;

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  let plain = "";

  const flush = () => {
    if (plain) { tokens.push({ text: plain, type: "plain" }); plain = ""; }
  };

  while (i < line.length) {
    if (line[i] === "#") {
      flush();
      tokens.push({ text: line.slice(i), type: "comment" });
      return tokens;
    }
    if (line[i] === '"' || line[i] === "'") {
      flush();
      const q = line[i];
      let j = i + 1;
      while (j < line.length && line[j] !== q) j++;
      tokens.push({ text: line.slice(i, j + 1), type: "str" });
      i = j + 1;
      continue;
    }
    const m = line.slice(i).match(KEYWORDS);
    if (m) {
      flush();
      tokens.push({ text: m[0], type: "kw" });
      i += m[0].length;
      continue;
    }
    plain += line[i++];
  }
  flush();
  return tokens;
}

export function highlightPython(code: string, showLineNumbers = true) {
  return code.split("\n").map((line, i) => {
    let content: React.ReactNode;

    if (line.trimStart().startsWith("#")) {
      content = <span className="text-muted-foreground/50">{line}</span>;
    } else {
      const tokens = tokenizeLine(line);
      content = tokens.map((t, j) => {
        if (t.type === "kw")      return <span key={j} className="text-primary">{t.text}</span>;
        if (t.type === "str")     return <span key={j} className="text-accent">{t.text}</span>;
        if (t.type === "comment") return <span key={j} className="text-muted-foreground/50">{t.text}</span>;
        return <span key={j} className="text-foreground">{t.text}</span>;
      });
    }

    return (
      <div key={i} className="flex">
        {showLineNumbers && (
          <span className="select-none text-muted-foreground/30 w-7 shrink-0 text-right mr-4 text-xs leading-6">
            {i + 1}
          </span>
        )}
        <span className="leading-6">{content}</span>
      </div>
    );
  });
}
