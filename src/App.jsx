import { useEffect, useState } from 'react';

import { Button, Flex, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react';

function App() {
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState(
    () => JSON.parse(localStorage.getItem('todoItems')) || []
  );

  const addTodo = () => {
    const updatedArray = [...todoItems, inputText];
    setTodoItems(updatedArray);
    setInputText('');
  };

  const updateInput = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <VStack border="1px solid gray" borderRadius="8px" p={5}>
        <Heading>Todo App</Heading>

        {todoItems.length === 0 ? (
          <Text>No items added to the todo yet</Text>
        ) : (
          todoItems.map((eachTodoItem) => (
            <Text borderBottom="2px solid blue" key={eachTodoItem}>
              {eachTodoItem}
            </Text>
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
    </Flex>
  );
}

export default App;
