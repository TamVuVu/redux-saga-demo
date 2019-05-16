import React from 'react';
import Main from './components/main/main';
import Header from './components/header'
import Footer from './components/footer';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <NotificationContainer />
    </div>
  );
}

export default App;
