class VisibilityToggle extends React.Component {
	constructor(props){
		super(props);
		this.handleShowDetails = this.handleShowDetails.bind(this);
		this.state = {
			details: false
		}
	}

	handleShowDetails(){
		this.setState((prevState) => {
			return {
				details: !prevState.details
			};
		});
	}

	render(){
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleShowDetails}>
					{this.state.details ? ("Hide details") : ("Show details")}
				</button>
				{
					(this.state.details && <p>"The fate of destruction is the joy of rebirth"</p>)
				}
			</div>
		);
	}
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));