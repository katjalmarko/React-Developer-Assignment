import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { selectToDoList, addTask, completeTask, deleteTask } from '../../features/tasksSlice';
import { db, auth } from '../../config/firebase';
import Todo  from './tasks';
import { setToDoList } from '../../features/tasksSlice';
import { useDispatch } from 'react-redux';

Sure, I'd be happy to help!

First, let's create a new file for the manageTask component. We'll call it ManageTask.tsx. Here's a basic structure for it:

typescript
Copy code
import React from 'react';

const ManageTask = () => {
  return (
    <div>
      {/* Your code goes here */}
    </div>
  );
};

export default ManageTask;
Now we can start by moving the relevant code from the Tasks component to the ManageTask component.

Let's begin by importing the useState, useEffect, and useSelector hooks from React and Redux respectively. We'll also import the getDocs, collection, addDoc, deleteDoc, and doc functions from firebase/firestore.

typescript
Copy code
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { selectToDoList, addTask, completeTask, deleteTask } from '../../features/tasksSlice';
import { db, auth } from '../../config/firebase';
We'll also import the Todo interface and the setToDoList function from the Tasks component.

typescript
Copy code
import { Todo } from './Tasks';
import { setToDoList } from '../../features/tasksSlice';
Next, we can create the ManageTask component and extract the toDoList state from Redux.

typescript
Copy code
const ManageTask = () => {
  const toDoList = useSelector(selectToDoList);

  // Your code goes here

  return (
    <div>
      {/* Your code goes here */}
    </div>
  );
};
Now we can move the getToDoList function to the ManageTask component and modify it to use the setToDoList function from Redux.

typescript
Copy code
const getToDoList = async () => {
  try {
    const data = await getDocs(toDoItemsCollectionRef);
    const filteredData = data.docs.map((doc): Todo => ({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      date: doc.data().date.toDate(),
      completion: doc.data().completion,
    }));
    dispatch(setToDoList(filteredData));
  } catch (err) {
    console.error(err);
  }
};
We'll also need to import the useDispatch hook from Redux.

typescript
Copy code
import { useDispatch } from 'react-redux';
We can now create a dispatch variable and assign it the value of the useDispatch hook.

typescript
Copy code
const dispatch = useDispatch();
We'll also need to modify the deleteTask and addTask functions to use Redux actions.

typescript
Copy code
const deleteTask = async (id: string) => {
  try {
    const taskDoc = doc(db, 'toDoItems', id);
    await deleteDoc(taskDoc);
    getToDoList();
    dispatch(deleteTask(id));
  } catch (err) {
    console.error(err);
  }
};

const addTask = async () => {
  try {
    await addDoc(toDoItemsCollectionRef, {
      title: newTitle,
      description: newDescription,
      date: newDate,
      completion: isCompleted,
      userId: auth?.currentUser?.uid,
    });
    setNewTitle('');
    setNewDescription('');
    setNewDate(new Date());
    setIsCompleted(false);
    getToDoList();
    dispatch(addTask({
      id: '',
      title: newTitle,
      description: newDescription,
      date: newDate

Here is where you stopped and I do not know how to continue!



  return (
    <div>
      manageTask
    </div>
  )
}

export default ManageTask