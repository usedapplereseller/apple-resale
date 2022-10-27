import React from "react";
import "../App.css";

type Props = {
  photoUrl: string;
};

const ListingPhoto: React.FC<Props> = ({ photoUrl }) => {
  return (
    <div className="bg-image">
      <img src={photoUrl} className="img-fluid  categoryPhotoListingBuy" />
    </div>
  );
};

export default ListingPhoto;
