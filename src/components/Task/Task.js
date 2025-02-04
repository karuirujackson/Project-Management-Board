// import './Task.css';
import styled from 'styled-components';

const TaskWrapper = styled.div`
    background: darkGray;
    padding: 20px;
    border-radius: 20px;
    margin: 0% 5% 5% 5%;
`;
   
const TitleStyle = styled.h3` 
width: 100%;
margin: 0;
`;

function Task ({ id, title, body, onDragStart }) {
    return (
        <TaskWrapper
                draggable 
                onDragStart={(e) => onDragStart(e, id)}
            >
            <h3>{title}</h3>
            <TitleStyle>{title}</TitleStyle>
            <p>{body}</p>
        </TaskWrapper>
    );
}

export default Task;