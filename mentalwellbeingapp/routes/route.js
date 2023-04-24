
export const publicPaths = ["/signIn", "/signUp", "/","/404","/chat","/quiz", "/writeblog", "/blogs"];







// import { useRouter } from 'next/router';
// import React from 'react'
// import { useAuth } from '../context/authContext'


// export function WithPublic (Component) {
//   return (
//     function WithPublic(props){
//        const auth = useAuth();
//        const router = useRouter();

//        if (auth.user){
//         router.replace("/");
//         return <h1>loading...</h1>
//        }
//        return <Component auth= {auth} {...props}/>
//     }
//   )
// }


// export default function WithProtected () {
//     return (
//       <div>route</div>
//     )
//   }