const JokeBox = ({ loading, joke }) => {
    return (
        <div>
            <p>{loading ? "Loading..." : joke}</p>
        </div>
    )
}
export default JokeBox;