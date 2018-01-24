export const counter = (speed, messageString) => {
 this.setState((prevState, props) => {
 	  const startTime = Date.now();
              setInterval(() => {
                const timePassed = (Date.now() - startTime)*speed;
                let newCount = Math.round(prevState.count - timePassed/1000);
                if (newCount < 0) {
                	newCount = "You're dead from 💩!";
                }
                this.setState({ count: newCount });
                console.log(this.state.count)
              }, 1000);

 }) 
};

