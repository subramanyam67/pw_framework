

export interface VehicleData{
    make:string;
    enginePerformance:string;
    dateOfManufacture:string;
    numberOfSeats:string;
    fuelType:string;
    listPrice:string;
    licensePlateNumber:string;
    annualMileage:string;

    // truck
    Payload:string;
    Totalweight:string;

    // Enter Insurant Data
    firstName:string;
    lastName:string;
    dateOfBirth: string,
    gender: string,
    streetAddress: string,
    country: string,
    zipCode: string,
    city:string,
    occupation: string,
    hobby: string,
    website: string;

    // Enter Product Data
    startDate:string;
    insuranceSum:string;
    meritRating:string;
    damageInsurance:string;
    optionalProducts:string;
    courtesyCar:string;

    // Select Price Option
    priceOption:string;

    // SendQuote:
    email:string
    phone:string;
    username:string;
    password:string;
    confirmPassword:string;
    comments:string;
}
