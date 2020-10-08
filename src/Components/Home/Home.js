import React, {Component} from 'react';
import style from './Home.module.css'


class Home extends Component {
	render() {
		return (
			<div className={style.corpo}>
				<div>
					<h2 className={style.aniLogo}>Bons Drinks</h2>
				</div>				
			</div>
		);
	}
}

export default Home;
