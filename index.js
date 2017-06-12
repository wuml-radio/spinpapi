var cache = require("memory-cache");  // Used to implement API caching requirements
const spawn = require("child_process");

function spinpapi(userid, secret, station, callback) {  // Perhaps allow for specififying a cache here (or no cache or file)
    var res;
    res.status = "success";

    if (typeof userid === "object" && userid.hasOwnProperty('userid'), userid.hasOwnProperty('secret')) {
        this.userid = userid.userid;
        this.secret = userid.secret;
        this.station = userid.station;
    } else if ( userid != null && secret != null) {
        this.userid = userid;
        this.secret = secret;
        this.station = station;
    } else {
        res.status ="failure";
    }

    if (typeof callback === "function") {
        callback(res);
    }
}

module.exports = spinpapi;


