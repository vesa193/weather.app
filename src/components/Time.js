import React  from 'react';
import Clock from 'react-live-clock';
 
class Time extends React.Component {
    render() {
        return(
            <Clock className="Weather__time" format={'HH:mm:ss'} ticking={true} timezone={'Europe/Belgrade'} />
        )
    }
}

export default Time 