
document.querySelector('button').addEventListener('click', getDrink)
function getDrink(){
    // let drink = document.querySelector('input').value
    // drink = drink.split(" ").join("+")

    fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('.type').innerText = data.type
      document.querySelector('.activity').innerText = data.activity
    
    })
    .catch(err => {
      console.log(`error ${err}`)
  });
}
