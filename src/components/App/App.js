import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import s from "./App.module.css";
import Modal from "../Modal";
import BackgroundAuth from "../BackgroundAuth/BackgroundAuth";
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm"



function App() {
return (
<div className={s.wrapper}>
<Header />
<div className={s.container}>
<BackgroundAuth />
<Header />
{/* <RegisterForm/> */}
<Switch>
<Route path="/signup" component={RegisterForm} />
</Switch>
</div>
</div>
);
}

export default App;
