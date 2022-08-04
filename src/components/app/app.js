import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddform from '../employees-add-form/employees-add-form';


import './app.css';

function App() {

  const data = [
    { name: 'Андрій', salary: 800, increase: true },
    { name: 'Іван', salary: 3000, increase: false },
    { name: 'Олександр', salary: 6000, increase: true }
  ];

  return (
    <div className="app">
      <AppInfo/>
      
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList data={data} />
      <EmployeesAddform/>
    </div>
  );
}

export default App;