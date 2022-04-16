import { storage, Context } from "near-sdk-as"

// return the string 'hello world'
export function helloWorld(): string {
  const predecessor =Context.predecessor
  return 'hello '+predecessor
} 

