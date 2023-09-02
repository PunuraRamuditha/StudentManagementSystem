import React from "react";
import {useSelector} from 'react-redux';



const Course = () => {

    const courses = useSelector((state) => state.courseReducer);

    return <h1>{courses.name}</h1>;
};

export default Course;