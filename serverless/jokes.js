const fetch = require('node-fetch');

exports.handler = async (events, context) => {
  const url = 'https://icanhazdadjoke.com/';
  try {
    const jokesStream = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    const jsonJoke = await jokesStream.json();
    return {
      statusCode: 200,
      body: JSON.stringify(jsonJoke),
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
};
