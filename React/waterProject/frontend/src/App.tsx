import { useState } from 'react';
import './App.css';
import CategoryFilter from './CategoryFilter';
import ProjectList from './ProjectList';
import WelcomeHeader from './WelcomeHeader';

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <>
      <div className="container">
        <div className="row bg-primary text-white">
          <WelcomeHeader />
        </div>
        <div className="row">
          <div className="col-md-3">
            <CategoryFilter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
          <div className="col-md-6">
            <ProjectList selectedCategories={selectedCategories} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
