import { useEffect, useState } from 'react';

import { Button, HStack, Heading, Input, StackDivider, Text, VStack } from '@chakra-ui/react';
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons';

import { nanoid } from 'nanoid';

function App() {
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState(
    () => JSON.parse(localStorage.getItem('todoItems')) || []
  );

  const todo = {
    id: nanoid(),
    body: inputText,
    isDone: false,
  };

  const addTodo = () => {
    setTodoItems([...todoItems, todo]);
    setInputText('');
  };

  const updateInput = (e) => {
    setInputText(e.target.value);
  };

  const checked = (index) => {
    const newTodos = [...todoItems];
    newTodos[index].isDone = true;
    setTodoItems(newTodos);
  };

  const deleted = (id) => {
    const newTodoItems = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newTodoItems);
  };

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <VStack h="100vh" justifyContent="center" alignItems="center">
      <Heading>Todo App</Heading>
      <VStack divider={<StackDivider />} border="1px solid gray" borderRadius="8px" p={5}>
        {todoItems.length === 0 ? (
          <ext>No items added to the todo yet</ext>
        ) : (
          todoItems.map((eachTodoItem, index) => (
            <HStack w="full" justifyContent="space-between" key={eachTodoItem.id}>
              <CheckIcon />
              <Text
                style={{ textDecoration: eachTodoItem.isDone ? 'line-through' : '' }}
                onClick={() => checked(index)}
              >
                {eachTodoItem.body}
              </Text>
              <DeleteIcon onClick={() => deleted(eachTodoItem.id)} />
            </HStack>
          ))
        )}

        <HStack>
          <Input
            type="text"
            placeholder="Enter a todo task"
            value={inputText}
            onChange={updateInput}
          />
          <Button
            size="lg"
            bgColor="skyblue"
            color="white"
            _hover={{ bgColor: 'black' }}
            onClick={addTodo}
          >
            ADD TASK
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default App;
