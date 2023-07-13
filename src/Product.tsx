import React from 'react'
import { Data } from './model/data'

interface OwnProps {
    data:Data
}

export const Product:React.FC<OwnProps> = ({data}) => {
  return (
    <div>{data[0].title}</div>
  )
}

export default Product