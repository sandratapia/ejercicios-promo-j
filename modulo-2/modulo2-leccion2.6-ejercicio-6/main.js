'use strict';

const cestaPeras = {};
cestaPeras.max = 10;
cestaPeras.min = 1;
cestaPeras.actual = 4;
cestaPeras.start = 0;
cestaPeras.add = function(){
    return (this.actual + 1);
}
cestaPeras.less = function(){
    return (this.actual - 1);
}

