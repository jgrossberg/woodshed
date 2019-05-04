import React from 'react';
import { Card } from 'antd';





const LessonCard = (props) => {
    
    var dateString = ''
    if (props.data.created_on) {
        dateString = formatDate(props.data.created_on)
    }
    function formatDate(string) {
        return new Date(string).toLocaleDateString()
    }

    return (
        <div>
        <Card headStyle={{fontWeight: 'normal'}}
            title={
                <div>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.author_name}</p>
                    <p>Written on: {dateString}</p>
                </div>
            }
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
            >           
            <p>{props.data.content}</p>
        </Card>
        </div>

    )
}


export default LessonCard;