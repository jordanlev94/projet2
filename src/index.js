import React , { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';
import Firebase, { FirebaseContext } from './components/firebase/'

ReactDOM.render(


<FirebaseContext.Provider value = {new Firebase()}>
  <React.StrictMode>


    <Suspense fallback={(<div>Loading</div>)}>
      <App />
    </Suspense>


  </React.StrictMode>
  </FirebaseContext.Provider> ,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
