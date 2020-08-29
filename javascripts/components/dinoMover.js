const distributeDinos = (array) => {
	let healthyDinos = [];
	let sickDinos = [];
	let deadDinos = [];

	array.forEach((element) => {
		if (element.health >= 50) {
			healthyDinos.push(element);
		} else if (element.health < 50 && element.health > 0) {
			sickDinos.push(element);
		} else if (element.health === 0) {
			deadDinos.push(element);
		}
	});

	printDinos('#kennel', healthyDinos);
	printDinos('#hospital', sickDinos);
	printDinos('#graveyard', deadDinos);
};

const printDinos = (id, array) => {
	$(id).html('');

	array.forEach((element, index) => {
		$(id).append(
			`<div class="card p-2" style="width: 18rem;">
                <img class="card-img-top" src="${element.imageUrl}" alt="${element.name}">
                <div class ="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <button type="button" class="btn btn-danger" id="${element.id}">Delete</button>
                </div>
            </div>`
		);

		removeDino(element, array, index, id);
	});
};

const removeDino = (element, array, index, id) => {
	$(`#${element.id}`).on('click', () => {
		array.splice(index, 1);
		rebuildDinos(id, array);
	});
};

const rebuildDinos = (id, array) => {
	printDinos(id, array);
};

export { distributeDinos };
