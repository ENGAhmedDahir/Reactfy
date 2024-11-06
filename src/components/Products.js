import React from "react";
import Product from "./Product";
const products = [
	{
		id: 1,
		name: "Laptop HP",
		urlImage: "https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXB1dGVyfGVufDB8fDB8fHww",
		price: 0.01,
	},
	{
		id: 2,
		name: "Laptop Apple",
		urlImage: "https://images.unsplash.com/photo-1716681863832-8e1f4b2e0cc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlJTIwbGFwdG9wfGVufDB8fDB8fHww",
		price: 0.01,
	},
	{
		id: 3,
		name: "All-in-One PC",
		urlImage: "https://images.unsplash.com/photo-1527443134519-8e75d479f32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWxsJTIwaW4lMjBvbmV8ZW58MHx8MHx8fDA%3D",
		price: 0.01,
	},
	{
		id: 4,
		name: "Apple Watch",
		urlImage: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
		price: 0.01,
	},
	{
		id: 5,
		name: "AirPods",
		urlImage: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
		price: 0.01,
	},
	{
		id: 6,
		name: "Smartphone Samsung Galaxy",
		urlImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
		price: 0.01,
	},
	{
		id: 7,
		name: "Gaming Console",
		urlImage: "https://images.pexels.com/photos/4522992/pexels-photo-4522992.jpeg?auto=compress&cs=tinysrgb&w=600",
		price: 0.01,
	},
	{
		id: 8,
		name: "Bluetooth Speaker",
		urlImage: "https://images.pexels.com/photos/9767549/pexels-photo-9767549.jpeg?auto=compress&cs=tinysrgb&w=600",
		price: 0.01,
	},
	{
		id: 9,
		name: "Drone Camera",
		urlImage: "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmUlMjBjYW1lcmElMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
		price: 0.01,
	},
	{
		id: 10,
		name: "Smart TV",
		urlImage: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
		price: 0.01,
	},
	{
		id: 11,
		name: "Tablet Apple iPad",
		urlImage: "https://images.pexels.com/photos/27396195/pexels-photo-27396195/free-photo-of-a-tablet-sitting-on-top-of-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600",
		price: 0.01,
	},
	// {
	// 	id: 12,
	// 	name: "Smart Home Hub",
	// 	urlImage: "https://images.unsplash.com/photo-1542907664-4ec81c0c7b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	// 	price: 0.01,
	// },
	{
		id: 13,
		name: "power Bank Charger",
		urlImage: "https://images.pexels.com/photos/10104320/pexels-photo-10104320.jpeg?auto=compress&cs=tinysrgb&w=600",
		price: 0.01,
	},
	{
		id: 14,
		name: "Digital Camera",
		urlImage: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600",
		price: 0.01,
	},
	{
		id: 15,
		name: "Electric Scooter",
		urlImage: "https://images.pexels.com/photos/9838763/pexels-photo-9838763.jpeg?auto=compress&cs=tinysrgb&w=600",
		price: 0.01,
	},
	// {
	// 	id: 16,
	// 	name: "Bluetooth Headphones",
	// 	urlImage: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	// 	price: 0.01,
	// },
	// {
	// 	id: 17,
	// 	name: "Portable Power Bank",
	// 	urlImage: "https://images.unsplash.com/photo-1563199123-0b4e1b50b15f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	// 	price: 0.01,
	// },
	// {
	// 	id: 18,
	// 	name: "Smart Light Bulb",
	// 	urlImage: "https://images.unsplash.com/photo-1566740933435-d1b7f5d1c1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	// 	price: 0.01,
	// },
	// {
	// 	id: 19,
	// 	name: "VR Headset",
	// 	urlImage: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	// 	price: 0.01,
	// },
	// {
	// 	id: 20,
	// 	name: "Smart Doorbell",
	// 	urlImage: "https://images.unsplash.com/photo-1606760226160-27e041bc9b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	// 	price: 0.01,
	// }
];

const Products =()=>{
    return (
    
        <div className="grid">
          { products.map( product=>(
       
       <Product key={product.id} product={product} />
       
))}

</div>
    )
}


export default Products