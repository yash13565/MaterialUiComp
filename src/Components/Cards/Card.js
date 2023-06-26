import React from 'react'
import './Card.css'
import Card from '@mui/material/Card';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';
function Cards() {
    const data1 = [
        {
            heading: 'key Information'
        },
        {
            lists: 'Opportunity ',
            name: 'Chris'
        },
        {
            lists: 'Stage',
            name: 'Closed won'
        },
        {
            lists: 'Expected(%)',
            name: '100'
        },
        {
            lists: ' Revenue',
            name: '0.00'
        },
        {
            lists: 'Closed',
            name: '30 june,23'
        },
        {
            lists: 'Employee',
            name: '25'
        }
    ]
    const data2 = [
        {
            head: 'Activities',head1:'Today',icon:<KeyboardArrowDownIcon/>
        },
        
        {   person:'Chris',
            details: ' schedule a meeting for 30 june 23'
        },
        {   person:'Chris',
            details: ' schedule a offline meeting for today'
        },
        {   person:'Chris',
            details: ' schedule a offline meeting for today'
        },
    ]
    return (
        <>
            <Card sx={{maxWidth: 377}} className='parentcard1'>
                    {
                        data1.map((x) => {
                            return (
                                <div key={x.id} className='heading'>
                                    <h4>{x.heading}</h4>
                                    <div className='details'>
                                        <p>{x.lists}</p>
                                        <div className='paracont'>
                                        <p>{x.name}</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
            </Card>
            <Card className='parentcard2'>
                {
                    data2.map((x) => {
                        return (
                            <div key={x.id}>
                                <div  className='headings'>
                                    <p>{x.head}</p>
                                    <span><Button className='btnicon' size='small'>{x.head1}<sub>{x.icon}</sub></Button></span>
                                </div>
                                <div className='paras'>
                                  <p> <span style={{color:'grey'}}>{x.person}</span>{x.details}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Card>
        </>
    )
}

export default Cards
