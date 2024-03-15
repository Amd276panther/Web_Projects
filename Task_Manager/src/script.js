document.getElementById("taskForm").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    const data = {
        courseId: document.getElementById("courseId").value,
        taskName: document.getElementById("taskName").value,
        dueDate: document.getElementById("dueDate").value,
        additionalDetails: document.getElementById("additionalDetails").value
      };
      
  
    try {
       const response = await fetch("http://localhost:3003/addTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log(result);
      // Clear form fields or display a success message     
    } catch (error) {
      console.log(error);
      // Display error message to the user
    }
  });


  
