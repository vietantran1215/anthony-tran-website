import React from 'react';

interface IH2Props {
  children: React.ReactNode
}

const H2: React.FunctionComponent<IH2Props> = ({ children }) => {
  return <h2 className="scroll-m-20 py-2 text-3xl font-semibold tracking-tight first:mt-0">
    {children}
  </h2>;
};

export default H2;
