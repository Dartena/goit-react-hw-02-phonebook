import PropTypes from "prop-types";
import { Component } from "react";
import { Button, List, ListItem, TelLink, Text } from "../styles/styled";

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <Text>
              {contact.name}:{" "}
              <TelLink href={"tel:" + contact.number}>{contact.number}</TelLink>
            </Text>
            <Button
              type="button"
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ContactList;
