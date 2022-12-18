import { domain, testCreateTodo } from "@tamura/backendlib/domain/domain"
import { AppSyncResolverHandler } from "aws-lambda"
import { RequestProcessorFactory } from "./framework/RequestProcessor"

// export const handler: AppSyncResolverHandler<any, any> = async (event) => {
export const handler = async (event: any) => {
  const processor = await RequestProcessorFactory.create(event)

  console.log(processor)

  const ret = processor.doProcess()

  return ret
}
