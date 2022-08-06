import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddform from '../employees-add-form/employees-add-form';


import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Андрій', salary: 800, increase: true , id: 1 },
        { name: 'Іван', salary: 3000, increase: false , id: 2 },
        { name: 'Олександр', salary: 6000, increase: true, id: 3 }
      ]
    }
    this.maxId = 4;// id counter for creating a new employee in the database
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  } // delete employer from this.state

  addItem = (name, salary) => { 
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data : newArr
      }
    }) // add new employeer to this.state
  }
  
  render() {
    return (
    <div className="app">
      <AppInfo/>
      
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList
        data={this.state.data}
        onDelete={this.deleteItem} />
        <EmployeesAddform onAdd={this.addItem} />
    </div>
  );
  }
 
}

export default App;