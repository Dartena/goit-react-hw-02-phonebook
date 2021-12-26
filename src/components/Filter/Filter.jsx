import PropTypes from "prop-types";
import { Component } from "react";
import { Input, Text } from "../styles/styled";

class Filter extends Component {
  static propTypes = {
    filterHandler: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };
  render() {
    const { filterHandler, filter } = this.props;
    return (
      <div>
        <Text>Find contact by name</Text>
        <Input
          type="text"
          name="filter"
          required
          value={filter}
          onChange={filterHandler}
        />
      </div>
    );
  }
}

export default Filter;
