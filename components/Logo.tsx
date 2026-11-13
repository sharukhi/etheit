import Crescent from "./Crescent";
import site from "@/data/site.json";

export default function Logo() {
  return (
    <span className="logo">
      <img src="/nav-logo.webp" className="nav_logo" alt=""  />
      <span className="logo__word">{site.name}</span>
    </span>
  );
}
