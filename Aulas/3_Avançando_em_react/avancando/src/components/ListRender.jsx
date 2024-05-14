import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Ibercson", "Mendes", "Santos"]);

    const [user, setUser] = useState([
        {id: 1, name: "Ibercson", age: 25},
        {id: 2, name: "Mendes", age: 35},
        {id: 3, name: "Santos", age: 45}
    ]);

    const deleteRandom = () => {

      const randomNumber = Math.floor(Math.random() * 4);

      setUser((prevUser) => 
        prevUser.filter((user) => randomNumber !== user.id)
      );  
    };

  return (
    <div>
          {/*4 - render sem key*/}
        <ul>
            {list.map((item, i) => {
               return <li key={i}>{item}</li>
            })}
        </ul>
          {/*5 - render com key*/}
        <ul>
            {user.map((user) => (
              <li key={user.id}>
                {user.name} - {user.age} anos
              </li>
            ))}
        </ul>
        {/*6 - previous state*/}
        <button onClick={deleteRandom}>Delete random user</button> 
    </div>
  );              
  
};

export default ListRender;