import { useState } from 'react';
import CategoryFilter from '../Components/CategoryFilter';
import ProjectList from '../Components/ProjectList';
import WelcomeHeader from '../Components/WelcomeHeader';
import CartSummary from '../Components/CartSummary';

function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  return (
    <div className="container">
      <CartSummary />
      <WelcomeHeader />
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
  );
}

export default ProjectsPage;
