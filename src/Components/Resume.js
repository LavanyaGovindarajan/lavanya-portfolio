import React, { Component } from 'react';
import '../common.css';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3 className='edu-col-name'>{education.school}</h3>
        <p className="edu-degree-name">{education.degree} <span>&bull;</span>  <em className="edu-date">{education.graduated}</em> <span>&bull;</span>  <em className="edu-gpa"> GPA {education.gpa}</em></p> <p className='edu-desc'>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume" style={{ backgroundColor: "#171f27", color: "#ffffff" }}>

      <div className="row education">
         <div className="three columns header-col">
            <h1 className='edu-title'><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row skill">

         <div className="three columns header-col">
            <h1 className='skill-title'><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
