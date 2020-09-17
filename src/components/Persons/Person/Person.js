import React from "react"

const Person = props => {

  let divClasses = ["Person"];
    if(props.person.age % 2 !==0){
      divClasses.push("odd");
    }else{
      divClasses.push("even");
    }


  return (
    <div className={divClasses.join(" ")}>
      <p>
        I'm {props.person.name} and I am {props.person.age} years old.
      </p>
      <button className="btnClass" onClick={props.clicked}>Birthday!</button>
    </div>
  )
}

export default Person;