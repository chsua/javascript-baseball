const { messagePrint } = require("./two_pra_Output") ;

const ErrorHandler = {
    throwException( errormessage, callback ){
        try {
            throw new Error(errormessage) ;
        } catch {
            messagePrint(errormessage) ;
            callback() ; 
        }
    },
}

module.exports = ErrorHandler ;