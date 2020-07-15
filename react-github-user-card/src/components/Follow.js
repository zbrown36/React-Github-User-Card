import React from "react";
import styled from "styled-components";




const Container = styled.div `
background: grey;
display: flex;
flex-direction: column;
margin: 0 auto;
border: solid 1px gold;
width: 600px;
margin-bottom: 2%;
`;




const Follow = ({followers, user} ) => {
    console.log("mm: Card.js: information to pass", followers)
    


  return (
      
    <div>
        {followers.map((person, index) => {
            return(
            <Container>
            <div>
                <h2>{user.login}'s Follower {person.login}</h2>
            <img src={person.avatar_url} alt="avatar"/>
            </div>
            
            <p>{person.html_url}</p>
            </Container>
            )
        })}
        </div>
  
  );
  };

  export default Follow;