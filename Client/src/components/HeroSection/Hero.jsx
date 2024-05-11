import React from 'react';
import './Hero.css'

function Header() {
	return (
		<>
			<section className='new-to-udemy'>
				<article>
					<p>Jump into learning for less</p>
					<p>
						If you’re new to Udemy, we’ve got good news: For a limited time, courses start at just $13.99 for new learners! Shop now.
					</p>
				</article>
				<figure>
					<img
						src='https://i.ibb.co/2qHbQqM/download.png'
						alt='clock'
					/>
				</figure>
			</section>
		</>
	);
}

export default Header;
