import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {name: 'Audi', year: 2015},
        {name: 'Mercedes', year: 2010},
        {name: 'BMW', year: 2017}
      ],
      pageTitle: 'Barev dzez',
      showCars: false
    }
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState((state) => {
      return {avto: cars}
      
    })
  }

  toggleCarsHandler = () => {
    this.setState((prevState) => {
      return {
        showCars: !prevState.showCars
      }
      
    })
  }

  deleteHandler(index) {
    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({
      cars
    })
  }


  
  render() {

    return (
      <div className='App'>
        <h1>{this.state.pageTitle}</h1>

        <Counter />

        <h1>{this.props.title}</h1>


        <button 
          onClick={this.toggleCarsHandler}
        >Toggle Cars</button>

        { this.state.showCars
          ? this.state.cars.map((item, index) => {
            return(
              
              <ErrorBoundary key={index}>
                <Car
                  name={item.name}
                  year={item.year}
                  onChangeName={(event) => this.onChangeName(event.target.value, index)}
                  onDelete={this.deleteHandler.bind(this, index)}
                />
              </ErrorBoundary>
            )
            
          })
          : null
        }
      </div>
    )
  }
}
export default App;
