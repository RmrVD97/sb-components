import React from 'react'
import './MyLabel.css';


export interface MyLabelProps {

     /**
   * Text content of the label | string
   */
    label:string,
     /**
   * Font-size of the text content of the label | string | Default 'normal'
   */
    size:'normal'|'h1'|'h2'|'h3';

     /**
   * Capitalization of letters
   */
    allcaps?:boolean,
     /**
   * color of letters
   */
    color?:'primary' | 'secondary' | 'tertiary',
      /**
   * selectable color
   */
       customColor?:string,
}

export const MyLabel = ({
    label = 'No Label',
    size='normal',
    color='primary',
    allcaps=false,
    customColor='',

}:MyLabelProps) => {
  return (
    <span style={{ color:customColor }} className={`label ${size} text-${color}`}>
       { (allcaps) ? label.toLocaleUpperCase() : label}
    </span>
  )
}
