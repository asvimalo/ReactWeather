var React = require('react');
var Nav = require('./Nav');

//<!--In this case Weather component is => this.props.children-->
// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Nav/>

      <h2>Main Component</h2>
      {props.children}
    </div>

  )
}
module.exports = Main;
