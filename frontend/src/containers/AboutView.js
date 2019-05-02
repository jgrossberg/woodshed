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
                    In the process of internal desktop applications development, 
                    many different design specs and implementations would be involved, 
                    which might cause designers and developers difficulties and duplication 
                    and reduce the efficiency of development.
                    </Paragraph>
                </Typography>
            </div>
        )
    }
};


export default About
