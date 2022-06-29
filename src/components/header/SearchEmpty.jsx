import React from "react";
import "./css/SearchEmpty.css";
import { FaRegSadTear } from "react-icons/fa";

export default function SearchEmpty() {
  return (
    <div className="search-empty">
      <FaRegSadTear className="emoji-empty"/>
        <p className="message-empty">Nenhum produto encontrado nesta busca!</p>
    </div>
  );
}