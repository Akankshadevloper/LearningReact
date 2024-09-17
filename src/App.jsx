
import { CORE_CONCEPTS } from './data.js'; // Ensure data.js is exporting CORE_CONCEPTS correctly
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
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
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
