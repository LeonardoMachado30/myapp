import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Header(){
    return (
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Jogos</li>
                    <li>Categorias</li>
                    <li>Sobre</li>
                    <li>Fale conos</li>
                </ul>
            </nav>
        </header>
    )
}