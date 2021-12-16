import React from 'react';

function Resume(props) {
    if(props.data){
      var skillmessage = props.data.skillmessage;
      var education = props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} {" "}<span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var projects = props.data.projects.map(function(projects){
        return <div key={projects.title} >
            <p className="info"><a href={projects.link}>{projects.title}</a><span>&bull;</span> <em className="date">{projects.years}</em></p>
            <p>{projects.description}</p>
        </div>
      })
      var awards = props.data.awards.map(function(awards){
        return <div key={awards.award}><h3>{awards.award}</h3>
            <p className="info">{awards.company}<span>&bull;</span> <em className="date">{awards.year}</em></p>
            <br></br>
        </div>
      })
      var skills = props.data.skills.map(function(skills){
        //var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className="info"></span><h5>{skills.name}</h5></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

    <div className="row work">

         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
          {projects}
        </div>
    </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Awards</span></h1>
         </div>

         <div className="nine columns main-col">
          {awards}
        </div>
    </div>

    <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

				<div className="nine columns main-col">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
      </div>
      
   </section>
    );
  }


export default Resume;
