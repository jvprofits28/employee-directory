import React, { Component } from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import TableRow from "./components/TableRow/TableRow";
import SearchForm from "./components/SearchForm/SearchForm";
import API from "./utils/API";
class App extends Component {
  state = {
    employees: [],
    search: "",
    message: [],
    error: "",
  };
  componentDidMount() {
    API.getUsers()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
    console.log(this.state.employees);
  }
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search);
    console.log(this.state.employees);
    const employee = this.state.employees.filter(
      (index) =>
        index.name.first.toLowerCase() === this.state.search.toLowerCase()
    );
    console.log(employee);

    this.setState({ employees: employee });
  };
  render() {
    return (
      <div>
        <Header></Header>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Table>
          {this.state.employees.map((employee) => (
            <TableRow
              picture={employee.picture.thumbnail}
              first={employee.name.first}
              last={employee.name.last}
              email={employee.email}
              phone={employee.phone}
              dob={employee.dob}
            />
          ))}
        </Table>
      </div>
    );
  }
}
export default App;
