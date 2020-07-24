import React from 'react';

const Container = ({items}) => 
  <ul aria-live="polite">
    {items.map((item, i) => <Item key={i} item={item} />)}
  </ul>

const Item = ({ item}) => {
  const random = Math.random() * 10
  const shouldBeHidden = random < 3

  return (
    <li aria-hidden={shouldBeHidden}>
      <div>
        <span>
          <div>
            <p aria-hidden="true">{item.text}</p>
            <p aria-hidden="false" style={{ display: 'none'}}>{item.text} hoohooo</p>
          </div>
        </span>
      </div>
    </li>
  )
}

function App() {
  const [containers, setContainers] = React.useState([[ { text: 'hii'}]])
  const limit = 50;

  const addItem = React.useCallback(() => {
    const containerItemNum = containers[containers.length -1].length

    if (containerItemNum >= limit) {
      const containerToAdd = [ { text: 'hii' } ]
      setContainers([ ...containers, containerToAdd])
    } else {
      const lastContainerIndex = containers.length -1
        const updatedContainer = [ ...containers[lastContainerIndex], { text: Math.random() } ]
        const mappedContainers = containers.map((container, i) => i === lastContainerIndex ? updatedContainer : container)
        setContainers(mappedContainers)
    }
  }, [containers, setContainers])
  

  return (
    <div>
      <button onClick={addItem}>ADD</button>
      <div>
        {containers.map((container, i) => <Container key={i} items={container} />)}
      </div>
    </div>
  );
}

export default App;
