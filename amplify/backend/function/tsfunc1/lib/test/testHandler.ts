import { handler } from "../src/index"

handler({ test: "" }).then((ret) => {
  console.log("完了")
})
