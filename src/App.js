import React from 'react';
import logo from './logo.svg';
import './App.css';
import testVideo from './big_buck_bunny_480p_surround-fix.mp4'

function LoopButton(props){
	return(
		<button onClick={props.onClick} className="Loop-button">
			{props.value}
		</button>
	);
}

class App extends React.Component {
	constructor(props){
		super(props);
		this.videoRef = React.createRef();
		this.loopTimer = null;
		this.state = {
			videoIsLoop: false,
		};
	}
	
	handleClick(){		
		const videoIsLoop = !this.state.videoIsLoop;
		let videoNode = this.videoRef.current;
		if(videoIsLoop === true){
			videoNode.currentTime = 209;
			videoNode.play();
			this.loopTimer = setInterval(() => videoNode.currentTime = 209, 2000);
		} else {
			clearInterval(this.loopTimer);
		}
				
		this.setState({videoIsLoop: videoIsLoop});
	}	
	
	render(){
		const buttonText = "Turn video loop " + (this.state.videoIsLoop ? "off" : "on");
		return (
			<div className="App">
			  <header className="App-header">
				<LoopButton 
					value={buttonText}
					onClick={() => this.handleClick()}
				/>
				<video controls ref={this.videoRef}>
					<source src={testVideo} type="video/mp4"/>
					Your browser does not support mp4.
				</video>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				  Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
				  className="App-link"
				  href="https://reactjs.org"
				  target="_blank"
				  rel="noopener noreferrer"
				>
				  Learn React
				</a>
			  </header>
			</div>
		  );
		}
}

export default App;
