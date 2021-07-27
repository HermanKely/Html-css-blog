let galImg= document.querySelectorAll('#single img');
for (var i = 0; i<galImg.length; i++) {
	let image = galImg[i];
	image.addEventListener('click', showpict, false );
}
function showpict(e) {
	let image= e.target;
	let imgContener = document.getElementById('galery');
	let bigImg = imgContener.querySelector('img');
	bigImg.src = image.src;
	imgContener.classList.toggle('visible');
	imgContener.addEventListener('click', close, false);
}
	function close(){
		let imgContener = document.getElementById('galery');
		imgContener.classList.toggle('visible');

	}


	
