//Manual Validation of Environment Variables

// export const PORT=isNaN(process.env.PORT)?3007:parseInt(process.env.PORT);


//!  ZOD validation

import { z, ZodError } from 'zod';

const ageSchema = z.number().min(18).max(100).int();

const userAge = "108";

const parseUserAge=ageSchema.parse(userAge);
console.log(parseUserAge);


// const parseUserAge=ageSchema.parse(userAge);
// const {data,error,success}=ageSchema.safeParse(userAge);

// console.log(error);

try {
    const parseUserAge = ageSchema.parse(userAge);
    console.log(parseUserAge); //success case

} catch (error) {
    if (error instanceof ZodError) {  //instance of is java Script operator used to check if an object is an instance of a specific class or constructor
        console.log(error.issues[0].message);    //Display error message only
    } else {
        console.log("Unexpected Error", error);
    }


}