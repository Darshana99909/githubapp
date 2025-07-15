import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const [input,changeData]=useState(
        {id:"",nodeid:"",avatarul:"",gravatarurl:"",url:"",htmlurl:"",followersurl:"",followingurl:"",gistsurl:"",starredurl:"",subscriptionsurl:"",organizationalurl:"",reposurl:"",eventsurl:"",receivedurl:"",type:"",userviewtype:""}
    )

    const inputHandler=(event)=>{
        changeData({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(input)
    }
  return (
    <div style={{
        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701646600168-5d599b350398?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBibHVlfGVufDB8fDB8fHww")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name='id' value={input.id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">node_id</label>
                            <input type="text" className="form-control" name='nodeid' value={input.nodeid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">avatar url</label>
                            <input type="text" className="form-control" name='avatarul'value={input.avatarul} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">gravatar url</label>
                            <input type="text" className="form-control" name='gravatarurl' value={input.gravatarurl} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">url</label>
                            <input type="text" className="form-control" name='url' value={input.url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">html url</label>
                            <input type="text" className="form-control" name='htmlurl' value={input.htmlurl} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">followers url</label>
                            <input type="text" className="form-control" name='followersurl' value={input.followersurl} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">following url</label>
                            <input type="text" className="form-control" name='followingurl' value={input.followingurl} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">gists url</label>
                            <input type="text" className="form-control" name='gistsurl' value={input.gistsurl} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">starred url</label>
                            <input type="text" className="form-control" name='starredurl' value={input.starredurl} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">subscriptions url</label>
                            <input type="text" className="form-control" name='subscriptionsurl' value={input.subscriptionsurl} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">organizational url</label>
                            <input type="text" className="form-control" name='organizationalurl' value={input.organizationalurl} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">repos url</label>
                            <input type="text" className="form-control" name='reposurl' value={input.reposurl} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">events url</label>
                            <input type="text" className="form-control" name='eventsurl' value={input.eventsurl} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">received url</label>
                            <input type="text" className="form-control"  name='receivedurl' value={input.receivedurl} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">type</label>
                            <input type="text" className="form-control" name='type' value={input.type} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">user view type</label>
                            <input type="text" className="form-control"  name='userviewtype' value={input.userviewtype} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add