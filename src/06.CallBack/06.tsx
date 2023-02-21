import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

  const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name)
  }

  const onNameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Name changed' + event.currentTarget.value)
  }

  const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
    console.log('Age changed' + event.currentTarget.value)
  }


  return (
    <div>
      <textarea onChange={onNameChanged} ></textarea>
      <input onChange={onAgeChanged} type="text"/>
      <button name='delete' onClick={deleteUser}>delete</button>
    </div>

  )
}