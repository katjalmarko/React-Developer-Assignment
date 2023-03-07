import React from 'react'
import { useState } from 'react';

const Title = () => {

  const [newTitle, setNewTitle] = useState("")

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }
  return (
    <div>

    </div>
  )
}

export default Title