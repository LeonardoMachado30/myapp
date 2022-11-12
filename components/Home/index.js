import '../../SCSS/shared/shared.scss'
import './style.scss'
import React, { useState } from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
// import MyImg from '../../src/images/teste.jpeg'

export default function Index() {
  const [nome, setNome] = useState("Flavio")

  return (
      <div>
        <h1>Olá {nome}</h1>
        <input type="text" placeholder="Digite seu nome" />
        <img />
        <Card />
      </div>
  );
}
