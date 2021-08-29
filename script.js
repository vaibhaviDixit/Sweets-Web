burger=document.querySelector(".burger");
// nav=document.querySelector(".nav");
navlist=document.querySelector(".nav-list");
main = document.querySelector(".main");
// console.log(burger);

burger.onclick = ()=>{


	navlist.classList.toggle('nav-list-resp');
	main.classList.toggle('vh');
	
}

