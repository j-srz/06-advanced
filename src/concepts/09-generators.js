/**
 *
 * @param {HTMLDivElement} element
 */
export const generatiorFunctionsComponent = (element) => {

	const genId = idGenerator();


	const button = document.createElement('button');
	button.innerHTML = 'Click me';
	element.append(button);

	const renderButton = () => {
		const {value} = genId.next();
		button.innerText = `Click ${value}`;
	}

	button.addEventListener('click', renderButton)

};

function* idGenerator() {
	let currentId = 0;
	while(true) {
		yield ++currentId;
	}
}


function* myFirstGeneratorFunction() {

	yield 'Primer valor';
	yield '2do valor';
	yield '3er valor';
	yield '4to valor';

	return 'ya no hay valores';
	yield 'Ya no puedes hacer nada';
}
