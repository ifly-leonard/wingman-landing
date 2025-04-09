'use client';

import ReactMarkdown from 'react-markdown';

const markdownContent = `
# Welcome to Markdown Demo

This is a demonstration of **react-markdown** capabilities.

## Features

1. **Headers** - You can use different levels of headers
2. **Lists** - Both ordered and unordered
3. **Formatting** - *Italic*, **Bold**, and ~~Strikethrough~~

### Code Example
\`\`\`javascript
const hello = "world";
console.log(hello);
\`\`\`

### Links and Images
[Visit React Markdown](https://github.com/remarkjs/react-markdown)

> This is a blockquote
> It can span multiple lines

---

### Tables
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
`;

export default function MarkdownDemo() {
  return (
    <div className="prose dark:prose-invert max-w-none p-4">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
} 