import { AbstractRequestProcessor } from "../../framework/RequestProcessor"
import { createTodo } from "@tamura/backendlib/graphql/mutations"

import gql from "graphql-tag"

export interface NameNode {
  readonly kind: "Name"
  readonly loc?: Location
  readonly value: string
}

export class Main extends AbstractRequestProcessor<string> {
  protected parametersValid(): boolean {
    throw new Error("Method not implemented.")
  }
  protected main(): string {
    // throw new Error("Method not implemented.")

    const query = gql(createTodo)
    const ss = query.definitions[0]
    const dd = ss as { readonly name?: NameNode }
    console.log(dd.name.value)
    return "OK"
  }
  protected catchError(error: Error): never {
    throw new Error("Method not implemented.")
  }
}
