import React from 'react';

import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

class About extends React.Component {

    render () {
        return (
            <div> 
                <Typography>
                    <Title>What is this fantasy?</Title>
                    <Paragraph>
                    The woodshed is where I post my guitar practice pieces. You can use this website
                    to build your own practice routine by viewing, starring, and / or adding practices
                    to your woodshed. 
                    </Paragraph>
                </Typography>
            </div>
        )
    }
};


export default About
