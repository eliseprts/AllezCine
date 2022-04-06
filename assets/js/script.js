// Header

let headerMovie = [51876, 157336, 359471];

for (let i = 0; i < 3; i++) {
	fetch(`https://api.themoviedb.org/3/movie/${headerMovie[i]}?api_key=5d061f8554e919f202d36a68b0803ed5`)
		.then((res) => res.json())
		.then((data) => {
			let headerTemplate = document.getElementById('tpl_header_item');
			let clone = document.importNode(headerTemplate.content, true);
			let movieName = clone.querySelector('.movie_name');
			let movieGenre = clone.querySelector('.movie_genre');
			let movieStars = clone.querySelector('.movie_stars');
			let movieDesc = clone.querySelector('.movie_desc');
			let movieLink = clone.querySelector('.movie_link');
			let carouselItem = clone.querySelector('.header_carousel_item');
			let img = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
			let stars = (data.vote_average / 2).toFixed();

			for (let i = 0; i < 5; i++) {
				let regularStars = 5 - stars;
				let solid = '<i class="fa-solid fa-star"></i>';
				let regular = '<i class="fa-regular fa-star"></i>';
				let str = '';

				for (let j = 0; j < stars; j++) {
					str += solid;
				}
				for (let b = 0; b < regularStars; b++) {
					str += regular;
				}

				movieStars.innerHTML = str;
			}

			switch (i) {
				case 0:
					carouselItem.setAttribute('id', 'item_one');
					break;
				case 1:
					carouselItem.setAttribute('id', 'item_two');
					break;
				case 2:
					carouselItem.setAttribute('id', 'item_three');
					break;
				default:
					break;
			}
			carouselItem.style.background = `url(${img}) no-repeat`;
			carouselItem.style.backgroundSize = 'cover';
			movieName.innerHTML = data.title;
			movieGenre.innerHTML = data.genres[data.genres.length - 1].name;
			movieDesc.innerHTML = data.overview;
			movieLink.setAttribute('href', data.homepage);

			document.querySelector('.header_target').appendChild(clone);
		});
}
