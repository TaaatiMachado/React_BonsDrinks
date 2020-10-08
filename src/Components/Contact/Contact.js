import React, {Component} from 'react';
import contato from '../img/contato.jpg';
import style from './Contact.module.css'


class Home extends Component {
	render() {
		return (
			<div className={style.corpo}>
				<h2>Contato</h2>
				<div className={style.content}>
					<img src={contato} alt="Contato" />
					<form className={style.form} action="">
						<label for="name">Nome</label>
						<input type="text" name="name" id="formName" />
						<label for="email">Email</label>
						<input type="email" name="email" id="formEmail" />
						<label for="message">Mensagem</label>
						<textarea name="message" id="formMessage" cols="30" rows="10" />
					</form>
				</div>
			</div>
		);
	}
}

export default Home;
