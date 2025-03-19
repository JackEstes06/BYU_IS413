import { useEffect, useState } from 'react';
import { food } from './types/Food';

function FoodList() {
  const [foods, setFoods] = useState<food[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch('https://localhost:5000/MarriottFood');
      const data = await response.json();
      setFoods(data);
    };

    fetchFood();
  }, []);

  return (
    <>
      <h1>Marriott Food</h1>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Vendor</th>
            <th>Food Rating</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((f) => (
            <tr key={f.foodId}>
              <td>{f.eventName}</td>
              <td>{f.vendor}</td>
              <td>{f.foodRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FoodList;
