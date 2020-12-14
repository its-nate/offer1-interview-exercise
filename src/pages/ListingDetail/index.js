import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import DetailCard from "../../components/DetailCard";

const ListingDetail = (props) => {
  let { id } = useParams();
  let listing = props.getListing(id);

  return (
    <>
      <Header />
      <DetailCard listing={listing} />
    </>
  );
};

export default ListingDetail;
