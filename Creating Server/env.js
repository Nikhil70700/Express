import { z } from 'zod';

// Define a schema for PORT:
//  - coerce number (convert from string to number)
//  - must be >=1 and <=65535
//  - defaults to 3080 if undefined
const portSchema = z.coerce.number().min(1).max(65535).default(3080);

// Parse process.env.PORT using our schema
export const PORT = portSchema.parse(process.env.PORT);
