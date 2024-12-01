async function myFunction() {
    return "Hello";
}

const myDisplayer = (value) => {
    console.log("Event")
}

(async () => {
    const res1 = await myFunction()
    console.log(res1)
})()


// index.js

// Define an async function
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Immediately invoke the async function
  (async () => {
    await fetchData();
  })();
  
   
