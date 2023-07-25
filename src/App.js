import './App.css';
import RestaurantCard, { restrautList } from "./RestaurantCard";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://dcassetcdn.com/design_img/1442230/51618/51618_7323624_1442230_c91dc92a_image.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

const Body =() =>
{
 return (
 <div className="body">
  <div className="search">Search</div>
  <div className="res-conatiner">
   {restrautList.map((x)=>
    {
      return <RestaurantCard key={x.data.id} {...x.data} />
    }
    
    
    )}

  </div>
 </div>

 )

}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;
