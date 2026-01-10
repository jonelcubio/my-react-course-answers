export default function ProductDetails({productName, price, discountPrice, imageSrc}) {
  return(
    <>
    <div className="product-details-con">
      <img src={imageSrc} alt={productName} className="product-img" />
    </div>
    
    <p>{productName}</p>
     {!discountPrice ? <p>Price:{price}</p> : <del>Price:{price}</del>}
     {discountPrice && <p>Discount price:{discountPrice}</p>}
     <button className="lesson1btn">Add to cart</button>  
    </>
  );
}