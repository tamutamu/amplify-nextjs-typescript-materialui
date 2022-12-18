import { AppSyncResolverEvent } from "aws-lambda"

export interface IFwValidator {
  valid(originalEvent: AppSyncResolverEvent<any, any>): boolean
}

export class FwValidateExecutor {}
