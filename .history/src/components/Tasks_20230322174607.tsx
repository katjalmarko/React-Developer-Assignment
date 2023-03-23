import React from 'react'



useEffect(() => {
  const getToDoList = async () => {
    try {
      const data = await getDocs(toDoListCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id })) as Todo[];
      // doc does not return the id, so I gotta add it manually
      setToDoList(filteredData);
    } catch (err) {
      console.error(err)
    }
  };

  getToDoList();
}, []);

function Tasks() {
  return (
    <div>

    </div>
  )
}

export default Tasks