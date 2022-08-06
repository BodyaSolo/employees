import { Component } from 'react';
import './employees-add-form.css'

class EmployeesAddform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      error: false
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  } // receiving a change of input data in this.state

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) {
      this.setState(({ error }) => {
        return { error: !error }
      })
      return
    };
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: '',
      error: false
    }) // passing data about the new user to app.js
  }


  render() {
    const { name, salary, error } = this.state;
    let classNames = 'form-control new-post-label'
    if (error) {
      classNames +=' error'
    }
    return (
    <div className="app-add-form">
      <h3>Додати нового співробітника</h3>
      <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}>
          <input type="text"
                className={classNames}
                placeholder="Як його звати?"
                name="name"
                value={name}
                onChange={this.onValueChange}/>
          <input type="number"
                className={classNames}
                placeholder="З/П в $?"
                name="salary"
                value={salary}
                onChange={this.onValueChange}/>

          <button type="submit"
                  className="btn btn-outline-light">Додати</button>
      </form>
    </div>
    );
  }
}

export default EmployeesAddform;