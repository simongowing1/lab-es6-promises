// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
//  console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks
/*
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const imageSteak = document.createElement('img');
                imageSteak.src = 'public/images/steak.jpg';
                let table = document.getElementById("table");
                table.appendChild(imageSteak)
              })
            })
          })
        })
      })
    })
  })
})

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          const imagePotatoes = document.createElement('img');
                imagePotatoes.src = 'public/images/mashPotatoes.jpg';
                let table = document.getElementById("table");
                table.appendChild(imagePotatoes)
        })
      });
    });
  });
});
*/

// Iteration 3 using async and await

  async function makeFood(step, id, source) {
    //console.log(step[0])
    for (let i = 0; i < step.length; i++){
      await addFood(step[i], id);
      
    }
    // ... your code here
    const imageSprouts = document.createElement('img');
                imageSprouts.src = source;
                let table = document.getElementById("table");
                table.appendChild(imageSprouts)
  }
  //makeFood(brusselSprouts, '#brusselSprouts');

Promise.all([makeFood(steak, '#steak', 'public/images/steak.jpg'),
            makeFood(mashPotatoes, '#mashPotatoes', 'public/images/mashPotatoes.jpg'),
            makeFood(brusselSprouts, '#brusselSprouts', 'public/images/brusselSprouts.jpg')]).then (() => {
     document.body.innerHTML += `<button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">Dinner is served.</button>`
    //body.appendChild(dinnerIsServed)
})