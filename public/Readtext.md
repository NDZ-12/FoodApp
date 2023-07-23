## How to used the props in funcation componenets ?

##<RestaurantCard  resName="SRK Foods" cuisine="Fastfood" />

const RestaurantCard = (props) => {
return (

<div>
<h3> {props.resName}</h3>
      <h4>{props.cuisine}</h4>
</div>

);
}