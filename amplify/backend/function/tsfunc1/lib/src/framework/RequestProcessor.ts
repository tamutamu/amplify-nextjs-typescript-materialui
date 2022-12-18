import { AppSyncResolverEvent, AppSyncResolverHandler } from "aws-lambda"

export interface IRequestProcessor<RET> {
  doProcess(): RET
}

export abstract class AbstractRequestProcessor<RET>
  implements IRequestProcessor<RET>
{
  /**
   *コンストラクタ
   * @param originalEvent
   */
  constructor(protected originalEvent: AppSyncResolverEvent<any, any>) {}

  /**
   * 実行
   */
  doProcess(): RET {
    try {
      // 単項目精査
      //   this.parametersValid()

      // 業務処理
      const ret: RET = this.main()
      return ret
    } catch (error) {
      this.catchError(error)
    }
  }

  /**
   * 単項目精査
   */
  protected abstract parametersValid(): boolean

  /**
   * 業務処理
   */
  protected abstract main(): RET

  /**
   * エラーハンドラ
   */
  protected abstract catchError(error: Error): never
}

export class RequestProcessorFactory {
  static async create(
    originalEvent: AppSyncResolverEvent<any, any>
  ): Promise<IRequestProcessor<string>> {
    // const processor: IRequestProcessor<string> = (
    //   await import("../app/processor/CreateSto")
    // ). as IRequestProcessor<string>
    const module = await import("../app/processor/CreateSto")
    return new module.Main(originalEvent)

    // return processor
  }
}
