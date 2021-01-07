import $ from "jquery";
import { exercise01Task } from "./main";

/**
 * Execute the `exercise01Task` function and provide
 * a callback function that appends a `p` element
 * with the text content of `exercise-01 is done`
 * and a class name of `exercise-01`
 *
 * The `p` element should be appended as the child of
 * the `.ex-container` div element
 *
 * You can use jQuery to create the element
 */

function exercise01() {
  // Complete the code of the function
  exercise01Task(hola);
  function hola() {
    let p = document.createElement("p");
    p.innerHTML = `exercise-01 is done`;
    p.classList.add("exercise-01");

    $(".ex-container").append(p);
  }
}

export default exercise01;
