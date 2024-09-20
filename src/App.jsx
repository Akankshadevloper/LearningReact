import { useState } from 'react';
// Ensure data.js is exporting correctly
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import CoreConcepts from './components/CoreConcept.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null); // Set initial state to null

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);  // Update selectedTopic here
    console.log(selectedButton);       // Logging selected topic correctly
  }

  return (
    <>
      <Header />
      <main>
      <CoreConcepts/>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Correct syntax for TabButton component */}
            <TabButton 
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>

            <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>

            <TabButton 
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>

            <TabButton 
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic ? <p>Please select a topic.</p> : null}

          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
