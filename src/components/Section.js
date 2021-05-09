import React, { Component } from 'react'
import Home from "./section/Home";
import Blog from "./section/Blog";
import Contact from "./section/Contact";
import About from "./section/About";
import Service from "./section/Service";
import { Route } from "react-router-dom";
class Section extends Component {
    render() {
        return (
            <div>
                <section>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={Blog} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/contact" component={Contact} />

                </section>
            </div>
        )
    }
}

export default Section
