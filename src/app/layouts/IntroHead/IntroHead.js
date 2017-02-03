import styles from './IntroHead.scss'

import React from 'react';
import Nav from 'layouts/Nav/Nav.js'
import { Link } from 'react-router';

class IntroHead extends React.Component {
	render() {
		return (
			<header>
				<div className={styles.m_introHead}>
					<Nav>
						<a to="/">主页</a>
						<a to="/detail/123">前端</a>
						<a to="/detail/123">后端</a>
						<a to="/detail/123">杂谈</a>
					</Nav>
					<div className={styles.m_intro}>
						<div className={styles.intro_bg}></div>
						<div className={styles.intro_wrap}>
							<h1 className={styles.trickName}>许庆钢</h1>
							<span className={styles.motto}>
								我很满意。我清醒的时候，知道此非梦境。尽管在做梦的时候，我以为那就是现实。
							</span>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default IntroHead;