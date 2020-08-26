import { distributeDinos } from './components/dinoMover.js';
import { getDinos } from './helpers/data/dinoData.js';

const init = () => {
	distributeDinos(getDinos());
};

init();
