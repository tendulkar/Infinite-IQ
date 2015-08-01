/**
 * Created by Yugandhar Nanda on 31-07-2015.
 */

var Permissions = {

};


var Roles = {
    'GUEST': 1 << 4,
    'USER': 1<< 8,
    'GROUP_OWNER': 1 << 16,
    'ADMIN': 1 << 20,
    'SUPER_ADMIN': 1 << 26
};


var Actions = {
    'VIEW': 1 << 4,
    'ANALYSIS': 1 << 8,
    'ADD': 1 << 12,
    'OWN': 1 << 18,                 // For editing and deletion
    'ADMIN': 1 << 22
};