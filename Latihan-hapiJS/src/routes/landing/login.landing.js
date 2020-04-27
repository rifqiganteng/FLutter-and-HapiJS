import {getCompare, VerificationUser} from '../../aout/aouth';


const verificationUser = VerificationUser();
const LoginRoute = [
    {
        method: 'POST',
        path: '/login',
        handler: async (request, response) => {
             const{username, password} = request.payload;
             const account = await verificationUser.verifyAccount(username);

             //if(!account) && !(await getCompare(password.))
        }
    }
]