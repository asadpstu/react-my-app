import appConst from "../constants/app.const";
export const checkPermission = (permissions = [], key = '') => {
    return permissions.includes(key) || permissions.includes(appConst.masterPermissionKey);
}

export const emailValidation=(value)=>{
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    if (pattern.test(value)) {  
      return true;
    } 
    else return false;
}


export const passwordValidation=(value)=>{
    const errors = []
    if(value.length != 11) errors.push("Atleast 11 charecter")
    if(isNaN(value)){
        errors.push("Only numeric value is expected")
    }
    return errors;
}


