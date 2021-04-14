import logo from './logo.svg';
import './App.css';
import './CSS/tables.css'
import './CSS/headings.css'
import './CSS/list.css'
import './CSS/Video.css'
import './CSS/divs.css'
import './CSS/colors.css'
import Navbar from './Components/Navbar';
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Nouns from "./Components/PartsOfSpeech/Noun/Nouns";
import ProNouns  from "./Components/PartsOfSpeech/Pronoun/ProNouns";
import Adjectives  from "./Components/PartsOfSpeech/Adjective/Adjectives";
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Verbs from './Components/PartsOfSpeech/Verb/Verbs';
import Adverbs from './Components/PartsOfSpeech/Adverb/Adverbs';
import Conjunctions from './Components/PartsOfSpeech/Conjunction/Conjunctions';
import Prepositions from './Components/PartsOfSpeech/Preposition/Prepositions';
import Interjections from './Components/PartsOfSpeech/Interjection/Interjections';



function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path='/' exact component={Nouns} />
          <Route path="/Nouns" exact component={Nouns} />
          <Route path="/ProNouns" exact component={ProNouns} />
          <Route path="/Adjectives" exact component={Adjectives} />
          <Route path="/Verbs" exact component={Verbs} />
          <Route path="/Adverbs" exact component={Adverbs} />
          <Route path="/Conjunctions" exact component={Conjunctions} />
          <Route path="/Prepositions" exact component={Prepositions} />
          <Route path="/Interjections" exact component={Interjections} />

        </Switch>
      </Router>
          
          
          

         
          
    </div>
  );
}

export default App;
