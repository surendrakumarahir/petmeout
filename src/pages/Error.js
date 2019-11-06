import React from "react";
import { Header , Footer } from "../layouts"
import PageNotFount from  "./PageNotFound";

const Error = () => {
  return (
      <>
        <Header/>
        <div className='main'>
            <PageNotFount/>
        </div>
        <Footer/>
      </>
  );
};

export default Error;
