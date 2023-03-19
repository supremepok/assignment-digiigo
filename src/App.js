import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) return;
    setItems([...items, { id: Date.now(), text }]);
    setText('');
  };

  const handleDelete = id => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const handleEdit = (id, newText) => {
    const newItems = [...items];
    const index = newItems.findIndex(item => item.id === id);
    newItems[index].text = newText;
    setItems(newItems);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleEdit(item.id, prompt('Enter new text', item.text))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;