import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { selectToDoList, addTask, completeTask, deleteTask } from '../../features/tasksSlice';
import { db, auth } from '../../config/firebase';
import Todo  from './tasks';
import { setToDoList } from '../../features/tasksSlice';
import { useDispatch } from 'react-redux';

import React from 'react'

const manageTask = () => {
  return (
    <div>manageTask</div>
  )
}

export default manageTask