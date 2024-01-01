import { Component } from 'react'
import './commonResource/css/styles.css';
import './commonResource/css/bootstrap.css';
import Header from './commonResource/Components/Header/Header';
import Alert from './commonResource/Components/Alertsection/Alert';
import FirstSection from './commonResource/Components/FirstSection/FirstSection';
import SecondSection from './commonResource/Components/SecondSection/SecondSection';
import ThirdSection from './commonResource/Components/ThirdSection/ThirdSection';
import FourthSection from './commonResource/Components/FourthSection/FourthSection';
import FifthSection from './commonResource/Components/FitfthSection/FifthSection';
import SixthSection from './commonResource/Components/SixthSection/SixthSection';
import FooterSection from './commonResource/Components/FooterSection/FooterSection';
import logo from './logo.svg';
import './App.css';
class App extends Component{
render() {
  return (
    <div>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <FooterSection/>
    </div>
  );
}
    
}

export default App;


