import React from 'react';
import { Calendar } from 'antd';


class Woodshed extends React.Component {

    onPanelChange(value, mode) {
        console.log(value  , mode);

    }

    render () {
        return (
            <div> 
            <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
        )
    }
};


export default Woodshed

