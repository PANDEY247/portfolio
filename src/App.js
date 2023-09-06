import './App.css';
import styled from 'styled-components';

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width: 100%;
overflow-x: hidden;
`

function App() {
  return (
    <div>
    <Body>

    </Body>

    </div>
  );
}

export default App;
