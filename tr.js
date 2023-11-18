
class Vehicle {
    constructor(name, manufacturer, ID) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.ID = ID;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, ID, carType, fuelType) {
      super(name, manufacturer, ID);
      this.carType = carType;
      this.fuelType = fuelType;
    }
  }
  
  class Airplane extends Vehicle {
    constructor(name, manufacturer, ID, airplaneType) {
      super(name, manufacturer, ID);
      this.airplaneType = airplaneType;
    }
  }
  
  class Employee {
    constructor(name, ID, dateOfBirth) {
      this.name = name;
      this.ID = ID;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
      super(name, ID, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, ID, dateOfBirth, licenseID) {
      super(name, ID, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  const car1 = new Car("Car1", "Manufacturer1", "001", "Sedan", "Gas");
  const car2 = new Car("Car2", "Manufacturer2", "002", "SUV", "Electric");
  const car3 = new Car("Car3", "Manufacturer3", "003", "Hatchback", "Gas");
  
  const airplane1 = new Airplane("Airplane1", "Manufacturer1", "101", "Commercial");
  const airplane2 = new Airplane("Airplane2", "Manufacturer2", "102", "Private");
  
  const reservations = [];
  
  function assignVehicleToEmployee(employeeId, vehicleId) {
    const employee = findEmployeeById(employeeId);
    const vehicle = findVehicleById(vehicleId);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log("Error: Pilots cannot be assigned cars.");
    } else if (employee instanceof Pilot && vehicle instanceof Airplane) {
      const reservation = new Reservation(
        new Date(),
        employeeId,
        vehicleId,
        reservations.length + 1
      );
      reservations.push(reservation);
      console.log("Reservation created:", reservation);
    } else {
      const reservation = new Reservation(
        new Date(),
        employeeId,
        vehicleId,
        reservations.length + 1
      );
      reservations.push(reservation);
      console.log("Reservation created:", reservation);
    }
  }
  
  function findEmployeeById(employeeId) {
    
  }
  
  function findVehicleById(vehicleId) {
    
  }
  
  assignVehicleToEmployee("E1", "V1"); // Create a reservation for a pilot and an airplane
  assignVehicleToEmployee("E2", "V2"); // Create a reservation for a driver and a car
  
  // Print the content of the reservations array using the map function
  reservations.map((reservation) => console.log(reservation));