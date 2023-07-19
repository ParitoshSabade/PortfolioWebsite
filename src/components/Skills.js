import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
export default  class Experience extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="skills">

        
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                  resumeData.Skills.map((item) => {
                    return(
                        <p>
                            <ul>
                            <li  style={{ listStyle: 'disc', color: '#3d3d3d',fontFamily: "'opensans-regular', sans-serif",fontSize:"15px",fontWeight:"normal",lineHeight:"15px"}}>
                                    <ReactMarkdown>{item}</ReactMarkdown>
                                    </li>
                            </ul>
                        </p>
                    )
                  })
              }
            </div> 
         </div>


        

        

      </section>
    );
  }
}