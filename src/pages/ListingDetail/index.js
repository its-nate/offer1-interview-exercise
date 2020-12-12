// import React from "react";
import { useParams } from 'react-router-dom';
import DetailCard from '../../components/DetailCard';

const ListingDetail = (props) => {
  let { id } = useParams();
  let listing = props.getListing(id);
  console.log(listing);
  
  return (
    <DetailCard listing={listing} />
  )
};

export default ListingDetail;
