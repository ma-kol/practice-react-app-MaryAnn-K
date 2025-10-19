/*

You will create reusable components and practice passing data from a parent
component to child components using props. This activity reinforces the concepts
of props, dynamic rendering, and separation of concerns.

*/

import './App.css'
import ProfileCard from './components/ProfileCard';
import ProfileContainer from './components/ProfileContainer';

function App() {

  return (
    <>
    <div>
      <h1>Profile Cards</h1>
      <ProfileContainer />
    </div>
    </>
  );
}

export default App;
