import React from 'react';
import logo from './logo.svg';
import './App.css';

// import moment from 'moment';
// import mz from 'moment-timezone';

import _ from 'lodash';
import ListItem from './ListItem';

// import fake from '@testing-library/jest-dom';
// import fake2 from '@testing-library/react';
// import fake3 from '@testing-library/user-event';
// import fake4 from 'chokidar';

// import data from './data.json';

function App() {
  const [show, updateShow] = React.useState(false);

  React.useEffect(() => {
    var observer = new PerformanceObserver(function(list) {
      var perfEntries = list.getEntries();
      for (var i = 0; i < perfEntries.length; i++) {
        if (perfEntries[i].duration > 100) {
          console.log(`Long task: `, perfEntries[i]);
        }
      }
    });
    // register observer for long task notifications
    observer.observe({ entryTypes: ['longtask'] });
    // Long script execution after this will result in queueing
    // and receiving "longtask" entries in the observer.
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => updateShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      </header>
      <div>{show ? _.times(10000, i => <ListItem number={i} key={i} />) : null}</div>
    </div>
  );
}

export default App;
