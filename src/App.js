import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
class App extends Component {
  state = {
    employees: [],
    search: "",
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
    API.getUSer(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.results);
        }
        this.setState({ results: res.data.results, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
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
