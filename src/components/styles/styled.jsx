import styled from "styled-components";

const Title = styled.h2`
  margin-bottom: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto 20px;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  width: 100%;
  line-height: 1.5;
  border: 1px solid #757575;
  border-radius: 8px;
  padding-left: 10px;
  :valid {
    border-color: #16ac16;
  }
  :invalid {
    border-color: red;
  }
`;

const Button = styled.button`
  padding: 10px 16px;
  margin: 0;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #ff6b08;
    color: #fff;
  }
`;

const FormLabel = styled.label``;

const List = styled.ul``;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const Text = styled.p`
  margin: 0;
`;

const TelLink = styled.a`
  text-decoration: none;
  color: inherit;
  :hover,
  :focus {
    color: #ff6b08;
    text-decoration: underline;
  }
`;

export { Title, Form, Input, Button, FormLabel, List, ListItem, Text, TelLink };
