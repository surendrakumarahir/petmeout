import React from "react";

import Container from '@material-ui/core/Container';
import { AppBar } from '@material-ui/core';

import Navbar from '../components/Navbar';

const Header = () => {
  return (
  	 <AppBar position="fixed" color="default">
	  	<div className="header-main">
		   <Container maxWidth="lg">
		        <Navbar/>
		   </Container>
	    </div>
    </AppBar>
  );
};

export default Header;
