import $ from "jquery";
import { exercise02Task } from "./main";

/**
 * Execute the `exercise02Task` function and provide
 * a callback function that receives a `result` parameter
 *
 * The callback function should append a `p` element
 * with the text content from the `result` parameter
 * and a class name of `exercise-02`
 *
 * The `p` element should be appended as the child of
 * the `.ex-container` div element
 *
 * You can use jQuery to create the element
 */
function exercise02() {
  // Complete the code of the function
  exercise02Task(e2);
  
}

function e2(result){
  let p=document.createElement('p');
  p.innerHTML=result;
  p.classList.add('exercise-02');

  $('.ex-container').append(p);
}

export default exercise02;
