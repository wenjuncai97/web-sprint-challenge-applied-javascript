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
    const tabTopics = document.createElement('div')
    const tabOne = document.createElement('div')
    // const tabTwo = document.createElement('div')
    // const tabThree = document.createElement('div')

    tabTopics.appendChild(tabOne)
    // tabTopics.appendChild(tabTwo)
    // tabTopics.appendChild(tabThree)

    tabTopics.classList.add('topics')
    tabOne.classList.add('tab')
    // tabTwo.classList.add('tab')
    // tabThree.classList.add('tab')


    tabOne.textContent = `${array.topics}`;
    //tabOne.textContent = array[0]
    // tabTwo.textContent = array[1];
    // tabThree.textContent = array[2];

    return tabTopics;
};


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const tabsList = (tabsTopics) => {
    const section = document.createElement("div")
    tabsTopics.forEach(elem => {
      section.appendChild(Tabs(elem))
    });
    return section
  }

  const tabsAppender = (selector) => {
    const tabsContainer = document.querySelector(selector)
    axios.get('http://localhost:5000/api/topics')
    .then(resp => {
      console.log(resp.data.topics)
      const tabsTopics = resp.data.topics
      tabsList(tabsTopics);
      tabsContainer.appendChild(tabsList(tabsTopics));
    })
    .catch(err => {
      console.error(err)
    })

}

export { Tabs, tabsAppender }
