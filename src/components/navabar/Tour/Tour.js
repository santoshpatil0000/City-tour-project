import React, { Component } from 'react'
import './Tour.scss'

class Tour extends Component {

    state = {
        showInfo:false
    }

    showHandler = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    
    
    render() {
        // console.log(this.props)
        const {id, name, city, img, info} = this.props.tour
        const {removeTour} = this.props

        return (
            <article className='tour'>
                <div className='img-container'>
                <img src={img} alt='images of the tour'/>
                <span className='close-btn' onClick={() =>{removeTour(id)}}>
                <i className="far fa-times-circle"></i>
                </span>

                </div>
                <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{' '}
                    <span onClick={this.showHandler}>
                        <i className="fas fa-caret-square-down"></i>
                    </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                    
                </div>
            </article>
        )
    }
}

export default Tour
