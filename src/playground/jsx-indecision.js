console.log("App.js is running!");

const app = {
	title: "The Indecision App",
	subtitle: "The App That Decides For You!",
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if(option){
		app.options.push(option);
		e.target.elements.option.value = "";
		render();
	}
};

const onRemoveAll = () => {
	app.options = [];
	render();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
	// return option;
}

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];



const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{(app.options && app.options.length > 0) ? ("Here are your options: ") : "No options"}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			{
				// numbers.map((number) => {
				// 	return <p key={number}>Number: {number}</p>;
				// })
			}
			<ol>
				{
				/* map over app.options getting back an array of lis (set key and text) */
					app.options.map((option) => <li key={option}>{option}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
}

render();

