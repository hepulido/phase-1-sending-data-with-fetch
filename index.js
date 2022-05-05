// Add your code here
function submitData(name, email){
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  };

return fetch('http://localhost:3000/users', configurationObject)
.then((resp) => resp.json())
.then(user => document.body.innerHTML = user.id)
.catch (error => {
    alert("Wrong name! Please try again!");
    console.log(error.message);
    document.body.append(error.message)
  });
}  



