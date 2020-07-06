class UserAPI {
  static users = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonResponse = response.json();
      return jsonResponse;
    } catch (e) {
      return null;
    }
  };
}

export default UserAPI;
