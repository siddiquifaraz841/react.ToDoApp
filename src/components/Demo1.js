import React, {Component} from "react";

// function Demo1() {
//     return (
//         <div>
//            <h1>Hello From function Component</h1>
//         </div>
//     );
// }

// const Demo1 = () => {
//     return (
//        <div>
//           <h1>Hello From function Component</h1>
//        </div>
//     );
// }

const Demo1 = (props) => (
    <div>
       <h1>Hello From function Component</h1>
       <h2>{props.Title}</h2>
    </div>
);

export default Demo1;