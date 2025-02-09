import React from "react";

export default function CartShoe(props) {
  let { cart } = props;
  let renderCart = () => {
    return cart.map((shoe, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{shoe.name}</td>
          <td>{shoe.price}</td>
          <td>
            <img className="w-20" src={shoe.image} alt="" />
          </td>
          <td>{shoe.total}</td>
          <td>
            <button
              onClick={() => {
                props.handleDelete(shoe.id);
              }}
              className="bg-red-500 text-white p-1"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="flex-grow p-5  border-2 border-black ml-5">
      <table className="w-full text-xl">
        <thead className="bg-gray-400">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderCart()}</tbody>
        {cart.length == 0 && (
          <p className="text-red-500 text-sm">No item in cart</p>
        )}
      </table>
    </div>
  );
}
