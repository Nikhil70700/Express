//! ZOD Validation using safeParse:
import { z, ZodError } from 'zod';
const ageSchema = z.number().min(18).max(100).int();
const userAge = 17;

const parseUserAge=ageSchema.parse(userAge);
const {data,error,success}=ageSchema.safeParse(userAge);

console.log(data,error,success);