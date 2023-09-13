import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {

	const id1 = '5d86371f233c9f2425f16916';
	const id2 = '5d86371fd55e2e2a30fe1ccb1';
	findHero(id1, (err, hero1) => {

		if (err) {
			element.innerHTML = err;
			return;
		}

		findHero(id2, (err, hero2) => {
			if (err) {
				element.innerHTML = err;
				return;
			}
			// element.innerHTML = hero?.name || 'No hay heroe';
			element.innerHTML = `${hero1.name} / ${hero2.name}`;
		})

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
