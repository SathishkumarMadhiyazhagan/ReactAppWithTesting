import { useEffect, useState } from "react"

export const Joke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function getJoke() {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value)
    }
    getJoke();
  }, [])
  return (
    <section className="joke">
            <p>
                <span data-testid="jokeHeadline">{joke}</span>
                <span> - api.chucknorris.io</span>
            </p>
    </section>
  )
}
