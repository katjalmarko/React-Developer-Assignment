import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setTasks,
  setFilter,
  setFilterValue,
  completeTask,
  uncompleteTask,
  deleteTask,
  selectTasks,
  selectFilter,
  selectFilterValue,
} from '../../features/tasksSlice';
import { db, auth } from '../../config/firebase';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import AddTask from './addTask';

function Tasks() {
  const dispatch = useDispatch();
  const toDoList = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const filterValue = useSelector(selectFilterValue);

  const toDoItemsCollectionRef = collection(db, 'toDoItems');

  const getToDoList = async () => {
    try {
      const data = await getDocs(toDoItemsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        date: doc.data().date.toDate(),
        completion: doc.data().completion,
      }));

      dispatch(setTasks(filteredData));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddTask = async (newTask: {
    title: string;
    description: string;
    date: Date;
  }) => {
    try {
      await addDoc(toDoItemsCollectionRef, {
        title: newTask.title,
        description: newTask.description,
        date: newTask.date,
        completion: false,
        userId: auth?.currentUser?.uid,
      });
      getToDoList();
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilterChange = (value: 'all' | 'completed' | 'ongoing')