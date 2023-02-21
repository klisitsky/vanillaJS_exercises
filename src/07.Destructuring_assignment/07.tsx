import React from 'react';

type ManType = {
  name: string
  age: number
  lessons: Array<LessonType>
  address: AddressType
}
type LessonType = {
  title: number
}
type AddressType = {
  street: StreetType
}
type StreetType = {
  title: string
}


type PropsType = {
  title: string
  man: ManType
  food: Array<string>
  car: string
}

export const ManComponent: React.FC<PropsType> = (props) => {

  // {title, name, ...rest} = props

  const {title} = props
  const {name} = props.man


  return (<div>
    <h1>{title}</h1>
    <hr/>
    <div>{name}</div>
      </div>);
};

