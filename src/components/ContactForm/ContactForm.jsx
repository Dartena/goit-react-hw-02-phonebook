import PropTypes from "prop-types";
import { Component } from "react";
import { Form, Button, Input, FormLabel } from "../styles/styled";

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: "",
    number: "",
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({ name: "", number: "" });
  }
  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmitHandler}>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onChangeHandler}
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onChangeHandler}
          />
        </FormLabel>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
