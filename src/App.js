import logo from './logo.svg';
import './App.css';
import './CSS/tables.css'
import './CSS/headings.css'
import './CSS/list.css'
import './CSS/Video.css'
import './CSS/divs.css'
import './CSS/colors.css'
import './CSS/Menu.css'
import './CSS/Admin.css'
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
import Question from './Components/Admin/QS/Question';
import Vocabulary from './Components/Admin/QS/Vocabulary';
import VocabularyDisplay from './Components/Vocabulary/VocabularyDisplay';
import QuestionDisplay from './Components/Question/QuestionDisplay';



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
          <Route path="/Question" exact component={Question} />
          <Route path="/Vocabulary" exact component={Vocabulary} />
          <Route path="/VocabularyDisplay" exact component={VocabularyDisplay} />
          <Route path="/QuestionDisplay" exact component={QuestionDisplay} />
          

        </Switch>
      </Router>
          
          
          

         
          
    </div>
  );
}

export default App;
