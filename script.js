let categories = [
    {
      title: "Personal",
      img: "boy.png",
    },
    {
      title: "Work",
      img: "briefcase.png",
    },
    {
      title: "Shopping",
      img: "shopping.png",
    },
    {
      title: "Coding",
      img: "web-design.png",
    },
    {
      title: "Health",
      img: "healthcare.png",
    },
    {
      title: "Fitness",
      img: "dumbbell.png",
    },
    {
      title: "Education",
      img: "education.png",
    },
    {
      title: "Finance",
      img: "saving.png",
    },
  ];
 let tasks = [
  {
    id: 1,
    task:"Go to market",
    category:"Shopping",
    completed: false,
  },
  {
    id: 2,
    task:"Read a book",
    category:"Personal",
    completed: false,
  },
  {
    id: 3,
    task:"Prepare for a meeting",
    category:"Work",
    completed: false,
  },
  {
    id: 4,
    task:"Complete coding challenge",
    category:"Coding",
    completed: false,
  },
  {
    id: 5,
    task:"take a walk ",
    category:"Health",
    completed: false,
  },
  {
    id: 6,
    task:"Watch tutorials",
    category:"Education",
    completed: false,
  },
  {
    id: 7,
    task:"do push ups",
    category:"Fitness",
    completed: false,
  },
  {
    id: 8,
    task:"Review budget",
    category:"Finances",
    completed: false,
  },
  {
    id: 9,
    task:"buy groceries",
    category:"Shopping",
    completed: false,
  },
  {
    id: 10,
    task:"Write a journal",
    category:"personal",
    completed: false,
  },
  {
    id: 11,
    task:"Write an email",
    category:"Work",
    completed: false,
  },
  {
    id: 13,
    task:"try a recipe",
    category:"health",
    completed: false,
  },
 ];
 const saveLocal= () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
 };

 const getLocal = () => {
  const tasksLocal =JSON.parse(localStorage.getItem("tasks"));
  if (tasksLocal) {
    tasks = tasksLocal;
  }
 };
 const toggleScreen = () => {
  screenWrapper.classList.toggle("show-category");
 };

const updateTotals = () => {
  const categoryTasks = tasks.filter(
    (task) => 
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  numTasks.innerHTML = ` ${categoryTasks.length} Tasks `;
  totalTasks.innerHTML = tasks.length;
}; 

const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    const div = document.createElement("div");
    div.classList.add("category");
    div.addEventListener("click",() => {
      screenWrapper.classList.toggle("show-category");
      selectedCategory = category;
      updateTotals();
      categotyTitle.innerHTML = category.title;
      categoryImg.src = `images/${category.img}`;
      renderTasks();
    })
  })
}


  