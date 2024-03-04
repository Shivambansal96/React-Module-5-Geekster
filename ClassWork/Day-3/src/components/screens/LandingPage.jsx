// import logo from "./../../logo.svg"
import './LandingPage.css';
import Nav from "../Nav.js"
import Main from "../Main.js";
import SecondSection from '../SecondSection.js';
import Card from '../Card.js';
import Footer from  "../Footer.jsx";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Nav />
      <Main />
      <SecondSection />
     
      <div className='Cards'>

        <Card name="Sundar Pichai" link="https://images.firstpost.com/wp-content/uploads/2019/10/google-ceo-sundar-pichai.jpg" title="CEO of Google" para="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis." />
        <Card name="Tim Cook" link="https://image.cnbcfm.com/api/v1/image/103598368-20160502-2244-2152.jpg?v=1462219107" title="CEO of Apple" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."/>
        <Card name="Aman Gupta" link="https://th.bing.com/th/id/OIP.LoylYd9khQT6-7Q0fheWhAAAAA?rs=1&pid=ImgDetMain" title="CEO of Boat" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provient earum esse, odio numquam labore recusandae similique sunt." />

        <Card name="Jean-Frédéric Dufour" link="https://hodinkee.imgix.net/uploads/article/hero_image/1953/JeanFredericDufour.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=1200&h=630&fit=crop" title="CEO of Rolex" para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." />
        <Card name="Natarajan Chandrasekaran" link="https://media.zigcdn.com/media/content/2016/Jan/guenter-butschek-tata-motors-zigwheels-19012016-m_720x540.jpg" title="CEO of Tata" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" />
        <Card name="Mark Zuckerberg" link="https://th.bing.com/th/id/OIP.en5Hmwzpq8LetsxVK-lORwAAAA?rs=1&pid=ImgDetMain" title="CEO of Facebook" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" />

      </div>

      <Footer />

      
    </div>
  );
}



export default LandingPage;
