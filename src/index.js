import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

function Hi(){
  return <div className='red'>        
  <h1><i>NOMAN WASEEM</i></h1>
  <address>
    <p>Address: HOUSE NO R/2439 3RD FLOOR SEC NO 8/F GULSHAN E ZAHOOR ABYSINIA LINE KARACHI <br/>
    Contact: +92-312-2833671 
    
    </p>
    Email: <a href="mailto:nomanwaseem111@gmail.com">nomanwaseem111@gmail.com</a>
  </address>
  <hr/>
  <h2><i><u>CAREER OBJECTIVE :</u></i></h2>
        <p>Seeking a challenging position in a progressive with an aim to contribute positively towards
            the objective of
            the organization to the best of my capabilities and to develop my professional skills.
        </p>
        <hr/>
        <h2><i><u>PROFESSIONAL EXPERIENCE :</u></i></h2>
        <ul/>
            <li>Pizza Point Call Center : 2 Years Experience as an CSR</li><br/>
            <li>Sybrid A Lakson Group Of Company: 01 Year experience as an CSE</li><br/>
            <li>Cloud lead: 06 Months experience as a Data Research </li><br/>
            <li>Eat Mubarak Call Center : 6 Month experience as an CSR</li><br/>
            <li>Bykea Contact Center : 3 Years experience as an CSR</li>
        <ul/>
        <hr/>
        <h2><i><u>EXTRA CURRICULAR ACTIVITIES : </u></i></h2>
        <dd>Play out door sports including cricket & football,read religious books & Islamic stories,Surf through net to
            find interesting stories, facts & happenings around the world.</dd>
        <hr/>
        <h2> <i><u>PERSONAL INFORMATION : </u></i></h2>
        <ul/>
            <li>Father’s Name : Waseem Ahmed Qureshi</li><br/>
            <li>Date of Birth : 08-02-1997.</li><br/>
            <li>Nationality : Pakistani.</li><br/>
            <li>Marital Status : Single.</li><br/>
            <li>C.N.I.C : 42201-0285715-3</li>
        <ul/>
        <hr/>
        <h2><i><u>COMPUTER SKILL’S : <u/></u></i></h2>
        <ul>
            <li>MS Office</li>
            <li>Windows Operating</li>
            <li>Web Development</li>
        </ul>
        <hr/>
        <h2><i><u> REFERENCES : </u></i></h2>
        <dd>Will be furnished on request</dd>

      
  </div>
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));