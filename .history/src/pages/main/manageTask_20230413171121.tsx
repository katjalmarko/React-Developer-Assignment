import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { selectToDoList, addTask, completeTask, deleteTask } from '../../features/tasksSlice';
import { db, auth } from '../../config/firebase';
import Todo  from './tasks';
import { setToDoList } from '../../features/tasksSlice';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

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