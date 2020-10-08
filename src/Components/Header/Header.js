import React, {Component} from 'react';
import '../../App.css';
import style from './Header.module.css'


export default class Header extends Component {
	render() {
		return (
			<header className={style.header}>
				<nav>
					<ul>
						<li>Drinks</li>
						<li>Sobre Nós</li>
						<li className={style.logo}>Bons Drinks</li>
						<li>Nosso Time</li>
						<li>Contato</li>
					</ul>
				</nav>
			</header>
		);
	}
}
