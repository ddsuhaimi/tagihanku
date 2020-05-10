import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <div className="footer bg-dark text-white py-2">
          <div className="container ">
            <div className="d-flex justify-content-center flex-column text-center">
              <span className="text-credit">
                <span className="mr-4"> Made with ❤.</span> 
                <span className="btn-group">

                <a className=" btn btn-primary btn-sm " href="https://twitter.com/dsuhaimiid"><i className="fab fa-twitter"></i></a>
              <a className=" btn btn-light btn-sm " href="https://github.com/dediacc"><i className=" fab fa-github"></i></a> 
                </span>
              </span>
            </div>
          </div>
        </div>
    )
  }
}

export default Footer
