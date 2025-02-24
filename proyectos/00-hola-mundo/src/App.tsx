import { TwitterFollowing } from "./TwitterFollowing"
import "./App.css"

export const App = () => {
  return (
    <TwitterFollowing userName="midudev" name="Miguel Ángel Durán" initialIsFollowing={false} />
  )
}