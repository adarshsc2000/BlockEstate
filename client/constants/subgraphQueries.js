import { gql, useQuery } from "@apollo/client";

const GET_LISTED_PROPERTIES = gql`
  {
    propertyForSales(where: { status: LISTED }) {
    id
    property {
      id
      owner {
        id
      }
      ipfsURL
    }
    price
  }
  }
`;

const GET_INTERESTED_PROPERTIES = gql`
{
  propertyForSales(where: { status: INTERESTED }) {
    id
    property {
      id
      owner {
        id
      }
      ipfsURL
    }
    price
  }
}
`;

export function getListedProperties() {
  const { loading, error, data: listedProperties } = useQuery(GET_LISTED_PROPERTIES);
    if (loading) return "Loading...";
    else if (error) return "Error..", error.message;
    else 
    {
      const propertiesOnSale = listedProperties.propertyForSales;
      return propertiesOnSale;
    }
}

export function getPropertiesToVerify() {
  const { loading, error, data: interestedProperties } = useQuery(GET_INTERESTED_PROPERTIES);
    if (loading) return "Loading...";
    else if (error) return "Error..", error.message;
    else 
    {
      const propertiesToVerify = interestedProperties.propertyForSales;
      return propertiesToVerify;
    }
}

