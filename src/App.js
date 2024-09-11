import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Mobile(props) {
  return (
    <>
      <div className='container'>
        <div className='container1'>
          <img src={props.src} className='images'/>
        </div>
        <div className='container2'>
          <p className='heading'>{props.heading}</p>
          <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
            <li>{props.item4}</li>
            <li>{props.item5}</li>
            <li>{props.item6}</li>
          </ul>
        </div>
        <div className='container3'>
          <h4 className='price'>{props.price}</h4>
          <img src={props.src2} className='subimage' />
          <div>
            <p className='main'>{props.main}</p>
            <p className='discount'>{props.discount}</p>
          </div>
          <p>{props.delivery}</p>
          <p className='offers'>{props.offers}</p>
          <p className='exchange'>{props.exchange}</p>
        </div>

      </div>
    </>
  );




}

function App() {
  return (
    <>
      <div className='mobile1'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=70',
            heading: "Motorola Edge 50 Fusion (Marshmallow Blue, 256 GB)",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹24,999',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹27,999',
            discount: '10% off',
            delivery: 'Free delivery',
            offers: 'Save extra with combo offers',
            exchange: 'Upto ₹17,150 Off on Exchange'
          }} />
      </div>

      <div className='mobile2'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/p/l/-original-imah2fjcxjdjykpc.jpeg?q=70',
            heading: "Motorola G85 5G (Cobalt Blue, 128 GB))",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹17,999',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹20,999',
            discount: '14% off',
            delivery: 'Free delivery',
            offers: 'Daily Saver',
            exchange: 'Upto ₹17,150 Off on Exchange'
          }} />
      </div>

      <div className='mobile3'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/i/r/t3-lite-5g-v2356-vivo-original-imah27wmfgkergtx.jpeg?q=70',
            heading: "vivo T3 Lite 5G (Vibrant Green, 128 GB)",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹11,499',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹15,499',
            discount: '25% off',
            delivery: 'Free delivery',
            offers: 'Save extra with combo offers',
            exchange: 'Upto ₹8,750 Off on Exchange'
          }} />
      </div>

      <div className='mobile4'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/i/r/t3-lite-5g-v2356-vivo-original-imah27wmfgkergtx.jpeg?q=70',
            heading: "vivo T3 Lite 5G (Vibrant Green, 128 GB)",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹10,499',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹14,499',
            discount: '27% off',
            delivery: 'Free delivery',
            offers: 'Save extra with combo offers',
            exchange: 'Upto ₹6,700 Off on Exchange'
          }} />
      </div>

      <div className='mobile5'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/3/-original-imah27wvna2g9hfc.jpeg?q=70',
            heading: "vivo T3 Lite 5G (Majestic Black, 128 GB)",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹11,499',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹15,499',
            discount: '25% off',
            delivery: 'Free delivery',
            offers: 'Save extra with combo offers',
            exchange: 'Upto ₹8,750 Off on Exchange'
          }} />
      </div>

      <div className='mobile1'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/3/-original-imah27wvna2g9hfc.jpeg?q=70',
            heading: "vivo T3 Lite 5G (Majestic Black, 128 GB)",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹10,499',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹14,499',
            discount: '27% off',
            delivery: 'Free delivery',
            offers: 'Save extra with combo offers',
            exchange: 'Upto ₹6,700 Off on Exchange'
          }} />
      </div>

      <div className='mobile2'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70',
            heading: "Motorola G85 5G (Olive Green, 128 GB)",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹17,999',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹20,999',
            discount: '14% off',
            delivery: 'Free delivery',
            offers: 'Daily Saver',
            exchange: 'Upto ₹10,800 Off on Exchange'
          }} />
      </div>

      <div className='mobile3'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/j/w/-original-imah4d9fkzjzmfxv.jpeg?q=70',
            heading: "OPPO A3 5G (Nebula Red, 128 GB)",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹15,999',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹19,999',
            discount: '20% off',
            delivery: 'Free delivery',
            offers: 'Blank Offer',
            exchange: 'Upto ₹11,850 Off on Exchange'
          }} />
      </div>

      <div className='mobile4'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/p/9/-original-imah4d9f8rgftja8.jpeg?q=70',
            heading: "OPPO A3 5G (Ocean Blue, 128 GB)",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹15,999',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹19,999',
            discount: '20% off',
            delivery: 'Free delivery',
            offers: 'Blank Offer',
            exchange: 'Upto ₹11,850 Off on Exchange'
          }} />
      </div>

      <div className='mobile5'>
        <Mobile
          {...{
            src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/k/l/edge-50-fusion-pb300001in-motorola-original-imahywzpfd2jh9ep.jpeg?q=70',
            heading: "Motorola Edge 50 Fusion (Hot Pink, 128 GB)",
            item1: '12 GB RAM | 256 GB ROM',
            item2: '17.02 cm (6.7 inch) Full HD+ Display',
            item3: '50MP + 13MP | 32MP Front Camera',
            item4: '5000 mAh Battery',
            item5: '7s Gen 2 Processor',
            item6: '1 Year on Handset and 6 Months on Accessories',
            price: '₹24,999',
            src2:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png',
            main: '₹27,999',
            discount: '10% off',
            delivery: 'Free delivery',
            offers: 'Save extra with combo offers',
            exchange: 'Upto ₹17,150 Off on Exchange'
          }} />
      </div>


    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
