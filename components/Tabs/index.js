// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");
console.log(topics);

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log(response);
        return response.data;
    })
    .then(data => {
        console.log(data);
        data.topics.forEach(item => {
            topics.append(Tab(item));
        })
    })
    .catch(err => {
        console.log(err);
    });

function Tab(topic) {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = topic;

    return tab;
}