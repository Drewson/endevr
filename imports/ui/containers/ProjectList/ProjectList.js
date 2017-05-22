import React from 'react';
import Project from '../../components/Project/project';

const ProjectList = ({ projects }) => {
    return(
        <div>
            {
                projects.map( (project) => {
                    return <Project project={project} key={project._id} />
                })
            }
        </div>
    )

}

export default ProjectList;
