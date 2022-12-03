import { Button } from "@mui/material"
import type { NextPage } from "next"
import { useAuthenticator } from "@aws-amplify/ui-react"

const Home: NextPage = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user])
  return (
    <div css={{ padding: "10px" }}>
      <Button variant="contained">Hello, World!</Button>
    </div>
  )
}

export default Home
