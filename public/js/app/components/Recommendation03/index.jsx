var React = require('react');
var tpl = require('./tpl.rt');
var _ = require('lodash');

var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    var script = `<script type="text/javascript">
      window.tosAdspaceInfo = {'aid':10011188,'serverbaseurl':'jf.wiplatform.com/','staticbaseurl':'res.wiplatform.com/'}
    </script>
    <script type="text/javascript" src="http://res.wiplatform.com/tr.js"></script>`

    // var content = document.getElementById('recommendation-03-content');
    // this.refs.contentContainer.appendChild( content );
    // content.style.display = 'block';

    this.refs.contentContainer.innerHTML = script;
    eval( this.refs.contentContainer.querySelector('script').innerHTML );


    // _.forEach(this.refs.contentContainer.querySelectorAll('script'), function(item) {
    //   eval( item.innerHTML );
    // });
  }
});


module.exports = Elem;