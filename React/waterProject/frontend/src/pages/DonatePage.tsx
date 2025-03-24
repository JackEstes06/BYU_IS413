import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types/CartItem';
import { useState } from 'react';
import WelcomeHeader from '../Components/WelcomeHeader';

function DonatePage() {
  const { projectName, projectId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [donationAmount, setDonationAmount] = useState<number>(0);

  const handleAddToCart = () => {
    const newItem: CartItem = {
      projectId: Number(projectId),
      projectName: projectName || 'No project found',
      donationAmount,
    };
    addToCart(newItem);
    navigate('/cart');
  };

  return (
    <>
      <WelcomeHeader />
      <h2>Donate to {projectName}</h2>
      <div>
        <input
          type="number"
          placeholder="Enter donation amount"
          value={donationAmount}
          onChange={(x) => setDonationAmount(Number(x.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      {/* navigate(-1) takes you back to the previous page regardless of the route */}
      <button className="btn btn-success" onClick={() => navigate('/projects')}>
        Go Back
      </button>
    </>
  );
}

export default DonatePage;
