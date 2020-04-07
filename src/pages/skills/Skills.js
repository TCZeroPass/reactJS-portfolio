import React, { useState } from 'react';
import Skill from './Skill';



const Skills = () => {
    const [skillsData, setSkillData] = useState([
        { id: 0, name: "ReactJS", content: "aaa " },
        { id: 1, name: "Breaking things", content: "bbb " },
        { id: 2, name: "Other thingyyys", content: "ccc " }
    ]);

    const handleDeleteSkill = (id) => {
        setSkillData((currSkillData) =>
            currSkillData.filter((skill) => skill.id !== id),
        );
    };

    return (
        <React.Fragment>
            <article>
                <h2> Skills </h2>
                {
                    skillsData.map(({ name, content, id }) => (
                        // <section key={name}>
                        //     <h3>{name}</h3>
                        //     <p>{content}</p>
                        // </section>
                        // all that section can be eported to its own component
                        <Skill
                            key={id}
                            name={name}
                            content={content}
                            onDelete={() => handleDeleteSkill(id)}
                        />
                    ))
                }
            </article>
        </React.Fragment>
    );

}

export default Skills;
