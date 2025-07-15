import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {

    const [isLoading,changeData]=useState(true)

    const [gitApp,setApp]=useState(
    
        []
    )
    const fetchData=()=>{
        axios.get("https://api.github.com/users").then(

            (response)=>{
                changeData(false)

                 setApp(response.data)
            }
        ).catch(

            ()=>{
                alert("Something went wrong")
            }
        )
    }

    useEffect(()=>{fetchData()},[])
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
                        

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table table-bordered table-striped-columns table-hover table-warning-subtle">
  <thead>
    <tr>
      <th scope="col">login</th>
      <th scope="col">id</th>
      <th scope="col">node id</th>
      <th scope="col">avatar url</th>
      <th scope="col">garavatar url</th>
      
      <th scope="col">html url</th>
      <th scope="col">followers url</th>
      <th scope="col">following url url</th>
      <th scope="col">gists url</th>
      <th scope="col">starred url</th>
      <th scope="col">subscriptions url</th>
      <th scope="col">organizational url</th>
      <th scope="col">repos url</th>
      <th scope="col">events url</th>
      
      <th scope="col">user view type</th>

    </tr>
  </thead>
  {isLoading ? (<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>):(<tbody>
    {gitApp.map(

                            (value,index)=>{
                                 
                                return (
    <tr>
      
      <td>{value.login}</td>
      <td>{value.id}</td>
      <td>{value.node_id}</td>
      <td>{value.avatar_url}</td>
      <td>{value.gravatar_url}</td>
      <td>{value.followers_url}</td>
      <td>{value.following_url}</td>
      <td>{value.gists_url}</td>
      <td>{value.starred_url}</td>
      <td>{value.subscriptions_url}</td>
      <td>{value.organizations_url}</td>
      <td>{value.repos_url}</td>
      <td>{value.events_url}</td>
      <td>{value.received_events_url}</td>
      <td>{value.user_view_type}</td>
      
      

      

    </tr>
     )
                            }
                        )}
    
  </tbody> )}
  
</table>
                        </div>
                               
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewall