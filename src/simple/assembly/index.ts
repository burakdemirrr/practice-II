import { storage, Context } from "near-sdk-as"


export function helloWorld(): string {
  const predecessor =Context.predecessor
  return 'hello '+predecessor
} 

