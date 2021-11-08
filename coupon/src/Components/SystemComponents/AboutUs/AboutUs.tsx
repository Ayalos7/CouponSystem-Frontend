import "./AboutUs.css";

function AboutUs(): JSX.Element {
  return (
    <div className="AboutUs">
      <div className="AboutUsLeft p-10 max-w-screen-lg mx-auto">
        <p>
          <br/>
        <h1 className="font-bold text-2xl sm:text-3xl mb-8 text-black">
          Hello Users!
          </h1>
          
          My name is Ayal and I'm CouponMaster's creator. <br />{" "}
          I'm a 22 years old Full Stack developer with knowledge in Java,
          Spring (Core, Boot, Data, Web, Cloud, Security), MySQL, Html5, Css3, Js, Ts and React. <br /> 
          CouponMaster is a coupon management system, combining client and server sides.{" "}
          <br />
          This website includes a Database construction, Data access
          objects patterns, System Facades design, Web services, React,
          Redux and JSON web token validation. <br /> 
          CouponMaster includes 3 user types - Admin , Company and Customer. <br/>
          Admin user type can manage company & customer user types. <br/>
          Company user type can create, update, delete and view coupons.<br/>
          Customer user type can browse and purchase coupons. <br />
          Coupons have features such as name, category, price, expiration date and more.
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
