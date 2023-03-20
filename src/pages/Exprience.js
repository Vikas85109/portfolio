import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import 'react-vertical-timeline-component/style.min.css'


const Exprience = () => {
    return (
        <div>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2012-2013'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Neeraj Sr. Sec. School, Manesar(Gurugram) <br /> Haryana 122052</h3>
                    
                        <p> 10<sup>th</sup> Class Pass With 79% </p>
                    
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2014-2015'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Neeraj Sr. Sec. School, Manesar(Gurugram) <br /> Haryana 122052</h3>
                    <p>
                        12<sup>th</sup> Class Pass With 62.8%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2015-2019'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'> Bachelor of Technology in Computer Science & Engineering (MDU) </h3>
                    <p>
                        <p>
                            <p>
                                Gurgaon Institute of Technology & Management Bilaspur, Gurugram, Haryana 122413 <br />

                            </p>
                            <p>
                                Pass With 68%
                            </p>
                        </p>
                   </p>
                </VerticalTimelineElement>
                

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="08/2019 - 07/2020"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Data Reporting - Unicorn Promotion & Marketing
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Gurugram, Haryana
                    </h4>
                    <p>Collecting and Formating raw data and translating it into a digestible format.</p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="02/2021 - 12/2021"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    C2C Partner Department - Delhivery Pvt. Ltd.
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Gurugram, Haryana 122051
                    </h4>
                    <p>Working with Delhivery as a Salesforce Admin  <br /> Work with day to day customer relationship management services</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="01/2022 - 08/2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    Product Engineer as an intern - Pepcoding Education Private Limited
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Noida, Uttar Pradesh 201301
                    </h4>
                    <p>Assisting students in doubt support regarding questions
                        based on web development Developing. <br /> project for various courses working using HTML, CSS, React Js and Node Js. <br />
                        Working with various courses like Nados, Core team etc</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="09/2022 - Present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        React Developer - Sov Technologies
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Noida, Uttar Pradesh 201301
                    </h4>
                    <p>
                        Working Blockchain Project as a front end.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Exprience