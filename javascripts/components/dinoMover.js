const distributeDinos = (array) => {
	let healthyDinos = [];
	let sickDinos = [];

	array.forEach((element) => {
		if (element.health >= 50) {
			healthyDinos.push(element);
		} else if (element.health < 50 && element.health > 0) {
			sickDinos.push(element);
		}
	});

	printDinos('#kennel', healthyDinos);
	printDinos('#hospital', sickDinos);
};

const printDinos = (id, array) => {
	$(id).html('');

	array.forEach((element) => {
		$(id).append(
			`<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${element.imageUrl}" alt="${element.name}">
                <div class ="card-body">
                    <h5 class="card-title">${element.name}</h5>
                </div>
            </div>`
		);
	});
};

export { distributeDinos };
