import styled from "styled-components";

/*export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;*/

export const Form = styled.form`
  width: 400px;
  background: #FFFFFF;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  
  img {
    width: 150px;
    margin: 10px 0 40px;
  }
  
  input {
    height: 40px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    &::placeholder {
      color: #999;
    }
  }
  
  button {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    background: #FC6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 111%;
    text-transform: uppercase;
  }
  
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  a {
    border: 1px solid #0073B1;
    width: 110%;
    text-align: center;
    height: 45px;
    line-height: 45px;
    background-color: #0073B1;
    color: #FFFFFF;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    border-radius: 5px;
  }
`;
