const menu = [
{
	id:1,
	title:"buttermilk pancakes",
	category:"breakfast",
	price:15.99,
	img:"",
	desc:`i'm baby woke milkshake wolf bitters live-edgr blue bottle, hammock freegan copper mug whatever cold-pressed`,
},
{
	id:2,
	title:"diner double",
	category:"lunch",
	price:13.99,
	img:""
	desc:`vaporware iphone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.Marfa thundercats `,
},
{
	id=3,
	title:"godzilla milkshake",
	category:"shakes",
	price:6.99,
	img:"",
	desc:`ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
},
{
	id:4,
	title:"country delight"
	category:"breakfast",
	price:20.99,
	img:"",
	desc:`Shabby chic keffiyeh neutra snackware pork belly shoredditch.Prism austin milkshake truffault,`,
},
{
	id:5,
	title:"egg attack",
	price:22.99,
	img:"",
	desc:`franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
},
{
	id:6,
	title:"oreo dream",
	category:"shakes",
	price:18.99,
	img:"",
	desc:`Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iphone everyday`,
},
{
	id:7,
	title:"bacon overflow",
	category:"breakfast",
	price:8.99,
	img:"",
	desc:`carry jianbing norncore freegan.Viral single-origin coffe live-edge, pork belly cloud bread iceland put a bird `,
},
{
	id:8,
	title:"american classic",
	category:"lunch",
	price:12.99,
	img:"",
	desc:`on it kickstarter thundercats migas everyday carry squid palo santo leggings.Food truck truffault `,
},
{
	id:9,
	title:"quarantine buddy",
	category:"shakes",
	price:16.99,
	img:"",
	desc:`skateboard fam authentic semiotics. Live-edge lyft af,edison bulb yuccie crucifix microdosing. `,
},
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded",function (){
	
});

function displayMenuItems(menuItems){
	let display = menuItems.map(function (item){
		
		return `<article>
				<img src=${item.img} alt=${item.title} class="" />
				<div>
					<header>
						<h4>${item.title}</h4>
						<h4 class="price">$${item.price}</h4>
					</header>
					<p class="item-text">
						${item.desc}
					</p>
				</div>		
				</article>`;
	});
	
}