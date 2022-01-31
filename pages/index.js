//revvedpets.com
import { Fragment } from 'react';
import Image from 'next/image';
import pets from '../images/ani.jpg';
import aboutUs from '../images/about.jpg';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Link from 'next/link';

function homePage(){
  return (
    <Fragment>
      <Header/>
      <Navigation/>
    <div className = "container ins">
    <div className = 'row'>
    <div className = "col-md-3 offset-md-3 text-center views">
    <h3> 
      <a href="/pets"> View Pets </a> 
    </h3>
    </div>
      <div className='col-md-3 ml-md-auto' style={{ height: 350, width: 400}}>
    <a href = "/pets/"><Image src={pets} alt="Pets" width={400} height={350} className = "homeview"/></a>
       
      </div>
    </div>


    <div className = "row">
      <div className = "col-md-3 offset-md-3" style = {{ height:350, width:400 }}>
      <Link href="/about">
         <a> <Image src={aboutUs} alt="About" width={400} height={350} className = "homeview"/>
        </a>
      </Link>
      </div>
      <div className = "col-md-3 ml-md-auto text-center views">
    <h3>
      <Link href="/about"><a>About Us</a></Link>
    </h3>
    </div>
    </div>
    </div>
    </Fragment>
  );
}

export default homePage;
