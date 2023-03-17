const api = {
    hostname: `http://localhost:3001`,
    async registerUser(data) {
      const response = await fetch(`${this.hostname}/registerUser`, {

        body: JSON.stringify(data),
        headers: new Headers({
          "Content-type": "application/json",
          "if-none-match": "",
        }),
        method: "POST",
      });
      return await response.json();
    }
  };
  
  export default api;
  