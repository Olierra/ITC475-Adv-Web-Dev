import React from 'react'

const home = () => {
    return (
    	<div>
			<nav>
				<ul>
					<li><a href='/'>Home</a></li>
					<li><a href='/About'>About Us</a></li>
					<li><a href='/Contact'>Contact Agent</a></li>
				</ul>
			</nav>

			<article id="intro">
				<h1>Travel Packages</h1>
				
				<p>
					We are specialized with International Travels and Tours. Our expertized and experience can save you 100's of dollars in your pocket. Besides the money you can also save your valuable time at the time of transist or tour. You decide you rbudget and the time from your comfort zone. We will make it happen for you for an exceptional memory. Mega Travels is committed for an excellent service and support of all of its past, present and future customers. We are here today only for you. We remind ourself everyday and every moment with a sincere gratitude.	
				</p>
			</article>

			<article id="cards">
				<a href="#">
					<div class="card">
						<img src="Pictures/maldives.png" />
						<h1>Maldives Resort</h1>
						<p>
							$1800.99 <br />
							Price you pay <span class='cost'>$999.99</span> <br />
							<span class="savings">Your savings $801</span>
						</p>
						<div id="toggle">
							<div id="Maldives"></div>
						</div>
					</div>
				</a>

				<a href="#">
					<div class="card">
						<img src="Pictures/mexico.png" />
						<h1>Mexico Resort (All inclusive!)</h1>
						<p>
							$2999.99 <br />
							Price you pay <span class='cost'>$2199.99</span> <br />
							<span class="savings">Your savings $800</span>
						</p>
						<div id="Cancun"></div>
					</div>
				</a>

				<a href="#">
					<div class="card">
						<img src="Pictures/newzealand.png" />
						<h1>New Zeland Trek</h1>
						<p>
							$2499.00 <br />
							Price you pay <span class='cost'>$2100.00</span> <br />
							<span class="savings">Your savings $399</span>
						</p>
						<div id="NewZealand"></div>
					</div>
				</a>

				<a href="#">
					<div class="card">
						<img src="Pictures/venice.png" />
						<h1>Venice Italy</h1>
						<p>
							$4100.00 <br />
							Price you pay <span class='cost'>$3699.00</span> <br />
							<span class="savings">Your savings $400</span>
						</p>
						<div id="Venice"></div>
					</div>
				</a>
			</article>
       </div>
    )
}
 
export default home