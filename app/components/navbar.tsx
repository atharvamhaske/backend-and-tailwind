import React from "react";

export default function Navbar() {
  const navLinks = [
    {
      title: "Features",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
  ];
  return (
    <div className="navbar-root">
      <div className="logo">Finlara</div>
      <div className="nav-links">
        {navLinks.map((link, idx) => (
          <a className="link-items" key={link.title} href={link.href}>{link.title}</a>
        ))}
      </div>
    </div>
  );
}
