window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");
  // Here we make variables equal to the references of the html elements. querySelector targets objects with id.

  console.log(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // When the form is submitted, the callback function will be executed.
    // e is the callback function, preventDefault stops default action from occuring.
    // i.e, it stops the page refreshing.

    console.log("Submit");

    const task = input.value;
    // This creates a variable for the value of whatever was inputted in to the new-task-input html.

    if (!task) {
      alert("Please include a task");
      return;
      // This states that if task is blank, an alert will say that it must be included, and the return ensures nothing can happpen after it.
    }

    const task_el = document.createElement("div");
    // createElement allows us to create DOM nodes, which we can place on to the page
    // So we create a variable which is equal to "div", then:
    task_el.classList.add("task");
    // we give task_el a class = "task"

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    // we do the same again above, create a div and give it a class.

    task_el.appendChild(task_content_el);
    // The task_content_el element will be nested inside the task_el element in the DOM hierarchy.

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    list_el.appendChild(task_el);
    // list_el that represents a container element (such as a <ul> or <div>). This line appends the task_el element as a child of the list_el element.
    // Consequently, the task_el and its nested task_content_el will be added to the container element in the DOM.
  });
});
