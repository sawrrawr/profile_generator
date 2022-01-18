const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('Name your hobby! ', (answer2) => {
    rl.question('What music do you listen to when working on your hobby? ', (answer3) => {
      rl.question('What\'s your favourite meal? ', (answer4) => {
        rl.question('Which sport do you like the most? ', (answer5) => {
          rl.question('What would you say is your superpower? ', (answer6) => {
            console.log(`Here is what we've created as your perfect profile: \nHello, internet world! My name is ${answer1}! One of my favourite things to do is ${answer2}, while listening to ${answer3}. Take me to any restaurant serving ${answer4} and my stomach will be thanking you! I love watching ${answer5} as well. My personal superpower is ${answer6}!`);

            rl.close();
          })
        })
      })
    })
  })
});