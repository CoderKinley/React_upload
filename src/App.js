import "./App.css";
import NavBar from "./components/NavBar";
// import React, { Component, useState } from "react";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

// export default class App extends Component {
 const App = () => { 
  // name = "Kinley Penjor";
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);
  // state = {
  //   progress: 0,
  // };
  const setProgress = (progress) => {
    // this.setState({
    //   progress: progress,
    // });
    setprogress(progress);
  };
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="home"
                pageSize={15}
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={15}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={15}
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={15}
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={15}
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={15}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={15}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={15}
                category="technology"
              />
            </Route>
            <Route exact path="/about" key="about">
              <About />
            </Route>
          </Switch>
        </Router>
      </>
    );
}

export default App;