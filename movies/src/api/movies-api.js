export const getMovies = () => {
    return fetch('http://localhost:8080/api/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to fetch movies. Status: ${res.status}`);
      }
      return res.json();
    });
    };
    
    export const getGenres = () => {
      return fetch(
         '/api/genres',{headers: {
           'Authorization': window.localStorage.getItem('token')
        }
      }
      ).then(res => res.json());
    };
    
    export const login = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
    };
    
    export const signup = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users?action=register', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      return response.json();
    };
    
    export const getTopRatedMovies = async () => {
      try {
        const response = await fetch('/api/top', {
          method: 'GET',
          headers: {
            'Authorization': window.localStorage.getItem('token'),
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data.results; // Adjust this based on the actual structure of the response
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    };
    
    
    
    export const getActors = () => {
      return fetch(
         '/api/actors',{headers: {
           'Authorization': window.localStorage.getItem('token')
        }
      }
      ).then(res => res.json());
    }