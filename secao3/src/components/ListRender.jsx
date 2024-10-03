import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Mateus", "Marcos", "Lucas", "João"]);

  const [users] = useState([
    { id: 1, name: "Calleri", number: 9 },
    { id: 7, name: "Cristiano", number: 7 },
    { id: 10, name: "Neymar", number: 10 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
