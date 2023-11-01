import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ submitForm }) => {
  const [word, setWord] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    const isValidWord = event.target.value
      .toLowerCase()
      .match(/^[a-z]+$/);
    const isValidInput = word.length < 5 && isValidWord;
    if (isValidInput) {
      setWord(event.target.value);
    }
  };

  const check = (e) => {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (
      !(keyCode > 64 && keyCode < 91) &&
      !(keyCode > 96 && keyCode < 123) &&
      !(keyCode === 8 || keyCode === 13)
    ) {
      e.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (word.length === 5) {
      submitForm(word);
      setWord('');
    }
  };

  return (
    <form
      className="flex flex-col gap-2 mt-4"
      onSubmit={handleSubmit}
    >
      <p className="text-center">Enter a 5 letter word</p>
      <input
        className="border border-gray-500 py-2 px-1 rounded-lg text-center"
        type="text"
        value={word}
        placeholder="...apple"
        onKeyDown={check}
        onKeyUp={check}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" className="button" />
    </form>
  );
};

Form.propTypes = {
  submitForm: PropTypes.func,
};

export default Form;
