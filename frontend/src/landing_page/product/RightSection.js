import React from 'react';

function RightSection({
  imageUrl,
  productName,
  productDescription,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold">{productName}</h2>
          <p className="mt-3 text-muted">{productDescription}</p>

          <div className="mt-4">
          
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={imageUrl}
            alt={productName || 'Product'}
            className="img-fluid"
            style={{ maxHeight: '360px', objectFit: 'contain' }}
          />
        </div>
      </div>
   </div>
  );
}

export default RightSection;
