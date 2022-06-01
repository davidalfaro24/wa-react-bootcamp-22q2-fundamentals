import React, { Fragment, useState } from 'react';
import List from '../Components/List';
import ToDoInput from '../Components/ToDoInput'

const Todolist = ( props ) => { 
    

    const list = []

    const addNewObject = (form) => { 
        form.preventDefault();
        list.push(form.nativeEvent.target[0].value);
        console.log(list);
    }
    console.log(list);

    return (
        <Fragment>
            <h1>To Do List </h1>
            <ToDoInput onSubmit={addNewObject} ></ToDoInput>
            <List completeList={list}></List>
        </Fragment>

    );
}

export default Todolist;