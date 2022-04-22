import axios from 'axios';
import * as mutationTypes from './mutation-types';
export function getCourses(){
const resp= axios.get(baseUrl).then((x)=>{
     console.log(x);
 });
 return {type:mutationTypes.GET_COURSES,payload:resp};
}
export function addCourse(course){

}
export function updateCourse(){

}
export function deleteCourse(){

}