import React from 'react';
const CompanyItem =( company  )=>{
return (<div className="col-nd-4">
<div className='card card-body'>
    <h3 className='card-title'>{company.name}</h3>
</div>
</div>)
};
export default CompanyItem;