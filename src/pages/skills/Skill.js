import React from 'react';

//if i pas just (props)
//need to use props.name ....

const Skill = ({ name, content, onDelete }) => {

    return (
        <section>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={onDelete}>Delete</button>
        </section>
    );

};

export default Skill;
