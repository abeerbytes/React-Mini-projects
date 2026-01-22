const FetchJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    if (!response.ok) {
       throw new Error("Failed to fetch joke")

    }
    return response.json()

}
export default FetchJoke;