import { Button } from "@mui/material"
import type { NextPage } from "next"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { API } from "aws-amplify"
import { listTodoApi1 } from "graphql/queries"
import { ListTodoApi1QueryVariables } from "@tamura/backendlib"
import { domain } from "@tamura/backendlib/domain/domain"

const Home: NextPage = () => {
  const { user } = useAuthenticator((context) => [context.user])
  console.log(user)

  async function handleTsFunc1(event: any) {
    console.log("@start@ handleTsFunc1")

    event.preventDefault()

    console.log(domain)

    const res = (await API.graphql({
      query: listTodoApi1,
      variables: {
        input: {
          name: "test1",
        },
      },
    })) as { data: ListTodoApi1QueryVariables; errors: any[] }

    console.log(res)
  }

  return (
    <div css={{ padding: "10px" }}>
      <Button variant="contained" onClick={handleTsFunc1}>
        Hello, World!
      </Button>
    </div>
  )
}

export default Home
