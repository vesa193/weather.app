import React, { Component } from 'react'
import tear from '../fa-icons/tear.svg'
import temp from '../fa-icons/temp.svg'
import marker from '../fa-icons/marker.svg'



class Weather extends Component {
    
    render() {
        const image = '../water.png'
        console.log(image)
        return(
            <div className="Weather">
                <div className="Weather__card">
                    <div className="Weather__details">
                        {this.props.city && this.props.country !== '' ? <p><img className="Weather__icon" src={marker} alt="marker"/><span>{this.props.city}, {this.props.country}</span></p> : this.props.error}
                        {this.props.city && this.props.country && <p><img className="Weather__icon" src={temp} alt="temperature"/><span>{this.props.temp}°C</span></p>}
                        {this.props.city && this.props.country && <p className="Weather__humidity Weather__icon"> <img src={tear} alt="tear"/> <span>{this.props.humidity}%</span></p>}
                    </div>
                    <div className="Weather__info">
                        {this.props.city && this.props.country && <p className="Weather__description Weather__icon"><span>{this.props.description}</span></p>}
                        {this.props.city && this.props.country && <img className="Weather__icon--main" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="icon"/>}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Weather