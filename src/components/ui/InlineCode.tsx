import React from 'react';

interface IInlineCodeProps {
  children: React.ReactNode
}

const InlineCode: React.FunctionComponent<IInlineCodeProps> = ({ children }) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};

export default InlineCode;
