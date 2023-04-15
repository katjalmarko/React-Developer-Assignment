import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { selectToDoList, addTask, completeTask, deleteTask } from '../../features/tasksSlice';
import { db, auth } from '../../config/firebase';
import { setToDoList } from '../../features/tasksSlice';
import { useDispatch } from 'react-redux';

interface Todo {
  id: string,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
}

const ManageTask = () => {
  const toDoList = useSelector(selectToDoList);
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
        date: newDate,
        completion: isCompleted,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* Task list goes here */}
    </div>
  );
};

export default ManageTask