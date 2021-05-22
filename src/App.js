import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
class App extends Component {
  state = {
    employees: [],
  };
  componentDidMount() {
    API.getUsers()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
    console.log(this.state.employees);
  }

  render() {
    return (
      <div>
        <Header>
          <SearchForm></SearchForm>
        </Header>
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
