import React from "react";
import { useEffect } from "react";
import {useState} from'react'
import CompanyItem from "./CompanyItem.jsx";
import * as CompanyServer from'./CompanyServer.js'

const CompanyList =  () => {
  const[companies,setCompanies]=useState([])
  const listCompanies= async ()=>{
    try{
      const res = await CompanyServer.listCompanies();
      const data = await  res.json();
      setCompanies(data.companies)
      console.log(data);

    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    listCompanies();
  },[])
  return <div className='row'>
     {companies.map((company)=>(
        <CompanyItem key={company.id} company={company}/>
     ))}
  </div>;
};
export default CompanyList;
