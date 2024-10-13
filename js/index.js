//* /////////// Task 1 ///////////
console.log("/////////// Task 1 ///////////");
const user = {
  name: "Alisa",
  hobby: "crocheting",
  premium: true,
};

const addMood = (user) => {
  user.mood = "happy";
  return user;
};
const changeHobby = ({ hobby } = user) => {
  hobby = "skydiving";
  return user;
};
const changePremium = ({ premium } = user) => {
  premium = false;
  return user;
};
const showAllKeysAndValues = (user) => {
  const keys = Object.keys(user);
  for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }
  return user;
};

console.log(addMood(user));
console.log(changeHobby(user));
console.log(changePremium(user));
console.log(showAllKeysAndValues(user));
//* /////////// Task 2 ///////////
console.log("/////////// Task 2 ///////////");
const thread = {
  color: 5,
  lot: 568,
  rateOfCotton: 55,
  wieght: 50,
  length: 160,
};
const countProps = ({ length } = obj) => length;
console.log(countProps(thread));
//* /////////// Task 4 ///////////
console.log("/////////// Task 4 ///////////");
const shopEmployees = {
  anna: 13000,
  mary: 12000,
  viktor: 20000,
  pency: 15000,
  lana: 17000,
};
const countTotalSalary = ({ anna, mary, viktor, pency, lana } = employees) =>
  anna + mary + viktor + pency + lana;
console.log(countTotalSalary(shopEmployees));
//* /////////// Task 6 ///////////
console.log("/////////// Task 6 ///////////");
const products = [
  {
    name: "apple",
    price: 50,
    quantity: 23,
  },
  {
    name: "banana",
    price: 100,
    quantity: 13,
  },
  {
    name: "pineapple",
    price: 112,
    quantity: 26,
  },
  {
    name: "greyfruit",
    price: 128,
    quantity: 10,
  },
  {
    name: "mango",
    price: 102,
    quantity: 34,
  },
  {
    name: "peach",
    price: 81,
    quantity: 63,
  },
];
const calculateTotalPrice = (allProdcuts, productName) => {
  let userPrice = 0;
  for (const product of allProdcuts) {
    const { name, price, quantity } = product;
    if (name === productName) {
      userPrice = price * quantity;
    }
  }
  return userPrice;
};
console.log(calculateTotalPrice(products, "mango"));
//* /////////// Task 7 ///////////
console.log("/////////// Task 7 ///////////");
const account = {
  name: "Tana",
  surname: "Smith",
  yearsOld: 24,
  yearOfRegistration: 2016,
  balance: 0,
  transactions: [],
  seeBalance() {
    alert(`Your balance is ${this.balance}$`);
  },
  seeTransactions() {
    alert(
      `You had ${this.transactions.length} transactions. See more in console`
    );
    console.log(this.transactions);
  },
  makePositiveTransaction(money, year) {
    const nMoney = Number.parseFloat(money);
    this.balance += nMoney;
    this.transactions.push({ money: nMoney, operation: "+", year });
  },
  makeNegativeTransaction(money, year) {
    const nMoney = Number.parseFloat(money);
    this.balance -= nMoney;
    this.transactions.push({ money: nMoney, operation: "-", year });
  },
};

const workWithAccount = ({
  seeBalance,
  seeTransactions,
  makePositiveTransaction,
  makeNegativeTransaction,
} = account) => {
  let isAccepting = "";
  do {
    if (confirm(`Do you want to see balance?`) === true) {
      seeBalance();
    }
    if (confirm(`Do you want to see transactions?`) === true) {
      seeTransactions();
    }
    if (confirm(`Do you want to make positive transaction?`) === true) {
      makePositiveTransaction(
        prompt(`How many do you want to transact`),
        prompt(`Enter year`)
      );
    }
    if (confirm(`Do you want to make negative transaction?`) === true) {
      makeNegativeTransaction(
        prompt(`How many do you want to transact`),
        prompt(`Enter year`)
      );
    }
    isAccepting = confirm(`Do you want to work with account?`);
  } while (isAccepting === true);
};
workWithAccount(account);
