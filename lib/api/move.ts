import { throwExpression } from "../shared/utils";

export const API_HOST = process.env.NEXT_PUBLIC_HOST??
  throwExpression(new Error("HOST not configured"));