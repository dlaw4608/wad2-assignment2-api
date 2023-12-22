import React, { useState } from "react";

export const MovieActorContext = React.createContext(null);

const MovieActorContextProvider = (props) => {
  const [pageNum1, setPageNum1] = useState([])


 

const setPageNumber1 = (num) =>{
  setPageNum1(num);
  console.log("PagenumSet"+ num)
}


  

 return (
    <MovieActorContext.Provider
      value={{
        setPageNumber1,
        pageNum1,
      }}
    >
      {props.children}
    </MovieActorContext.Provider>
  );
};

export default MovieActorContextProvider;