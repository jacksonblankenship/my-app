import "./styles.css";

const Joke = ({ joke }) => {
  return (
    <div className="Joke">
      <p className="joke joke-setup">{joke.setup}</p>
      <p className="joke">{joke.delivery}</p>
    </div>
  );
};

export default Joke;
