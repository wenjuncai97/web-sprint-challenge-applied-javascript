  import axios from 'axios'
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const Tabs = (array) => {
    const topic = document.createElement('div');
    topic.classList.add('topics');

    for(let i = 0; i < array.length; i++) {
      // console.log(array[i]);
      const arrayString = array[i];
      const tab = document.createElement('div');
      tab.classList.add('tab');
      tab.textContent = arrayString;
      topic.appendChild(tab);
    }
    // console.log(array);
    return topic;
};


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  // const tabsList = (tab) => {
  //   const section = document.createElement("div")
  //   tab.forEach(elem => {
  //     section.appendChild(Tabs(elem))
  //   });
  //   return section
  // }

  const tabsAppender = (selector) => {
    const tabsContainer = document.querySelector(selector);
    // console.log(selector);
    axios.get('http://localhost:5000/api/topics')
    .then(resp => {
      // console.log(resp.data.topics);
      const tabTopics = resp.data.topics;
      tabsContainer.appendChild(Tabs(tabTopics));
    })
    .catch(err => {
      console.error(err);
    });
};

export { Tabs, tabsAppender }
