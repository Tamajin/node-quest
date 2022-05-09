import chalk from 'chalk';

let wilders = ["Naïm", "Élina", "Xavier", "Laurent"];

console.log(chalk.green(`Salut ${wilders[0]} vive le sport`));
console.log(chalk.yellow(`Salut ${wilders[1]} et vive les canaris`));
console.log(chalk.red(`Salut ${wilders[2]} vive la montagne`));
console.log(chalk.bgBlueBright(`Salut ${wilders[3]} le barbecue c'est la vie`));
