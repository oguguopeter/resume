import React from 'react'

const List = () => {
  return (
    <div>
        <h2 className='text-center mt-5'>Projects</h2>
        <p className='text-center mb-5'>this is a list of my project</p>
        <div className="projects container">
            <div className="row">
                <div className="col">
                <div class="card">
    <img src="./images/chair1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
                </div>
                <div className="col">
                <div class="card">
    <img src="./images/chair2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
                </div>
                <div className="col">
                <div class="card">
    <img src="./images/chair3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default List