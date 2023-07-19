import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
export default  class Experience extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="experience">

        
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.StartDate}-{item.EndDate}</em></p>
                          <p>
                          <ul>
                                {item.Work.map((subitem, index) => (
                                    <li key={index} style={{ listStyle: 'disc', color: '#3d3d3d',fontFamily: "'opensans-regular', sans-serif",fontSize:"15px",fontWeight:"normal",lineHeight:"30px"}}>
                                    
                                    <ReactMarkdown>{subitem}</ReactMarkdown></li>
                                ))}
                                </ul>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


        

        

      </section>
    );
  }
}