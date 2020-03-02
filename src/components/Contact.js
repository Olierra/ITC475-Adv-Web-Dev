import React from 'react'
import Toggle from './Classes/Toggle'

const Contact = () => {
    return (
    	<div>
			<nav>
				<ul>
					<li><a href='/'>Home</a></li>
					<li><a href='/about'>About Us</a></li>
					<li><a href='/contact'>Contact Agent</a></li>
				</ul>
			</nav>

			<article id="intro">
				<h1>Contact Agent</h1>
				
				<p>
					We would love to know more about your travel plans. Plese fill out this contact form to get in touch with a travel agent.
				</p>
				<div id="Toggle">
					<div id="Maldives"><Toggle Trip='Maldives'/></div>
					<div id="Cancun"><Toggle Trip='Cancun'/></div>
					<div id="NewZealand"><Toggle Trip='NewZealand'/></div>
					<div id="Venice"><Toggle Trip='Venice'/></div>				
				</div>
			</article>
    	</div>
    )
}
 
export default Contact