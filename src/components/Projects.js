import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
export default  class Projects extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="projects">

        
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Projects</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.projects.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.name}</h3>
                          <p className="info">
                         
                          <span>&bull;</span> <em className="date">{item.Date}</em></p>
                          <p>
                          <ul>
                                {item.description.map((subitem, index) => (
                                    <li key={index} style={{ listStyle: 'disc', color: '#3d3d3d',fontFamily: "'opensans-regular', sans-serif",fontSize:"15px",fontWeight:"normal",lineHeight:"30px"}}>
                                    <ReactMarkdown>{subitem}</ReactMarkdown>
                                    </li>
                                ))}
                                </ul>
                          </p>
                          <a
                        href={item.github} // Add the GitHub repository URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <img
                          src="images/github-mark.png" // Add the path to your GitHub logo image
                          alt="GitHub Logo"
                          className="github-logo"
                        />
                        View on GitHub
                      </a>

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