'use strict';

function Homepage() {
  return (<React.Fragment>
      <p>Welcome, Trader! Enjoy trading!</p>
      <a href="/cards">Click here to view the trading cards.</a>
      <img src="/static/img/balloonicorn.jpg"></img>
        </React.Fragment>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
 