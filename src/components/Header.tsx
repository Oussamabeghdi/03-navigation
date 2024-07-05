import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <div className="header">
        <span>{title}</span>
      </div>
    </header>
  );
};

export default Header;
