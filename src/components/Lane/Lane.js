// import './Lane.css';
import styled from 'styled-components';
import Task from '../Task/Task';

const LaneWrapper = styled.div`
    text-align: left;
    padding: 0;
    background: lightGray;
    border-radius: 20px;
    min-height: 50vh;
    width: 20vw;
    
    @media (max-width: 768px) {
      margin-bottom: 5%;
    }
 `; 
  const TitleStyle = styled.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkGray;
  `;


function Lane({ laneId, title, loading, error,tasks, onDragStart, onDragOver, onDrop }) {
  return (
    <LaneWrapper 
        className='Lane-wrapper' 
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, laneId)}
      >
      <h2>{title}</h2>
      <TitleStyle>{title}</TitleStyle>
      {
        loading || error ? (
          <span>
            {
              error || 'Loading...'
            }
          </span>
        ) : (
          tasks.map((task) => 
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              body={task.body}
              onDragStart={onDragStart}
            />
          )
        )
      }
    </LaneWrapper>
  );
}

export default Lane;