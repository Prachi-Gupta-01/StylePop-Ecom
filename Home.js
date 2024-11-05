import {React,useState} from "react";
import HeroCarousel from "../components/HeroCarousel";
import "./Home.css"
import PopStarCollection from "../components/PopStarCollection";
import CartPage from "./CartPage";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";


const popStars = [
  {
    name: 'Beyoncé',
    image: 'https://cdn.openart.ai/published/tuQbXMWreVivaNSzCyGF/jGSUJRm7_-QCE_1024.webp',
    product:[
      {name: "Beyonce Cape", 
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSd_kdVPXDP3p2NoTFOdOGgo2hbkTHGYPovpN2ekb1BOvV1Om9n0Ey9TrMedIEqBWIedkFJjqvwR6YyAzwtxZjHSIu9-ltC1ouse7eGjHvK', 
        description: "This formal piece is intricately studded with heavy embroidery and hand work. This product is enough to complete your look for a fancy evening out! Grace it with a stylised hairstyle and power shoes and your are ready to look your absolute best!", 
        price: "₹9,500",
        reviews: [], 
      },
      {
        name:"ROSE ROOM Beyonce Net Long Dress",
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTNmWo503kKXVeIhZ91zQh3rD8TLU4NzzAcMZjrb6SZOPxGWSz5sjHS2en8jJF1CRkkeVR5KXziIGKORuWg42JxNL_15YXWDIwOP9gTdfF7E2RfM0LPhbL2',
        description:"The Stand Color Multi Panelled Printed Long Dress from our Spring 2024 Collection. A buoyant Net Fabric Long Dress featuring Tube Removeable Belt",
        price:" ₹44,500",
        reviews: [], 
      },
      {
        name:"Beyonce Dress",
        image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9hHfJNIpc8df1sFH9ys09zrPHC82aEGQ7zCnAmQrN8qoxwIgTjgEEbSQemSW1t3iXqtk_VAxlJ7NaV5AoTe5ECaN7yGjupFi97ky7UVfM',
        description:"Designed in stretchable sequinned mint green fabric which gives the perfect fitted look.                            Wear the Beyonce Dress and be the head turner at any party ! ",
        price:"₹1,999",
        reviews: [], 
      },
      {
        name:"Jacket",
        image:'https://i.etsystatic.com/32840031/r/il/63863e/4281214186/il_fullxfull.4281214186_3q83.jpg',
        description:"Beyonce designer jacket|Hand Painted Denim Jacket|Personalized Gift|girls Custom Jeans|",
        price:"₹ 13,400",
        reviews: [], 
      }
    ]

  },
  {
    name: 'Rihanna',
    image: 'https://images4.alphacoders.com/964/thumb-1920-964073.jpg',
    product:[

      {
        name:"Rihanna Black Prom Dress ",
        image:'https://www.thecelebritydresses.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/r/i/rihanna_sexy_black_dress_2012_victoria_secret_fashion_show_2_1.jpg',
        description:"Rihanna Black Prom Dress 2012 Victoria Secret Fashion Show",
        price:"$155.99",
        reviews: [], 
      },
      {
        name:"Lilac Party Dress",
        image:'https://www.thecelebritydresses.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/b/_/b_rihanna_lavender_party_dress_fenty_beauty_by_rihanna_harvey_nichols_launch_0.jpg',
        description:"Rihanna Lilac Party Dress ‘FENTY Beauty’ By Rihanna Harvey Nichols Launch",
        price:" $128.99",
        reviews: [], 
      },
      {
        name:"Dark Navy Gown ",
        image:'https://www.thecelebritydresses.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/r/i/rihanna-dark-navy-strapless-ball-gown-2014-diamond-ball-_7_.jpg',
        description:"Rihanna Dark Navy Strapless Ball Gown 2014 Diamond Ball",
        price:" $289.99",
        reviews: [], 
      },
      

    ]
  },
  {
    name: 'Ariana Grande',
    image: 'https://mrwallpaper.com/images/featured/ariana-grande-9xts3hhdnolieeq4.jpg',
    product:[

      {
        name:"Unisex Sweatshirt All Sizes ",
        image:'https://i.etsystatic.com/46364989/r/il/c65429/5692459901/il_794xN.5692459901_i56r.jpg',
        description:"Unisex Sweatshirt All Sizes | Gift for Music Lover, Arianator, Friend, Family, Partner",
        price:"₹ 3,098",
        reviews: [], 
      },
      {
        name:"Phone Case Cover Fit",
        image:'https://i.etsystatic.com/50057153/r/il/5c590e/5839202019/il_600x600.5839202019_irqi.jpg',
        description:"Ariana lyrics Grande Phone Case Cover Fit For iPhone 16 15 14 13 12 Pro Max Xr 7 8 Plus, Samsung S24 S23 S22 FE A15 A54 Note 20 Pixel 8A 7",
        price:"₹ 1,732",
        reviews: [], 
      },
      {
        name:"Poster",
        image:'https://i.etsystatic.com/45479919/c/1080/1080/0/0/il/b07c60/5966930570/il_300x300.5966930570_mrdr.jpg',
        description:"Ariana Grande Poster | Sweetener | Album Cover | Album Poster | Music Poster | Wall Art | Wall Decor | Wall Prints | Room Decor",
        price:"₹ 98",
        reviews: [], 
      },
     

    ]
  },
  {
    name: 'Billie Eilish',
    image: 'https://4kwallpapers.com/images/wallpapers/billie-eilish-american-singer-2021-5k-8k-1280x1280-6487.jpg',
    product:[

      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      }

    ]
  },
  {
    name: 'Bangtan Boys (BTS)',
    image: 'https://mrwallpaper.com/images/hd/bts-photoshoot-vogue-hongkong-cover-t50hmh6jqgzict8s.jpg',
    product:[

      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      }

    ]
  },
  {
    name: 'Travis Scott',
    image: 'https://c4.wallpaperflare.com/wallpaper/155/581/161/travis-scott-music-rap-hd-wallpaper-preview.jpg',
    product:[

      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      }

    ]
    
  },
  {
    name: 'Taylor Swift',
    image: 'https://i.pinimg.com/originals/4c/e3/10/4ce31074246720387555aa04899079bf.jpg',
    product:[

      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      }

    ]
    
  },
  {
    name: 'Justin Bieber',
    image: 'https://wallpapers.com/images/hd/justin-bieber-pictures-z6ynfrjjk68835kv.jpg',
    product:[

      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      },
      {
        name:"",
        image:'',
        description:"",
        price:"",
        reviews: [], 
      }

    ]
    
  },
  


  // Add more pop stars 
];


const Home = ({ cart, setCart }) => {

  const [selectedPopStar, setSelectedPopStar] = useState(null);
  const[cartmessage,setCartMessage] = useState({});
  const [reviews, setReviews] = useState({});
  const handleShopNowClick = (popStar) => {
    setSelectedPopStar(popStar);
  };

  const closeProductView = () => {
    setSelectedPopStar(null);
  };
  
  const addToCart = (product,productindex) => { 
    const productkey = productindex;
    setCart((prevCart) => [...prevCart, product]);
    setCartMessage(prevMessage => ({
      ...prevMessage,
      [productkey]:"Added to Cart.Visit Cart"
    }));
    setTimeout(() => {
      setCartMessage(prevMessage => ({
        ...prevMessage,
        [productkey]:""
      }));
    },3000);
  };
  const handleAddReview = (productIndex, review) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [productIndex]: [...(prevReviews[productIndex] || []), review],
    }));
  };


  return (
    <div className="home">
      {!selectedPopStar && (
        <>
          <HeroCarousel />
          <section className="collections">
        <h2>Trending Collections</h2>
        <div className="collection-grid">
          {/* Placeholder collections */}
          <div className="collection-item">Neon Streetwear</div>
          <div className="collection-item">Graffiti Styles</div>
          <div className="collection-item">Retro Hip-Hop</div>
        </div>
        
{/** yaha se popstar card start hai */}

        <h2>Featured Pop Stars and Collections</h2>
        <div className="pop-star-grid">
          {popStars.map((star, index) => (
            <PopStarCollection
              key={index}
              name={star.name}
              image={star.image}
              onShopNowClick={() => handleShopNowClick(star)}
            />
          ))}
        </div>
      </section>
        </>
      )}

      {selectedPopStar && (
        <div className="view">
          <h2 >{selectedPopStar.name}'s Products</h2>
          
          <div className="product-container">
          <div className="product-list">
            {selectedPopStar.product.map((product, index) => (
              <div key={index} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price"><strong>Price: {product.price}</strong></p>
              
                <button className="buy-button">Buy</button>
               <div>
               <button className="buy-button"  onClick={() => addToCart(product,index)}>Add to Cart</button>
               {cartmessage[index] && (
                <p>{cartmessage[index]}</p>
               )}
               
               </div>
               <ReviewForm onSubmitReview={(review) => handleAddReview(index, review)} />
               <ReviewList reviews={reviews[index] || []} />
                  </div>

         </div>
            ))}
 </div>
  </div>
          <button className="close-button" onClick={closeProductView}>Back to Collections</button>
        </div>
      )}
    </div>
  );
};

export default Home;