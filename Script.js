//Task.1 Class Movie

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

const films = [
  new Movie("Casino Royale", "Eon Productions", "PG"),
  new Movie("Hello_There", "ABC Productions", "PG-13"),
  new Movie("abcded", "ABCD Productions"),
];

const movieInstance = films[1];

console.log(films);
console.log(movieInstance.getPG(films));

//Task.2 Circle Class

class Circle {
  radius = 1.0;
  color = "Red";

  constructor(radius, color) {
    if (radius !== undefined) {
      this.radius = radius;
    }
    if (color !== undefined) {
      this.color = color;
    }
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Radius: ${this.radius} Color: ${this.color}`;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

let c1 = new Circle(10, "Red");

console.log(c1.getRadius());
c1.setRadius(15);
console.log(c1.getRadius());
console.log(c1.toString());

//Task 3. Write a “person” class to hold all the details.

class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  PrintPerson() {
    console.log(`
            The first name is ${this.fname},
            The last name is ${this.lname},
            The Age is ${this.age}
        `);
  }
}

class empDetails extends Person {
  constructor(fname, lname, age, empno, joiningDate, company) {
    super(fname, lname, age);
    this.empno = empno;
    this.joiningDate = joiningDate;
    this.company = company;
  }
}

empDetails.prototype.printDetails = function () {
  console.log(`
    ----------------------------------------
        Name: ${this.fname}, ${this.lname}.
        Age: ${this.age}
        ------------------
        Employee No: ${this.empno}
        Joining Date: ${this.joiningDate}
        Company: ${this.company}
    ------------------------------------------
    `);
};

const Person1 = new empDetails(
  "Rakesh",
  "Vengatesan",
  25,
  123456,
  "06-03-2023",
  "Accenture"
);

console.log(Person1);
Person1.PrintPerson();
Person1.printDetails();

//Task 4. write a class to calculate the uber price.

class CalculateUberPrice {
  constructor(
    baseFare,
    costPerMile,
    costPerMinute,
    distanceinMiles,
    durationInMinutes
  ) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
    this.distanceinMiles = distanceinMiles;
    this.durationInMinutes = durationInMinutes;
  }
  PriceCalculator() {
    const distanceCost = this.costPerMile * this.distanceinMiles;
    const durationCost = this.costPerMile * this.durationInMinutes;

    const totalFare = this.baseFare + distanceCost + durationCost;

    return totalFare;
  }
}

const ride1 = new CalculateUberPrice(100, 30, 20, 24, 30);
const ridePrice = ride1.PriceCalculator();

console.log(ride1);
console.log(`The Price for the ride is ${ridePrice}`);
