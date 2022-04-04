const nextImage = (id, idTwo) => {
	document.querySelector(id).style.display = 'none';
	document.querySelector(idTwo).style.display = 'block';
};
const previousImage = (id, idTwo) => {
	document.querySelector(id).style.display = 'block';
	document.querySelector(idTwo).style.display = 'none';
};

document.querySelectorAll('.slide_button').forEach((b) => {
	b.addEventListener('click', (d) => {
		let slideID = document.querySelector('header').id;
		let classButton = d.target.classList[0];

		if (classButton == 'next') {
			switch (slideID) {
				case 'slide_1':
					document.querySelector('header').id = 'slide_2';
					nextImage('#item_one', '#item_two');
					break;
				case 'slide_2':
					document.querySelector('header').id = 'slide_3';
					nextImage('#item_two', '#item_three');
					break;
				default:
					break;
			}
		}
		if (classButton == 'previous') {
			switch (slideID) {
				case 'slide_2':
					document.querySelector('header').id = 'slide_1';
					previousImage('#item_one', '#item_two');
					break;
				case 'slide_3':
					document.querySelector('header').id = 'slide_2';
					previousImage('#item_two', '#item_three');
					break;
			}
		}
	});
});
