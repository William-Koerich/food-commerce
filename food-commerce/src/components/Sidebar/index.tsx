import { useState } from "react"
import { Container } from "./styles"

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'


import menuImg from '../../assets/menu.svg'

export function Sidebar () {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <Container isMenuOpen={menuOpen}>
            <button onClick={handleToggleMenu}>
                <img src={menuImg} alt="Abrir e fechar o menu" />
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <BurgerIcon />
                            <span>El Toro</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <PizzaIcon />
                            <span>Dona Floripa</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <SodaPopIcon />
                            <span>Botequim da Brava</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <IceCreamIcon />
                            <span>Cravo e Canela</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    )
    
}