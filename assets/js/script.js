// Header

for (let i = 0; i < 3; i++) {
	fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5d061f8554e919f202d36a68b0803ed5&language=fr-FR`)
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
			let img = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
			let stars = (data.results[i].vote_average / 2).toFixed();

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
			carouselItem.style.background = `url(${img})`;
			// carouselItem.style.backgroundSize = 'cover';
			movieName.innerHTML = data.results[i].title;
			movieGenre.innerHTML = data.results[i].vote_count + ' avis';
			movieDesc.innerHTML = data.results[i].overview;
			movieLink.setAttribute('href', data.results[i].homepage);

			document.querySelector('.header_target').appendChild(clone);
		});
}

// Gallery

for (let j = 0; j < 15; j++) {
	fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5d061f8554e919f202d36a68b0803ed5&language=fr-FR`)
		.then((res) => res.json())
		.then((data) => {
			let cardTemplate = document.getElementById('tpl_card');
			let clone = document.importNode(cardTemplate.content, true);
			let movieGenre = clone.querySelector('.card_movie_genre');
			let movieStars = clone.querySelector('.card_movie_stars');
			let movieTitle = clone.querySelector('.card_movie_title');
			let movieDesc = clone.querySelector('.card_movie_desc');
			let card1 = clone.querySelector('.card1');
			let img = 'https://image.tmdb.org/t/p/w500' + data.results[j].poster_path;
			let stars = (data.results[j].vote_average / 2).toFixed();
			let cardsContainer = document.getElementById('cards_container');

			for (let k = 0; k < 5; k++) {
				let regularStars = 5 - stars;
				let solid = '<i class="fa-solid fa-star"></i>';
				let regular = '<i class="fa-regular fa-star"></i>';
				let str = '';

				for (let l = 0; l < stars; l++) {
					str += solid;
				}
				for (let m = 0; m < regularStars; m++) {
					str += regular;
				}

				movieStars.innerHTML = str;
			}

			card1.style.background = `url(${img})`;
			card1.style.backgroundSize = 'cover';
			movieGenre.innerHTML = data.results[j].vote_count + ' avis';
			movieTitle.innerHTML = data.results[j].title;
			movieDesc.innerHTML = data.results[j].overview;

			cardsContainer.appendChild(clone);
		});
}
