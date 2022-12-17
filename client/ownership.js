export default [
  {
    ownership_id:1,
    property_id:1,
    owner:"seller1",
    listed:true,
    prospective_buyer:"",
    buyer:"",
    bought_by:""
  },
  {
    ownership_id:2,
    property_id:2,
    owner:"seller1",
    listed:false,
    prospective_buyer:"",
    buyer:"",
    bought_by:""
  },
  {
    ownership_id:3,
    property_id:3,
    owner:"seller3",
    listed:true,
    prospective_buyer:"",
    buyer:"",
    bought_by:""
  },
  {
    ownership_id:4,
    property_id:4,
    owner:"seller4",
    listed:true,
    prospective_buyer:"",
    buyer:"",
    bought_by:""
  },
  {
    ownership_id:5,
    property_id:5,
    owner:"seller5",
    listed:true,
    prospective_buyer:"",
    buyer:"",
    bought_by:""
  },
  {
    ownership_id:6,
    property_id:6,
    owner:"seller6",
    listed:true,
    prospective_buyer:"",
    buyer:"",
    bought_by:""
  }
]



/*
cases for a property

listed - waiting to sell
listed and a person wanting to buy
in process - has buyer and seller
bought - buyer becomes owner, seller is old_owner

table items

owner
listed - true/false
prospective_buyer - buyer waiting for approval
buyer- prospective_buyer becomes buyer, listed=false
bought_by - buyer becomes bought_buy and owner
*/