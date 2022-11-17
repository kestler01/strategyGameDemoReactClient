const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Andrews Strategy Game Demo</h2>
			<p>
				<a href='/sign-in'>sign-in</a> or <a href='/sign-up'>register a new account</a> to play
			</p>
		</>
	)
}

export default Home
