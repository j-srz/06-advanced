import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {

	const id = '5d86371f233c9f2425f16916';
	findHero(id, (err, hero) => {

		if (err) {
			element.innerHTML = err;
			return;
		}

		// element.innerHTML = hero?.name || 'No hay heroe';
		element.innerHTML = hero.name;
	} );

};

/**
 *
 * @param {String} id
 * @param { (error: String|Null, hero: Object)=> void } callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

	if (!hero) {
		callback(`Hero with id ${ id } not found`);
		return; // undefined
	}

  callback(null, hero);
};
