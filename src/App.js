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
import './CSS/Questions.css'
import './CSS/Vocabulary.css'
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
import VocabularyDisplay from './Components/Vocabulary/VocabularyDisplay';
import QuestionDisplay from './Components/Question/QuestionDisplay';
import Register from './Components/LoginRegister/Register';
import login from './Components/LoginRegister/login';

import SubjectDisplay from './Components/Question/SubjectDisplay'


/*Question Mgmt */
import Question from './Components/Admin/QS/Question';
import Subject from './Components/Admin/QS/Subject';
import Chapter from './Components/Admin/QS/Chapter';

/*Vocabulary Mgmt*/
import Vocabulary from './Components/Admin/Vocabulary/Vocabulary';
import Synonyms from './Components/Admin/Vocabulary/Synonyms';
import SynonymDisplay from './Components/Vocabulary/SynonymDisplay';

/*FigureOfSpeech*/
import Simile from './Components/FigureOfSpeech/Simile';
import Metaphor from './Components/FigureOfSpeech/Metaphor';
import Personification from './Components/FigureOfSpeech/Personification';
import Apostrophe from './Components/FigureOfSpeech/Apostrophe';
import Metonymy from './Components/FigureOfSpeech/Metonymy';
import Synecdoche from './Components/FigureOfSpeech/Synecdoche';
import Onomatopoeia from './Components/FigureOfSpeech/Onomatopoeia';
import Alliteration from './Components/FigureOfSpeech/Alliteration';
import Assonance from './Components/FigureOfSpeech/Assonance';
import Pun from './Components/FigureOfSpeech/Pun';





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
          
          <Route path="/Simile" exact component={Simile} />
          <Route path="/Metaphor" exact component={Metaphor} />
          <Route path="/Personification" exact component={Personification} />
          <Route path="/Apostrophe" exact component={Apostrophe} />
          <Route path="/Metonymy" exact component={Metonymy} />
          <Route path="/Synecdoche" exact component={Synecdoche} />
          <Route path="/Onomatopoeia" exact component={Onomatopoeia} />
          <Route path="/Alliteration" exact component={Alliteration} />
          <Route path="/Assonance" exact component={Assonance} />
          <Route path="/Pun" exact component={Pun} />

          
          <Route path="/Register" exact component={Register} />
          <Route path="/login" exact component={login} />

          <Route path="/QuestionDisplay" exact component={QuestionDisplay} />
          <Route path="/SubjectDisplay" exact component={SubjectDisplay} />
          

          
          <Route path="/VocabularyDisplay" exact component={VocabularyDisplay} />
          <Route path="/SynonmsDisplay" exact component={SynonymDisplay} />

          
          <Route path="/Subject" exact component={Subject} />
          <Route path="/Chapter" exact component={Chapter} />
          <Route path="/Question" exact component={Question} />

          <Route path="/Vocabulary" exact component={Vocabulary} />
          <Route path="/Synonyms" exact component={Synonyms} />



        </Switch>
      </Router>
          
          
          

         
          
    </div>
  );
}

export default App;
