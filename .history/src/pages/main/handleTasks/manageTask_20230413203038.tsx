// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask, completeTask, deleteTask } from '../../../features/tasksSlice';

// interface ManageTaskProps {
//   task: {
//     id: string;
//     title: string;
//     description: string;
//     date: Date;
//     completion: boolean;
//   };
// }

// function ManageTask({ task }: ManageTaskProps): JSX.Element {
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   const dispatch = useDispatch();

//   const handleComplete = () => {
//     dispatch(completeTask(task.id));
//   };

//   const handleDelete = () => {
//     dispatch(deleteTask(task.id));
//   };

//   const handleSave = () => {
//     dispatch(
      addTask({
//         id: task.id,
//         title,
//         description,
//         date: task.date,
//         completion: task.completion,
//       })
//     );
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setTitle(task.title);
//     setDescription(task.description);
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <>
//           <input value={title} onChange={(e) => setTitle(e.target.value)} />
//           <input value={description} onChange={(e) => setDescription(e.target.value)} />
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleCancel}>Cancel</button>
//         </>
//       ) : (
//         <>
//           <h2>{title}</h2>
//           <p>{description}</p>
//           <p>{task.date.toLocaleDateString()}</p>
//           <button onClick={handleComplete}>Complete</button>
//           <button onClick={handleDelete}>Delete</button>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default ManageTask;