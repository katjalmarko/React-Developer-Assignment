import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { selectToDoList, addTask, completeTask, deleteTask } from '../../features/tasksSlice';
import { db, auth } from '../../config/firebase';