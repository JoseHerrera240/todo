import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { useTodos } from './useTodos';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodosError } from '../TodosError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';
// import './App.css';


function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizedTodos,
  } = useTodos();

  return (
    <React.Fragment>

      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <TodoEmpty />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para : {searchText} </p>
        }
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}

      />


      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

      <ChangeAlertWithStorageListener sincronized={sincronizedTodos}/>
    </React.Fragment>
  );
}

export default App;
