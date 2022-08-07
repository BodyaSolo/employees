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
        { name: 'Андрій', salary: 800, increase: false , rise: true, id: 1 },
        { name: 'Іван', salary: 3000, increase: false , rise: false, id: 2 },
        { name: 'Олександр', salary: 6000, increase: true, rise: false, id: 3 }
      ],
      term: ''
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
      rise: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data : newArr
      }
    }) // add new employeer to this.state
  }

  onToggleProp = (id, prop) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex(elem => elem.id === id);

    //   const old = data[index];
    //   const newItem = { ...old, prop: !old.prop };
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return {
    //     data: newArr
    //   }
    // })

    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  } //switching the state of the props increase or rise

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  } //object filter to match the search

  onUpdateSearch = (term) => {
    this.setState({ term });
  } //changing this.state.term

  
  render() {
    const { data, term } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.searchEmp(data, term);

    return (
    <div className="app">
        <AppInfo
          employees={employees}
          increased={increased} />
      
      <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
        <AppFilter/>
      </div>
      <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
        <EmployeesAddform onAdd={this.addItem} />
    </div>
  );
  }
 
}

export default App;