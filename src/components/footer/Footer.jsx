import React from 'react'
import'./footer.css'

const Footer = () => {
  return (
    <div className='container m-5'>
       
       
        <div className="row container bg-primary-subtle" >
            <div className="col-4">

            <i class="fa-brands fa-bootstrap"></i> <span>Bootstrap</span>
            <p>
            Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
            </p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.0-alpha3.</p>
            </div>

            <div className="col">
                <h3>Links</h3>
                <ul>
                    <li> <a href="">Home</a> </li>
                    <li> <a href="">Doc</a> </li>
                    <li> <a href="">Example</a> </li>
                    <li> <a href="">Icon</a> </li>
                    <li> <a href="">Themes</a> </li>
                    <li> <a href="">Blog</a> </li>
                    <li> <a href="">Swag Store</a> </li>
                </ul>
            </div>
            <div className="col">
                <h3>Guides</h3>
                <ul>
                    <li> <a href="">Getting Started</a> </li>
                    <li> <a href="">Starter Templates</a> </li>
                    <li> <a href="">Webpack</a> </li>
                    <li> <a href="">Parcel</a> </li>
                    <li> <a href="">Vice</a> </li>
                </ul>
            </div>
            <div className="col">
                <h3>Projects</h3>
                <ul>
                    <li> <a href="">Bootstrap 5</a> </li>
                    <li> <a href="">Bootstrap 4</a> </li>
                    <li> <a href="">Icon</a> </li>
                    <li> <a href="">RFS</a> </li>
                    <li> <a href="">Examples Repo</a> </li>
                </ul>
            </div>
            <div className="col">
                <h3>Community</h3>
                <ul>
                    <li> <a href="">Issues</a> </li>
                    <li> <a href="">Discussions</a> </li>
                    <li> <a href="">Corprate sponsors</a> </li>
                    <li> <a href="">Open selective</a> </li>
                    <li> <a href="">Stack overflow</a> </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer