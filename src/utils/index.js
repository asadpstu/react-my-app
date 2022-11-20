import appConst from "../constants/app.const";
export const checkPermission = (permissions = [], key = '') => {
    return permissions.includes(key) || permissions.includes(appConst.masterPermissionKey);
}

