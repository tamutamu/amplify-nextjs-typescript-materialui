import { createTodo } from "@tamura/backendlib/graphql/mutations"
import * as yup from "yup"

export const domain = {
  text: yup.string(),
}

export const testCreateTodo = createTodo
