import { getDinos } from '../helpers/data/dinoData.js';

const distributeDinos = (array) => {
	let healthyDinos = [];

	array.forEach((element) => {
		if (element.health >= 50) {
			healthyDinos.push(element);
		}
    });
    
    printDinos()
};

const printDinos = (id, array) => {
	$(id).html('');

	array.forEach((element) => {
		$(id).append(
			`<div class="card">
                <img class="card-img-top" src="${element.imageUrl}" alt="${element.name}">
                <div class ="card-body">
                    <h5 class="card-title">${element.name}</h5>
                </div>
            </div>`
		);
	});
};

const buildDinoCards = (array) => {};
