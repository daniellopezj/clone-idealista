import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { backend } from '@/api/backend';

const Body = () => {
  const [floors, setFloors] = useState([]);
  const router = useRouter();


  useEffect(() => {
    router.query
  }, []);

  return (
    <div>
      <h1>List of Floors</h1>
      <ul>
        {/* {floors.map((floor) => (
          <li key={floor.id}>
            <Floor floor={floor} />
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Body;
