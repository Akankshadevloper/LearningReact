import { CORE_CONCEPTS } from './data.js'; // Ensure data.js is exporting CORE_CONCEPTS correctly
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  function handleSelect(){
    console.log('Button clicked');
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept 
                key={index} 
                title={concept.title} 
                description={concept.description} 
                image={concept.image} 
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
          Dynamic Content 
        </section>
      </main>
    </div>
  );
}

export default App;
