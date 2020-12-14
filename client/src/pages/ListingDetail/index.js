import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import DetailCard from "../../components/DetailCard";

const ListingDetail = () => {
  let { id } = useParams();
  return (
    <>
      <Header />
      <DetailCard listingId={id} />
    </>
  );
};

export default ListingDetail;
