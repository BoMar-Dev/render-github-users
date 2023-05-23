import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const RenderData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetchApi = async () =>{
      try {
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    
    }
    fetchApi()

  }, []);

  return (
    <section>
      <h3> GitHub Användare</h3>
      <ul className="users">
        {users.map((user)=>{
          const {id, login, avatar_url, html_url} = user
          console.log(user);
         return <li key={id}>
          <img src={avatar_url} alt={login}/>
          <div>
            <h5>{login}</h5>
            <a className="profil" href={html_url}>Profil</a>
          </div>
         </li>
        })}
      </ul>
    </section>
  )
};
export default RenderData;
 