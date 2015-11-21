
App = React.createClass({
	render() {
		return <ContentPage />
	}
});

ContentPage = React.createClass({
	render() {
		return <div>This is ContentPage</div>
	}
});

FlowRouter.route('/', {
	action() {
		ReactLayout.render(App);
	}
});

if (Meteor.isClient) {
	Meteor.startup(function () {
		ReactDOM.render(<App />, document.getElementById('myapp'));
	});
};