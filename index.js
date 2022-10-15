// Add your code here
function submitData(userName, userEmail) {
  const ul = document.querySelector("ul")
  const li = document.createElement("li");
  const data = {
      name: userName,
      email: userEmail
  }

  const configurationObject = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify(data),
  };
  return fetch('http://localhost:3000/users', configurationObject)
      .then(function (response) {
          return response.json();
      })
      .then(function (res) {
          li.innerHTML = "Id: " + res.id;
          ul.appendChild(li);
      })
      .catch(function (error) {
          let h3 = document.createElement('h3');
          h3.innerHTML = error.message;
          document.body.appendChild(h3);
          
      });

}

submitData("Zakaria", "Zakariaahmad")