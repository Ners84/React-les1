import React, { Component } from 'react';
import Radium from 'radium';
import color from 'color';
import './Car.scss'


class Car extends Component {

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate', nextProps, nextState)
    //     return nextProps.name.trim() === this.props.name.trim()
    // }

    render() {

        // if(Math.random() > 0.5) {
        //     throw new Error()
        // }

        const textColor = ['block']

        if(this.props.name !== '') {
            textColor.push('green')
        } else {
            textColor.push('red')
        }

        if(this.props.name.length > 6) {
            textColor.push('blue')
        }

        const styles = {
            boxShadow: '3px 3px 3px rgba(0,0,0,0.5)',
            border: '1px solid black',
            ':hover': {
                boxShadow: '15px 15px 3px rgba(0, 0, 255, 0.5)',
                border: '3px solid black',
                cursor: 'pointer',
                color: color('#ff4123')
            }
        }
        return(
        <div className='wrapper' style={styles}>
            <h3 >Car name: {this.props.name} </h3>
            <p>Year: <strong>{this.props.year}</strong></p>
            <input type="text" onChange={this.props.onChangeName} value={this.props.name} className={textColor.join(' ')} />
            <button onClick={this.props.onDelete}>Delete</button>
        </div>
        )
    }
}



export default Radium(Car)