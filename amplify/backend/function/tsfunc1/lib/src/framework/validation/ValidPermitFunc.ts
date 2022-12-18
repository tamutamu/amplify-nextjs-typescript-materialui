import { AppSyncResolverEvent } from "aws-lambda"
import { IFwValidator } from "."

export class ValidPermitFunc implements IFwValidator {
  valid(originalEvent: AppSyncResolverEvent<any, any>): boolean {
    throw new Error("Method not implemented.")
  }
}
