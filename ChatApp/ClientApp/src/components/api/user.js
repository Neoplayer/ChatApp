export const Auth = async (email, password) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password: password }),
    };

    const response = await fetch(
      "http://localhost:5000/Users/Authenticate",
      requestOptions
    );
    return await response.json();
  } catch (error) {
    console.log(error);
    return await '404'

  }
};
