import Reflux from 'reflux';
import $ from 'jquery';
import MotelAction from '../actions/MotelActions';

var MotelStore = Reflux.createStore({
        listenables: [MotelAction],
        motelList: [],
        
        init: function() {
            this.fetchList();
        },
        
        fetchList: function()
        {
            $.ajax({
               crossDomain: true,
               cache: false,
               context: this,
               url: 'https://infinite-atoll-7499.herokuapp.com/api/v1/motel',
               method: 'GET',
               success: function(data){
                   console.log('Well done!'),
                   this.motelList = data.slice();
                   this.trigger(this.motelList);
               },
            });
        }
});

export default MotelStore;