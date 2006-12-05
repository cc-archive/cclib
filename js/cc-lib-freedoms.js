// <![CDATA[
/**
 * This is the class for CCLibFreedoms which will handle freedom style 
 * license selection.
 */


CCLibFreedoms.prototype = {
    var _share; 

    CCLibFreedoms: function (share) {
        this._share = share;
    }

    get: function (name) {
        return this.name;
    },

    set: function (name, value) {
        this.name = value;
    }
    
}
/*
CCLibFreedoms.prototype.get = function (name) {
    return this.name;
}

CCLibFreedoms.prototype.set = function (name, value) {
    this.name = value;
}
*/

// var freedoms = new CCLibFreedoms();

// document.write( freedoms.get('share') );
document.write( "hello" );

// ]]>
