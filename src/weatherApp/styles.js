import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1561553590-267fc716698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  h1 {
    text-align: center;
    padding: 10px 0px;
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.8px;
  }
`;

export const Error = styled.div`
  text-align: center;
  font-size: 30px;
  color: white;
  text-transform: capitalize;
`;

export const ContentContainer = styled.div`
  max-width: 40%;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const TopContent = styled.div`
  width: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  justify-content: space-between;
  align-items: center;
  color: white;
  h3 {
    padding: 10px;
  }
  p {
    padding: 10px;
    font-size: 25px;
    text-transform: capitalize;
    font-family: cursive;
  }
`;
export const BottomContent = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 5px 10px;
    p {
      font-size: 14px;
      text-transform: capitalize;
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 40%;
  margin: 0 auto;
  margin-bottom: 20px;
  form {
    width: 100%;
    display: flex;
    input {
      flex: 1;
      border: none;
      outline: none;
      padding: 10px;
      border-radius: 5px;
      font-size: 15px;
    }
    button {
      display: none;
    }
  }
`;
