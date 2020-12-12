import React from 'react';
import ListingCard from '../../components/ListingCard'

class AllListings extends React.Component {

  render() {
    return (
      <div className="row">
        {this.props.listings.map((i) => {
          return (
            <div className="col-4">
                <ListingCard key={i.id} listing={i}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllListings;
