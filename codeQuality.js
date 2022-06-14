// level {2}

// QUESTION:
// Re-write the below code to better code quality standards. Hint: use modern ES6 syntax and reduce lines of code.

// async function getUsers() {
//   let doc = await Promise.all(getUser(), getProfile(), getPosts());

//   let user = doc[0];
//   let Profile = doc[1];
//   let p = doc[2];

//   const userProfile = {
//     user: user,
//     profile: Profile,
//     posts: p
//   };

//   return userProfile;
// }




//SOLUTION:

async function getUser(){
    let doc = await Promise.all(getUser(),getProfile(),getPosts());
    let [user,Profile,p] = [...doc];
    const userProfile = {
        user,
        profile:Profile,
        posts:p
    };
    return userProfile;
}
getUser()



